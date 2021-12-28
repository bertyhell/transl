import React, { FunctionComponent, ReactNode } from 'react';

import './ButtonToolbar.scss';

export interface ButtonToolbarProps {
  children: ReactNode;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

const ButtonToolbar: FunctionComponent<ButtonToolbarProps> = ({ className = '', children }) => (
  <div className={className}>{children}</div>
);

export { ButtonToolbar };
