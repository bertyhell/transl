import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import { useSlot } from '../../hooks/useSlot';
import { ToolbarCenter, ToolbarLeft, ToolbarRight } from './Toolbar.slots';

import './Toolbar.scss';

export interface ToolbarProps {
  alignTop?: boolean;
  autoHeight?: boolean;
  children: ReactNode;
  className?: string;
  justify?: boolean;
  size?: 'medium' | 'large' | 'huge';
  spaced?: boolean;
  wrap?: boolean;
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({
  children,
  className,
  size,
  spaced,
  autoHeight,
  alignTop,
  justify,
  wrap = false,
}) => {
  const left = useSlot(ToolbarLeft, children);
  const center = useSlot(ToolbarCenter, children);
  const right = useSlot(ToolbarRight, children);

  return (
    <div
      className={classnames(className, 'c-toolbar', {
        [`c-toolbar__${size}`]: size,
        'c-toolbar__align-top': alignTop,
        'c-toolbar__auto': autoHeight,
        'c-toolbar__justified': justify,
        'c-toolbar__spaced': spaced,
        'c-toolbar__wrap': wrap,
      })}>
      {left && <div className='c-toolbar__left'>{left}</div>}
      {center && (
        <div className='c-toolbar__center'>
          <div className='c-toolbar__center-inner'>{center}</div>
        </div>
      )}
      {right && <div className='c-toolbar__right'>{right}</div>}
      {!left && !center && !right && !!children && children}
    </div>
  );
};
