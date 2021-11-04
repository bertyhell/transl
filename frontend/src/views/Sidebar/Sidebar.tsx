import { stringify } from 'query-string';
import React, { ReactNode, useState } from 'react';

import { Button } from '../../components/Button/Button';
import { ButtonToolbar } from '../../components/ButtonToolbar/ButtonToolbar';
import { NavItem } from '../../components/NavItem/NavItem';
import { TextInput } from '../../components/TextInput/TextInput';
import { USER_UUID } from '../../constants/user';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { GetCompaniesAndProjectsQuery, useGetCompaniesAndProjectsQuery } from '../../queries/config/graphql-generated-types';
import { AddCompanyModal } from '../modals/AddCompanyModal';
import { AddLanguageModal } from '../modals/AddLanguageModal';
import { AddProjectModal } from '../modals/AddProjectModal';

import './Sidebar.scss';

export function Sidebar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: USER_UUID });
  const [isAddCompanyModalOpen, setIsAddCompanyModalOpen] = useState(false);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isAddLanguageModalOpen, setIsAddLanguageModalOpen] = useState(false);

  const renderLanguage = (
    project: GetCompaniesAndProjectsQuery['companies'][0]['projects'][0],
    languageLink: GetCompaniesAndProjectsQuery['companies'][0]['projects'][0]['language_links'][0],
  ): ReactNode => {
    return (
      <NavItem
        key={languageLink.language.uuid}
        title={$t(languageLink.language.iso_code)}
        to={`/projects/${project.uuid}/translations?${stringify({ languageCodes: [languageLink.language.iso_code] })}`}
      />
    );
  };

  const renderProject = (project: GetCompaniesAndProjectsQuery['companies'][0]['projects'][0]): ReactNode => {
    return (
      <NavItem key={project.uuid} title={project.name} to={`/projects/${project.uuid}`}>
        {project.language_links.map(languageLink => renderLanguage(project, languageLink))}
      </NavItem>
    );
  };

  const renderCompany = (company: GetCompaniesAndProjectsQuery['companies'][0]): ReactNode => {
    return (
      <NavItem key={company?.uuid} title={company?.name} to={`/companies/${company?.uuid}`}>
        {company?.projects?.length ? company.projects.map(renderProject) : <>{$t('no projects yet')}</>}
      </NavItem>
    );
  };

  return (
    <nav className='sidebar-nav'>
      <TextInput onChange={setSearchTerm} placeholder='Search' value={searchTerm} />
      {data?.companies.length ? data.companies.map(renderCompany) : <span>{$t('No projects found')}</span>}
      <ButtonToolbar direction='vertical'>
        <Button block icon='Briefcase' label={$t('Add Company')} onClick={() => setIsAddCompanyModalOpen(true)} type='primary' />
        <Button block icon='Folder' label={$t('Add Project')} onClick={() => setIsAddProjectModalOpen(true)} type='primary' />
        <Button block icon='Mic' label={$t('Add Language')} onClick={() => setIsAddLanguageModalOpen(true)} type='primary' />
      </ButtonToolbar>
      <AddCompanyModal isOpen={isAddCompanyModalOpen} onClose={() => setIsAddCompanyModalOpen(false)} />
      <AddProjectModal isOpen={isAddProjectModalOpen} onClose={() => setIsAddProjectModalOpen(false)} />
      <AddLanguageModal isOpen={isAddLanguageModalOpen} onClose={() => setIsAddLanguageModalOpen(false)} />
    </nav>
  );
}
