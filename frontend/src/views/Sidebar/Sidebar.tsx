import classnames from 'classnames';
import React, { ReactNode, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { ButtonToolbar } from '../../components/ButtonToolbar/ButtonToolbar';
import { NavItem } from '../../components/NavItem/NavItem';
import { TextInput } from '../../components/TextInput/TextInput';
import { USER_UUID } from '../../constants/user';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useGetCompaniesAndProjectsQuery } from '../../queries/config/graphql-generated-types';
import { Branch, BranchLanguage, Company, Project } from '../../queries/type-aliasses';
import { AddCompanyModal } from '../modals/AddCompanyModal';
import { AddLanguageModal } from '../modals/AddLanguageModal';
import { AddProjectModal } from '../modals/AddProjectModal';

interface Props {
  className?: string;
}

export function Sidebar({ className }: Props) {
  const { companyUuid, projectUuid, branchUuid } = useParams();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: USER_UUID });
  const [isAddCompanyModalOpen, setIsAddCompanyModalOpen] = useState(false);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isAddLanguageModalOpen, setIsAddLanguageModalOpen] = useState(false);

  const renderBranch = (branch: Branch): ReactNode => {
    return (
      <NavItem
        icon='GitBranch'
        key={branch.uuid}
        level={2}
        showChildrenInitial={branchUuid === branch.uuid}
        title={branch.name}
        to={`/branches/${branch.uuid}`}>
        <NavItem
          icon='AlignJustify'
          level={3}
          showChildrenInitial={false}
          title={$t('Translations')}
          to={`/branches/${branch.uuid}/translations?languageCodes=all`}
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
        to={`/projects/${project.uuid}`}>
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
        to={`/companies/${company?.uuid}`}>
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
      <ButtonToolbar className='c-sidebar-nav-bottom' direction='vertical'>
        <Button block icon='Briefcase' label={$t('Add Company')} onClick={() => setIsAddCompanyModalOpen(true)} type='primary' />
        <Button
          block
          disabled={!companyUuid}
          icon='Layout'
          label={$t('Add Project')}
          onClick={() => setIsAddProjectModalOpen(true)}
          type='primary'
        />
        <Button
          block
          disabled={!companyUuid}
          icon='GitBranch'
          label={$t('Add Branch')}
          onClick={() => setIsAddProjectModalOpen(true)}
          type='primary'
        />
        <Button
          block
          disabled={!projectUuid}
          icon='Mic'
          label={$t('Add Language')}
          onClick={() => setIsAddLanguageModalOpen(true)}
          type='primary'
        />
      </ButtonToolbar>
      <AddCompanyModal isOpen={isAddCompanyModalOpen} onClose={() => setIsAddCompanyModalOpen(false)} />
      <AddProjectModal isOpen={isAddProjectModalOpen} onClose={() => setIsAddProjectModalOpen(false)} />
      <AddLanguageModal isOpen={isAddLanguageModalOpen} onClose={() => setIsAddLanguageModalOpen(false)} />
    </nav>
  );
}
