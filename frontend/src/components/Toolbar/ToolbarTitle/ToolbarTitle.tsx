import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import './ToolbarTitle.scss';

export interface ToolbarTitleProps {
  children: ReactNode;
  className?: string;
}

export const ToolbarTitle: FunctionComponent<ToolbarTitleProps> = ({ children, className }) => {
  return <h2 className={classnames(className, 'c-toolbar__title')}>{children}</h2>;
};
