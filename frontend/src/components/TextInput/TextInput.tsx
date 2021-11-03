import classnames from 'classnames';
import React, { ChangeEvent, FunctionComponent, KeyboardEvent } from 'react';

import { IconName } from '../icons';
import { Icon } from '../icons/Icon';

type InputType = 'password' | 'text' | 'email' | 'search' | 'number' | 'tel' | 'url';

export interface TextInputProps {
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  icon?: IconName;
  id?: string;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (value: string) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: InputType;
  value?: string;
}

export const TextInput: FunctionComponent<TextInputProps> = ({
  className,
  id,
  disabled = false,
  placeholder,
  value = '',
  icon,
  type = 'text',
  ariaLabel = '',
  onChange = () => {},
  onBlur = () => {},
  onKeyUp = () => {},
}) => {
  function onValueChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  const classes = classnames(className, icon ? 'c-input-with-icon' : 'c-input');

  return icon ? (
    <div className={classes}>
      <input
        className='c-input'
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
        onBlur={onBlur}
        onChange={onValueChange}
        onKeyUp={onKeyUp}
      />
      <Icon name={icon} />
    </div>
  ) : (
    <input
      className={classes}
      disabled={disabled}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      onBlur={onBlur}
      onChange={onValueChange}
      onKeyUp={onKeyUp}
    />
  );
};
