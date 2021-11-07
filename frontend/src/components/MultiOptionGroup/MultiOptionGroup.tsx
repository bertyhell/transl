import classnames from 'classnames';
import React, { FunctionComponent, useState } from 'react';

import { generateRandomId } from '../../helpers/uuid';
import { IconName } from '../icons';
import { Icon } from '../icons/Icon';

import './MultiOptionGroup.scss';

export interface MultiOption {
  disabled?: boolean;
  icon: IconName;
  label: string;
  value: string;
}

export interface MultiOptionGroupProps {
  className?: string;
  onChange: (option: MultiOption) => void;
  options: MultiOption[];
  value: MultiOption | null;
}

export const MultiOptionGroup: FunctionComponent<MultiOptionGroupProps> = ({
  options,
  value,
  onChange,
  className,
}: MultiOptionGroupProps) => {
  // Allows the same options to be used in multiple controls on the page
  const [generatedName] = useState<string>(`radio-${generateRandomId()}`);

  return (
    <div className={classnames(className, 'c-multi-option-group')}>
      {options.map((option: MultiOption) => {
        return (
          <div
            className={classnames('c-multi-option', {
              'c-multi-option-disabled': option.disabled,
              'c-multi-option-selected': option.value === value?.value,
            })}
            key={`${generatedName}-${option.value}`}
            onClick={() => {
              onChange(option);
            }}>
            <Icon name={option.icon} />
            <span>{option.label}</span>
            <input checked={option.value === value?.value} onChange={() => onChange(option)} type='radio' value={option.value} />
          </div>
        );
      })}
    </div>
  );
};
