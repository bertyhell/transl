import classnames from 'classnames';
import React, { Fragment, FunctionComponent, ReactNode } from 'react';

import { IconName } from '../../icons';
import { Icon } from '../../icons/Icon';

import './MenuContent.scss';

export interface MenuItemInfo {
  icon?: IconName;
  id: string | number;
  label: string;
}

export interface MenuContentProps {
  className?: string;
  menuItems: MenuItemInfo[] | MenuItemInfo[][];
  // If you want to render your own item
  noResultsLabel?: string;
  onClick?: (menuItemId: string | number) => void;
  // Between arrays, there will be a divider
  renderItem?: (menuItem: MenuItemInfo) => ReactNode;
}

export const MenuContent: FunctionComponent<MenuContentProps> = ({
  className,
  menuItems,
  renderItem,
  noResultsLabel,
  onClick = () => {},
}) => {
  const renderMenuItem = (menuItemInfo: MenuItemInfo) => {
    if (renderItem) {
      return renderItem(menuItemInfo);
    }
    return (
      <div
        className={classnames(className, 'c-menu__item')}
        key={`menu-item-${menuItemInfo.id}`}
        onClick={() => onClick(menuItemInfo.id)}>
        <div className='c-menu__label'>
          {menuItemInfo.icon && <Icon name={menuItemInfo.icon} />}
          {menuItemInfo.label}
        </div>
      </div>
    );
  };

  const renderMenuItems = (menuItems: MenuItemInfo[]) => {
    return menuItems.map(renderMenuItem);
  };

  const renderMenuItemArrays = (menuItemArrays: MenuItemInfo[] | MenuItemInfo[][]) => {
    if (menuItems.length) {
      if (Array.isArray(menuItemArrays[0])) {
        // Array of arrays with dividers in between
        return (
          <Fragment>
            {(menuItemArrays as MenuItemInfo[][]).map((menuItems, index) => {
              if (index < menuItemArrays.length - 1) {
                return (
                  <Fragment key={`menu-item-group-${menuItems.map(mi => mi.id).join('-')}`}>
                    {renderMenuItems(menuItems)}
                    <div className='c-menu__divider' />
                  </Fragment>
                );
              }
              return (
                <Fragment key={`menu-item-group-${menuItems.map(mi => mi.id).join('-')}`}>{renderMenuItems(menuItems)}</Fragment>
              );
            })}
          </Fragment>
        );
      }
      // Regular list of menuItems
      return (
        <Fragment key={(menuItemArrays as MenuItemInfo[]).map(mi => mi.id).join('-')}>
          {renderMenuItems(menuItems as MenuItemInfo[])}
        </Fragment>
      );
    }
    if (noResultsLabel) {
      return (
        <div className='c-menu__item' key={`menu-item-no-results`}>
          <div className='c-menu__label'>{noResultsLabel}</div>
        </div>
      );
    }
    return <Fragment />;
  };

  return <Fragment>{renderMenuItemArrays(menuItems)}</Fragment>;
};
