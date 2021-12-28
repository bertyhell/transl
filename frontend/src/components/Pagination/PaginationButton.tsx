import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Button } from '../Button/Button';
import { IconName } from '../icons';
import { Icon } from '../icons/Icon';

export interface PaginationProps {
  className?: string;
  icon: IconName;
  onClick: () => void;
}

export const PaginationButton: FunctionComponent<PaginationProps> = ({ className, onClick, icon }) => {
  return (
    <Button className={classnames(className, 'p-2')} onClick={onClick} type='borderless'>
      <Icon name={icon} />
    </Button>
  );
};
