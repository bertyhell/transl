import classnames from 'classnames';
import React, { FunctionComponent } from 'react';
import ReactSelect, { ActionMeta, SingleValue } from 'react-select';

import './Select.scss';

export interface SelectOption<T = string> {
  disabled?: boolean;
  label: string;
  value: T;
}

export interface SelectProps {
  className?: string;
  clearable?: boolean;
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  onChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  value?: string | null;
}

export const Select: FunctionComponent<SelectProps> = ({
  className,
  options,
  id,
  disabled = false,
  loading = false,
  clearable = false,
  placeholder,
  value = null,
  onChange = () => {},
}) => {
  function onValueChange(changedValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) {
    if (actionMeta.action !== 'create-option' && changedValue?.value) {
      onChange(changedValue?.value);
    }
  }

  return (
    <ReactSelect
      className={classnames('c-select', className)}
      classNamePrefix='c-select'
      id={id}
      isClearable={clearable}
      isDisabled={disabled}
      isLoading={loading}
      isMulti={false}
      isOptionDisabled={option => !!option.disabled}
      loadingMessage={() => 'Bezig met laden'}
      noOptionsMessage={() => 'Geen opties'}
      onChange={onValueChange}
      options={options}
      placeholder={placeholder}
      value={options.find(option => option.value === value) || null}
    />
  );
};
