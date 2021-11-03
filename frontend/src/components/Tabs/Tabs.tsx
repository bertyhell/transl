import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Tab, TabProps } from './Tab/Tab';

import './Tabs.scss';

export interface TabsProps {
  border?: boolean;
  className?: string;
  dark?: boolean;
  onClick?: (tabId: string | number) => void;
  tabs: TabProps[];
}

export const Tabs: FunctionComponent<TabsProps> = ({ className, tabs, border, dark = false, onClick = () => {} }) => (
  <nav
    className={classnames(className, 'c-tabs', {
      'c-tabs__bottom-border': border,
    })}>
    {tabs.map(tab => (
      <Tab key={tab.label} {...tab} dark={dark} onClick={() => onClick(tab.id)} />
    ))}
  </nav>
);
