import classnames from 'classnames';
import React, { FunctionComponent, useState } from 'react';

import { generateRandomId } from '../../helpers/uuid';
import { RadioButton } from '../RadioButton/RadioButton';

import './RadioButtonGroup.scss';

export interface RadioOption {
  disabled?: boolean;
  label: string;
  value: string;
}

export interface RadioButtonGroupProps {
  className?: string;
  inline?: boolean;
  onChange: (value: string) => void;
  options: RadioOption[];
  value: string | null;
}

export const RadioButtonGroup: FunctionComponent<RadioButtonGroupProps> = ({
  options,
  value,
  inline,
  onChange,
  className,
}: RadioButtonGroupProps) => {
  const [generatedName] = useState<string>(`radio-${generateRandomId()}`);

  return (
    <div className={classnames(className, 'c-radio-group', { 'c-radio-group--inline': inline })}>
      {options.map((option: RadioOption) => {
        return (
          <RadioButton
            checked={option.value === value}
            disabled={option.disabled}
            key={`${generatedName}-${option.value}`}
            label={option.label}
            name={generatedName}
            onChange={onChange}
            value={option.value}
          />
        );
      })}
    </div>
  );
};
