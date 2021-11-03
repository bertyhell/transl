import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { IconName } from '../../icons';
import { Icon } from '../../icons/Icon';

import './Tab.scss';

export interface TabProps {
  active?: boolean;
  className?: string;
  dark?: boolean;
  icon?: IconName;
  id: string | number;
  label: string;
  onClick?: () => void;
}

export const Tab: FunctionComponent<TabProps> = ({ className, label, icon, active, dark = false, onClick = () => {} }) => (
  <div
    className={classnames(className, 'c-tab-item', {
      'c-tab-item__active': active,
      'c-tab-item__dark': dark,
    })}
    onClick={onClick}
    style={{ cursor: 'pointer' }}>
    {icon && <Icon name={icon} />}
    <span>{label}</span>
  </div>
);
