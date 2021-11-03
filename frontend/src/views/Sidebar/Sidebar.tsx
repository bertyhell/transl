import { stringify } from 'query-string';
import React, { ReactNode, useState } from 'react';

import { NavItem } from '../../components/NavItem/NavItem';
import { TextInput } from '../../components/TextInput/TextInput';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { GetCompaniesAndProjectsQuery, useGetCompaniesAndProjectsQuery } from '../../queries/config/graphql-generated-types';

import './Sidebar.scss';

export function Sidebar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: '6a889836-7e34-4e06-a166-1bc893ed5e4a' });

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
      <NavItem key={project.uuid} title={project.name} to={`/projects/${project.uuid}/details`}>
        {project.language_links.map(languageLink => renderLanguage(project, languageLink))}
      </NavItem>
    );
  };

  const renderCompany = (company: GetCompaniesAndProjectsQuery['companies'][0]): ReactNode => {
    return (
      <NavItem title={company?.name} to={`/companies/${company?.uuid}`}>
        {company?.projects?.length ? company.projects.map(renderProject) : <>{$t('no projects yet')}</>}
      </NavItem>
    );
  };

  return (
    <nav className='sidebar-nav'>
      <TextInput onChange={setSearchTerm} placeholder='Search' value={searchTerm} />
      {data?.companies.length ? data.companies.map(renderCompany) : <span>{$t('No projects found')}</span>}
    </nav>
  );
}
