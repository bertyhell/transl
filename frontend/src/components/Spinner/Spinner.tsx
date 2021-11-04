import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import './Spinner.scss';

export interface SpinnerProps {
  className?: string;
  light?: boolean;
  size?: 'large';
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ className, size, light = false }) => {
  return (
    <div
      className={classnames(className, 'c-spinner', {
        'c-spinner__large': size === 'large',
        'c-spinner__light': light,
      })}>
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
      <div className='c-spinner__bar' />
    </div>
  );
};
