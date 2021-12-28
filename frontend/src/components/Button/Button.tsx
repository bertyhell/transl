import classnames from 'classnames';
import React, { CSSProperties, FunctionComponent, MouseEvent, ReactNode } from 'react';

import { IconName } from '../icons';
import { Icon } from '../icons/Icon';
import { ButtonType } from './Button.types';

export interface ButtonProps {
  ariaLabel?: string;
  block?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: IconName;
  id?: string;
  label?: string;
  onClick?(event: MouseEvent<HTMLElement>): void;
  style?: CSSProperties;
  title?: string;
  type?: ButtonType;
}

const Button: FunctionComponent<ButtonProps> = ({
  style,
  ariaLabel,
  block = false,
  children,
  className,
  disabled,
  icon,
  label,
  onClick,
  title,
  type = 'primary',
  id,
}) => {
  const handleButtonClick = (evt: MouseEvent<HTMLElement>) => {
    if (!disabled && onClick) {
      onClick(evt);
    }
  };

  const getTypeStyles = () => {
    if (disabled) {
      return 'bg-gray-300 cursor-default';
    }
    switch (type) {
      case 'primary':
        return 'cursor-pointer bg-sky-300 hover:bg-sky-200 hover:border-sky-200 border-2 border-sky-300 border-solid';
      case 'secondary':
        return 'cursor-pointer bg-gray-100 hover:bg-white border-2 border-gray-200 border-solid';
      case 'danger':
        return 'cursor-pointer bg-red-500 hover:bg-red-300 border-2 border-red-500 border-solid';
      case 'borderless':
        return 'cursor-pointer hover:bg-gray-100 border-2 border-transparent border-solid';
      default:
        return 'cursor-pointer border-2 border-gray-400 border-solid';
    }
  };

  return (
    <button
      aria-label={ariaLabel}
      className={classnames(className, { 'w-full': block }, getTypeStyles(), 'rounded p-2')}
      disabled={disabled}
      id={id}
      onClick={handleButtonClick}
      style={style}
      title={title}>
      {children ? (
        children
      ) : (
        <div className={classnames('flex flex-row')}>
          {icon && <Icon name={icon} />}
          {label && <div className='ml-2'>{label}</div>}
        </div>
      )}
    </button>
  );
};

export { Button };
