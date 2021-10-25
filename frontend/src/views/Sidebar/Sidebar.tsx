import React from 'react';

import { NavItem } from '../../components/NavItem/NavItem';

import './Sidebar.scss';

export function Sidebar() {
  return (
    <nav className='sidebar-nav'>
      <NavItem title='Projects' to='/projects'>
        <NavItem title='Project 1' to='/projects/project1'>
          <NavItem title='English' to='/projects/project1/en' />
          <NavItem title='Dutch' to='/projects/project1/nl' />
          <NavItem title='French' to='/projects/project1/fr' />
        </NavItem>
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
