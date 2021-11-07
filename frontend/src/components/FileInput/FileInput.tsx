import classnames from 'classnames';
import React, { ChangeEvent, FunctionComponent } from 'react';

import { Button } from '../Button/Button';

import './FileInput.scss';

export interface FileInputProps {
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  multiple?: boolean;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const FileInput: FunctionComponent<FileInputProps> = ({
  className,
  id,
  disabled,
  placeholder = 'Upload',
  ariaLabel = '',
  onChange = () => {},
  multiple = false,
}) => {
  return (
    <Button
      ariaLabel={ariaLabel || placeholder}
      className={classnames('c-button--file', className)}
      disabled={disabled}
      type='secondary'>
      <div className='c-button__label'>{placeholder}</div>
      <input
        disabled={disabled}
        id={id}
        type='file'
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
        multiple={multiple}
        onChange={onChange}
      />
    </Button>
  );
};
