import classnames from 'classnames';
import { flatten, flattenDeep } from 'lodash-es';
import React, { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { NavItem } from '../../components/NavItem/NavItem';
import { TextInput } from '../../components/TextInput/TextInput';
import { USER_UUID } from '../../constants/user';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useGetCompaniesAndProjectsQuery } from '../../queries/config/graphql-generated-types';
import { Branch, Company, Project } from '../../queries/type-aliasses';
import { AddBranchModal } from '../modals/AddBranchModal';
import { AddCompanyModal } from '../modals/AddCompanyModal';
import { AddLanguageModal } from '../modals/AddLanguageModal';
import { AddProjectModal } from '../modals/AddProjectModal';

enum NavItemType {
  Branch = 'branch',
  Company = 'company',
  Project = 'project',
}

interface SearchableNavItem {
  parent: null | SearchableNavItem;
  type: NavItemType;
  value: Company | Project | Branch;
}

interface Props {
  className?: string;
}

export function Sidebar({ className }: Props) {
  const { companyUuid, projectUuid, branchUuid } = useParams();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: USER_UUID });
  const [isAddCompanyModalOpen, setIsAddCompanyModalOpen] = useState(false);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isAddBranchModalOpen, setIsAddBranchModalOpen] = useState(false);
  const [isAddLanguageModalOpen, setIsAddLanguageModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  // computed
  // Convert the data to a list of nav items
  const navItems: SearchableNavItem[] = flattenDeep([
    ...(data?.companies || []).map((company): SearchableNavItem[] => {
      const companyNavItem = { parent: null, type: NavItemType.Company, value: company };
      return [
        companyNavItem,
        ...flatten(
          (company?.projects || []).map((project): SearchableNavItem[] => {
            const projectNavItem = { parent: companyNavItem, type: NavItemType.Project, value: project };
            return [
              projectNavItem,
              ...(project?.branches || []).map((branch): SearchableNavItem => {
                return { parent: projectNavItem, type: NavItemType.Branch, value: branch };
              }),
            ];
          }),
        ),
      ];
    }),
  ]);

  // When a branch is selected, also select its parent project and its parent company
  useEffect(() => {
    if (branchUuid && navItems?.length) {
      const branch = navItems.find(navItem => navItem.value.uuid === branchUuid);
      if (branch) {
        setSelectedBranch(branch.value as Branch);
        setSelectedProject(branch.parent?.value as Project);
        setSelectedCompany(branch.parent?.parent?.value as Company);
      }
    } else if (!branchUuid) {
      setSelectedBranch(null);
    }
  }, [branchUuid, navItems, setSelectedBranch, setSelectedProject, setSelectedCompany]);

  // When a project is selected, also select its parent company
  useEffect(() => {
    if (projectUuid && navItems?.length) {
      const project = navItems.find(navItem => navItem.value.uuid === projectUuid);
      if (project) {
        setSelectedProject(project.value as Project);
        setSelectedCompany(project.parent?.value as Company);
      }
    } else if (!projectUuid && !branchUuid) {
      setSelectedProject(null);
    }
  }, [branchUuid, projectUuid, navItems, setSelectedProject, setSelectedCompany]);

  // When a company is selected, also save the company in the state
  useEffect(() => {
    if (companyUuid && navItems?.length) {
      const company = navItems.find(navItem => navItem.value.uuid === companyUuid);
      if (company) {
        setSelectedCompany(company.value as Company);
      }
    } else if (!companyUuid && !projectUuid && !branchUuid) {
      setSelectedCompany(null);
    }
  }, [companyUuid, projectUuid, branchUuid, navItems, setSelectedCompany]);

  const renderBranch = (branch: Branch): ReactNode => {
    return (
      <NavItem
        icon='GitBranch'
        key={branch.uuid}
        level={2}
        showChildrenInitial={branchUuid === branch.uuid}
        title={branch.name}
        to={`/branches/${branch.uuid}/details`}>
        <NavItem
          icon='AlignJustify'
          level={3}
          showChildrenInitial={false}
          title={$t('Translations')}
          to={`/branches/${branch.uuid}/translations?languageCodes=${branch.branch_languages
            .map(branchLanguage => branchLanguage.language.iso_code)
            .join('|')}`}
        />
      </NavItem>
    );
  };

  const renderProject = (project: Project): ReactNode => {
    return (
      <NavItem
        icon='Layout'
        key={project.uuid}
        level={1}
        showChildrenInitial={projectUuid === project.uuid || !!project.branches.find(branch => branch.uuid === branchUuid)}
        title={project.name}
        to={`/projects/${project.uuid}/details`}>
        {project?.branches?.length && project.branches.map(branch => renderBranch(branch))}
      </NavItem>
    );
  };

  const renderCompany = (company: Company): ReactNode => {
    return (
      <NavItem
        icon='Briefcase'
        key={company?.uuid}
        level={0}
        showChildrenInitial={
          companyUuid === company.uuid ||
          !!company.projects.find(
            project => project.uuid === projectUuid || !!project.branches.find(branch => branch.uuid === branchUuid),
          )
        }
        title={company?.name}
        to={`/companies/${company?.uuid}/details`}>
        {company?.projects?.length && company.projects.map(project => renderProject(project))}
      </NavItem>
    );
  };

  return (
    <nav className={classnames(className, 'bg-gray-400 h-screen p-2 flex flex-col')}>
      <div className='flex-grow'>
        <TextInput icon='Search' onChange={setSearchTerm} placeholder='Search' value={searchTerm} />
        {data?.companies.length ? data.companies.map(renderCompany) : <span>{$t('No projects found')}</span>}
      </div>
      <div>
        <Button
          block
          className='mb-1'
          icon='Briefcase'
          label={$t('Add Company')}
          onClick={() => setIsAddCompanyModalOpen(true)}
          type='primary'
        />
        <Button
          block
          className='mb-1'
          icon='Layout'
          label={$t('Add Project')}
          onClick={() => setIsAddProjectModalOpen(true)}
          type='primary'
        />
        <Button
          block
          className='mb-1'
          icon='GitBranch'
          label={$t('Add Branch')}
          onClick={() => setIsAddBranchModalOpen(true)}
          type='primary'
        />
        <Button block icon='Mic' label={$t('Add Language')} onClick={() => setIsAddLanguageModalOpen(true)} type='primary' />
      </div>
      <AddCompanyModal isOpen={isAddCompanyModalOpen} onClose={() => setIsAddCompanyModalOpen(false)} />
      <AddProjectModal
        initialCompany={selectedCompany}
        isOpen={isAddProjectModalOpen}
        onClose={() => setIsAddProjectModalOpen(false)}
      />
      <AddBranchModal
        initialBranch={selectedBranch}
        initialCompany={selectedCompany}
        initialProject={selectedProject}
        isOpen={isAddBranchModalOpen}
        onClose={() => setIsAddBranchModalOpen(false)}
      />
      <AddLanguageModal
        initialBranch={selectedBranch}
        initialCompany={selectedCompany}
        initialProject={selectedProject}
        isOpen={isAddLanguageModalOpen}
        onClose={() => setIsAddLanguageModalOpen(false)}
      />
    </nav>
  );
}
