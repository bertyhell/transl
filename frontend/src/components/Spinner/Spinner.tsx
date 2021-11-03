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
        'c-spinner--large': size === 'large',
        'c-spinner--light': light,
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
