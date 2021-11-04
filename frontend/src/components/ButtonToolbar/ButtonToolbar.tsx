import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import './ButtonToolbar.scss';

export interface ButtonToolbarProps {
  children: ReactNode;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

const ButtonToolbar: FunctionComponent<ButtonToolbarProps> = ({ className = '', children, direction = 'horizontal' }) => (
  <div className={classnames(className, 'c-button-toolbar', `c-button-toolbar-${direction}`)}>{children}</div>
);

export { ButtonToolbar };
