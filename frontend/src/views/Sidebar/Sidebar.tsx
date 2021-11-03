import React, { ReactNode, useState } from 'react';

import { NavItem } from '../../components/NavItem/NavItem';
import { TextInput } from '../../components/TextInput/TextInput';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { GetProjectsQuery, useGetProjectsQuery } from '../../queries/config/graphql-generated-types';

import './Sidebar.scss';

export function Sidebar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useGetProjectsQuery(DATABASE_CONFIG, { userUuid: '6a889836-7e34-4e06-a166-1bc893ed5e4a' });

  const renderLanguage = (
    project: GetProjectsQuery['projects'][0],
    languageLink: GetProjectsQuery['projects'][0]['languages'][0],
  ): ReactNode => {
    return (
      <NavItem
        key={languageLink.language.uuid}
        title={$t(languageLink.language.iso_code)}
        to={`/projects/${project.uuid}/${project.uuid}`}
      />
    );
  };

  const renderProject = (project: GetProjectsQuery['projects'][0]): ReactNode => {
    return (
      <NavItem key={project.uuid} title={project.name} to={`/projects/${project.uuid}`}>
        {project.languages.map(language => renderLanguage(project, language))}
      </NavItem>
    );
  };

  return (
    <nav className='sidebar-nav'>
      <TextInput onChange={setSearchTerm} placeholder='Search' value={searchTerm} />
      <NavItem title='Projects' to='/projects'>
        {data?.projects?.length ? data.projects.map(renderProject) : <span>{$t('No projects found')}</span>}

        <NavItem title='Project 2' to='/projects/project2'>
          <NavItem title='English' to='/projects/project2/en' />
          <NavItem title='Dutch' to='/projects/project2/nl' />
          <NavItem title='French' to='/projects/project2/fr' />
        </NavItem>
        <NavItem title='Project 3' to='/projects/project3'>
          <NavItem title='English' to='/projects/project3/en' />
          <NavItem title='Dutch' to='/projects/project3/nl' />
          <NavItem title='French' to='/projects/project3/fr' />
        </NavItem>
      </NavItem>
    </nav>
  );
}
