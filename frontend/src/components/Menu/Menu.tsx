import classnames from 'classnames';
import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';

import { MenuContent, MenuItemInfo } from './MenuContent/MenuContent';

import './Menu.scss';

export interface MenuProps {
  className?: string;
  isOpen?: boolean;
  menuItems?: MenuItemInfo[] | MenuItemInfo[][]; // If you want to render your own item
  noResultsLabel?: string;
  onClick?: (menuItemId: string | number) => void;
  // Between arrays, there will be a divider
  renderItem?: (menuItem: MenuItemInfo) => ReactNode;
  search?: boolean;
  style?: CSSProperties;
}

export const Menu: FunctionComponent<MenuProps> = ({
  className,
  children,
  menuItems = [],
  renderItem,
  noResultsLabel,
  onClick = () => {},
  isOpen = true,
  search,
  style,
}) => {
  return (
    <div
      className={classnames(className, 'c-menu', {
        'c-menu__search-result': search,
        'c-menu__visible': isOpen,
      })}
      style={style}>
      {children ? (
        children
      ) : (
        <MenuContent menuItems={menuItems} noResultsLabel={noResultsLabel} onClick={onClick} renderItem={renderItem} />
      )}
    </div>
  );
};
