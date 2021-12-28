import classnames from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IconName } from '../icons';
import { Icon } from '../icons/Icon';

interface NavItemProps {
  icon: IconName;
  // depth of the indentation to indicate parent child hierarchy
  level: number;
  showChildrenInitial: boolean;
  title: string;
  to: string;
}

export const NavItem: FunctionComponent<NavItemProps> = ({ title, showChildrenInitial, to, level, icon, children }) => {
  const [showChildren, setShowChildren] = useState<boolean>(showChildrenInitial);

  return (
    <>
      <NavLink
        className={({ isActive }) => {
          return classnames(`nav-item flex flex-row py-2 px-2 bg-gray-200 rounded my-0.5`, {
            'bg-sky-300': isActive,
            collapsed: !showChildren,
          });
        }}
        onClick={() => setShowChildren(!showChildren)}
        style={{ marginLeft: `${5 + level * 26}px` }}
        to={to}>
        {!!children && <Icon name={showChildren ? 'ChevronDown' : 'ChevronRight'} />}
        <Icon name={icon} />
        <span className='ml-2'>{title}</span>
      </NavLink>
      {showChildren && !!children && <div className={'mb-2'}>{children}</div>}
    </>
  );
};
