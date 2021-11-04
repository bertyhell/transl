import classnames from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../Button/Button';

import './NavItem.scss';

interface NavItemProps {
  title: string;
  to: string;
}

export const NavItem: FunctionComponent<NavItemProps> = ({ title, to, children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  if (children) {
    return (
      <>
        <NavLink
          className={({ isActive }) => {
            return classnames('nav-item', { collapsed: isCollapsed, 'nav-item-active': isActive });
          }}
          to={to}>
          <span>{title}</span>
          {!!children && <Button icon={'ChevronDown'} onClick={() => setIsCollapsed(!isCollapsed)} type='borderless' />}
        </NavLink>
        {!isCollapsed && <div>{children}</div>}
      </>
    );
  } else {
    return (
      <NavLink
        className={({ isActive }) => {
          return classnames('nav-item', { 'nav-item-active': isActive });
        }}
        to={to}>
        {title}
      </NavLink>
    );
  }
};
