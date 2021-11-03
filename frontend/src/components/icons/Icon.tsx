import classnames from 'classnames';
import React, { FC } from 'react';

import { ErrorIcon, IconName } from './index';
import * as Icons from './index';

interface Props {
  name?: IconName;
}

export const Icon: FC<Props> = ({ name }) => {
  if (!name) {
    return null;
  }
  const IconComponent = Icons[name] || ErrorIcon;
  return <IconComponent className={classnames('icon', name)} />;
};
