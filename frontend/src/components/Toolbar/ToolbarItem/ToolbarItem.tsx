import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import './ToolbarItem.scss';

export interface ToolbarItemProps {
  children: ReactNode;
  className?: string;
  grow?: boolean;
}

export const ToolbarItem: FunctionComponent<ToolbarItemProps> = ({ children, grow = false, className }) => {
  return <div className={classnames(className, 'c-toolbar__item', { 'c-toolbar__item--grow': grow })}>{children}</div>;
};
