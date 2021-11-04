import classnames from 'classnames';
import React from 'react';
import Select, { ActionMeta } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { OnChangeValue } from 'react-select/dist/declarations/src/types';

import { $t } from '../../helpers/i18n';

import './TagsInput.scss';

export interface TagsInputProps<Option, IsMulti extends boolean> {
  allowCreate?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  isLoading?: boolean;
  isMulti: IsMulti;
  onChange?: (newValue: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) => void;
  onCreate?: (value: Option) => void;
  options: Option[];
  placeholder?: string;
  value?: Option[];
}

export function TagsInput<Option, IsMulti extends boolean>({
  options,
  id,
  disabled = false,
  value = [],
  className = '',
  placeholder = '',
  allowCreate = false,
  isLoading = false,
  onChange = () => {},
  isMulti,
}: TagsInputProps<Option, IsMulti>) {
  const classes = classnames(className, 'c-tags-input');

  return allowCreate ? (
    <CreatableSelect
      className={classes}
      classNamePrefix='c-tags-input'
      formatCreateLabel={(val: string) => $t('create {val}', { val })}
      id={id}
      isDisabled={disabled}
      isLoading={isLoading}
      isMulti={isMulti}
      isSearchable={true}
      loadingMessage={() => $t('Loading')}
      noOptionsMessage={() => $t('No options')}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      value={value}
    />
  ) : (
    <Select
      className={classes}
      classNamePrefix='c-tags-input'
      id={id}
      isDisabled={disabled}
      isLoading={isLoading}
      isMulti={isMulti}
      isSearchable={true}
      loadingMessage={() => $t('Loading')}
      noOptionsMessage={() => $t('No options')}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      value={value}
    />
  );
}
