import classnames from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../../icons/Icon';

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
        <Link className={classnames('nav-item', { collapsed: isCollapsed })} onClick={() => setIsCollapsed(!isCollapsed)} to={to}>
          <span>{title}</span>
          <Icon name='ChevronDown' />
        </Link>
        {!isCollapsed && <div>{children}</div>}
      </>
    );
  } else {
    return (
      <Link className='nav-item' to={to}>
        {title}
      </Link>
    );
  }
};
