import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import './FormGroup.scss';

export interface FormGroupProps {
  children: ReactNode;
  className?: string;
  error?: string | string[];
  inlineMode?: 'grow' | 'shrink';
  label?: string;
  labelFor?: string;
  required?: boolean;
}

export const FormGroup: FunctionComponent<FormGroupProps> = ({
  className,
  label,
  labelFor,
  required = false,
  error,
  inlineMode,
  children,
}) => {
  const errorArray = typeof error === 'string' ? [error] : error;

  return (
    <div
      className={classnames(className, 'o-form-group', {
        'o-form-group__error': error,
        [`o-form-group__inline-${inlineMode}`]: inlineMode,
      })}>
      {label && (
        <label className='o-form-group__label' htmlFor={labelFor}>
          {label}
          {required ? (
            <abbr className='required' title='Verplicht veld'>
              *
            </abbr>
          ) : null}
        </label>
      )}
      <div className='o-form-group__controls'>
        {children}
        {!!errorArray &&
          !!errorArray.length &&
          errorArray.map((err: string, index: number) => (
            <div className='c-form-help-text c-form-help-text__error' key={`${err}-${index}`}>
              {err}
            </div>
          ))}
      </div>
    </div>
  );
};
