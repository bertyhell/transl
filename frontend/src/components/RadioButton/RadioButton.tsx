import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

export interface RadioButtonProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  label: string;
  name: string;
  onChange?: (value: string) => void;
  value: string;
}

export const RadioButton: FunctionComponent<RadioButtonProps> = ({
  label,
  name,
  value,
  id,
  disabled = false,
  checked = false,
  onChange = () => {},
  className,
}) => {
  return (
    <div className={classnames(className, 'c-radio')}>
      <label>
        <input
          checked={checked}
          disabled={disabled}
          id={id}
          name={name}
          onChange={evt => onChange(evt.target.value)}
          type='radio'
          value={value}
        />
        {label}
      </label>
    </div>
  );
};
