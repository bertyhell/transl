import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import './Form.scss';

export interface FormPropsSchema {
  children: ReactNode;
  className?: string;
  type?: 'standard' | 'horizontal' | 'inline';
}

export const Form: FunctionComponent<FormPropsSchema> = ({ className, type = 'standard', children }) => (
  <div className={classnames(className, 'o-form-group-layout', `o-form-group-layout__${type}`)}>{children}</div>
);
