import classnames from 'classnames';
import React, { ChangeEvent, FunctionComponent, KeyboardEvent, Ref } from 'react';

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
  ref?: Ref<HTMLInputElement>;
  type?: InputType;
  value?: string;
}

export const TextInput: FunctionComponent<TextInputProps> = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
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
    },
    ref,
  ) => {
    function onValueChange(event: ChangeEvent<HTMLInputElement>) {
      onChange(event.target.value);
    }

    return icon ? (
      <div className={classnames(className, 'relative flex items-center')}>
        <input
          className={classnames('w-full p-2 rounded border-2 border-gray-200 focus:border-2 focus:border-cyan-500 outline-0')}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
          onBlur={onBlur}
          onChange={onValueChange}
          onKeyUp={onKeyUp}
          ref={ref}
        />
        <Icon className='absolute right-2 stroke-gray-400' name={icon} />
      </div>
    ) : (
      <input
        className={classnames(className, 'p-2 rounded border-2 border-gray-200 focus:border-2 focus:border-cyan-500 outline-0')}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
        onBlur={onBlur}
        onChange={onValueChange}
        onKeyUp={onKeyUp}
        ref={ref}
      />
    );
  },
);
