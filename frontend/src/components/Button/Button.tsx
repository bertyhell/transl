import classnames from 'classnames';
import React, { FunctionComponent, MouseEvent, ReactNode } from 'react';

import { IconName } from '../icons';
import { Icon } from '../icons/Icon';
import { ButtonType } from './Button.types';

import './Button.scss';

export interface ButtonProps {
  active?: boolean;
  altTitle?: string;
  ariaLabel?: string;
  arrow?: boolean;
  autoHeight?: boolean;
  block?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: IconName;
  id?: string;
  label?: string;
  onClick?(event: MouseEvent<HTMLElement>): void;
  size?: 'small' | 'large';
  title?: string;
  tooltip?: string;

  type?: ButtonType;
}

const Button: FunctionComponent<ButtonProps> = ({
  active,
  ariaLabel,
  arrow,
  autoHeight = false,
  block = false,
  children,
  className,
  disabled,
  icon,
  label,
  onClick,
  size,
  title,
  type = 'primary',
  id,
}) => {
  const handleButtonClick = (evt: MouseEvent<HTMLElement>) => {
    if (!disabled && onClick) {
      onClick(evt);
    }
  };

  const renderButton = () => {
    return (
      <button
        aria-label={ariaLabel}
        className={classnames(className, 'c-button', {
          'c-button--active': active,
          'c-button--auto': autoHeight,
          'c-button--block': block,
          'c-button--icon': icon && !label,
          'c-button--large': size === 'large',
          'c-button--small': size === 'small',
          [`c-button--${type}`]: type,
        })}
        disabled={disabled}
        id={id}
        onClick={handleButtonClick}
        title={title}>
        {children ? (
          children
        ) : (
          <div className='c-button__content'>
            {icon && <Icon name={icon} />}
            {label && <div className='c-button__label'>{label}</div>}
            {arrow && <Icon name='CaretDown' />}
          </div>
        )}
      </button>
    );
  };
  return renderButton();
};

export { Button };
