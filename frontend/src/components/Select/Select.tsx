import React from 'react';
import ReactSelect, { ActionMeta } from 'react-select';
import { OnChangeValue } from 'react-select/dist/declarations/src/types';

import { $t } from '../../helpers/i18n';

import './Select.scss';

export interface SelectProps<Option, IsMulti extends boolean = false> {
  className?: string;
  clearable?: boolean;
  disabled?: boolean;
  formatOptionLabel?: (option: Option) => string;
  id?: string;
  isMulti?: IsMulti;
  loading?: boolean;
  onChange?: (value: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) => void;
  options: Option[];
  placeholder?: string;
  value?: Option;
}

export function Select<Option, IsMulti extends boolean = false>({
  className,
  options,
  id,
  disabled = false,
  loading = false,
  clearable = false,
  placeholder,
  value,
  onChange = () => {},
  isMulti,
  formatOptionLabel = (option: Option) => {
    const label: string | undefined = (option as { label?: string })?.label;
    const name: string | undefined = (option as { name?: string })?.name;
    const key: string | undefined = (option as { key?: string })?.key;

    return label || name || key || JSON.stringify(option);
  },
}: SelectProps<Option, IsMulti>) {
  return (
    <ReactSelect<Option, IsMulti>
      className={'c-select' + (className ? ' ' + className : '')}
      classNamePrefix='c-select'
      formatOptionLabel={formatOptionLabel}
      id={id}
      isClearable={clearable}
      isDisabled={disabled}
      isLoading={loading}
      isMulti={isMulti}
      loadingMessage={() => $t('Loading')}
      noOptionsMessage={() => $t('No options')}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      value={value}
    />
  );
}
