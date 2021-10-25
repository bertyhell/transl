import classnames from 'classnames';
import React, { ChangeEvent, FunctionComponent, ReactNode } from 'react';

export interface CheckboxPropsSchema {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  label: string | ReactNode;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: FunctionComponent<CheckboxPropsSchema> = ({
  className,
  label,
  id,
  disabled = false,
  checked = false,
  onChange = () => {},
}) => {
  function onValueChange(event: ChangeEvent<HTMLInputElement>) {
    const currentCheckedValue = event.target.checked;

    if (currentCheckedValue !== checked) {
      onChange(currentCheckedValue);
    }
  }

  return (
    <div className={classnames(className, 'c-checkbox')}>
      <label>
        <input checked={checked} disabled={disabled} id={id} onChange={onValueChange} type='checkbox' />
        {label}
      </label>
    </div>
  );
};
