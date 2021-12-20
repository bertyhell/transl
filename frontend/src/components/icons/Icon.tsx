import classnames from 'classnames';
import React, { FC } from 'react';

import { IconName, ICONS } from './index';

interface Props {
  className?: string;
  name?: IconName;
}

export const Icon: FC<Props> = ({ name, className }) => {
  if (!name) {
    return null;
  }
  const IconComponent = ICONS[name] || ICONS.ErrorIcon;
  return <IconComponent className={classnames('icon', className, name)} />;
};
