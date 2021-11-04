import { stringify } from 'query-string';
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
import { Company, Project, ProjectLanguageLink } from '../../queries/type-aliasses';
import { AddCompanyModal } from '../modals/AddCompanyModal';
import { AddLanguageModal } from '../modals/AddLanguageModal';
import { AddProjectModal } from '../modals/AddProjectModal';

import './Sidebar.scss';

export function Sidebar() {
  const { companyUuid, projectUuid } = useParams();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: USER_UUID });
  const [isAddCompanyModalOpen, setIsAddCompanyModalOpen] = useState(false);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isAddLanguageModalOpen, setIsAddLanguageModalOpen] = useState(false);

  const renderLanguage = (company: Company, project: Project, projectLanguageLink: ProjectLanguageLink): ReactNode => {
    return (
      <NavItem
        key={projectLanguageLink.language.uuid}
        title={$t(projectLanguageLink.language.iso_code)}
        to={`/companies/${company.uuid}/projects/${project.uuid}/translations?${stringify({
          languageCodes: [projectLanguageLink.language.iso_code],
        })}`}
      />
    );
  };

  const renderProject = (company: Company, project: Project): ReactNode => {
    return (
      <NavItem key={project.uuid} title={project.name} to={`/companies/${company.uuid}/projects/${project.uuid}`}>
        {project?.language_links?.length &&
          project.language_links.map(languageLink => renderLanguage(company, project, languageLink))}
      </NavItem>
    );
  };

  const renderCompany = (company: Company): ReactNode => {
    return (
      <NavItem key={company?.uuid} title={company?.name} to={`/companies/${company?.uuid}`}>
        {company?.projects?.length && company.projects.map(project => renderProject(company, project))}
      </NavItem>
    );
  };

  return (
    <nav className='sidebar-nav'>
      <div className='c-sidebar-nav-top'>
        <TextInput icon='Search' onChange={setSearchTerm} placeholder='Search' value={searchTerm} />
        {data?.companies.length ? data.companies.map(renderCompany) : <span>{$t('No projects found')}</span>}
      </div>
      <ButtonToolbar className='c-sidebar-nav-bottom' direction='vertical'>
        <Button block icon='Briefcase' label={$t('Add Company')} onClick={() => setIsAddCompanyModalOpen(true)} type='primary' />
        <Button
          block
          disabled={!companyUuid}
          icon='Folder'
          label={$t('Add Project')}
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
