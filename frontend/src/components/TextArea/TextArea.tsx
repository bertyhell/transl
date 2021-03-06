import autosize from 'autosize';
import classnames from 'classnames';
import React, { ChangeEvent, CSSProperties, FunctionComponent, useEffect } from 'react';

import { useCallbackRef } from '../../hooks/useCallbackRef';

import './TextArea.scss';

export interface TextAreaProps {
  className?: string;
  disabled?: boolean;
  height?: 'auto' | 'small' | 'medium' | 'large';
  id?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  placeholder?: string;
  rows?: number;
  style?: CSSProperties;
  value?: string;
  width?: 'xsmall' | 'small' | 'medium' | 'large';
}

export const TextArea: FunctionComponent<TextAreaProps> = ({
  style,
  className,
  id,
  name,
  rows,
  disabled = false,
  placeholder,
  value = '',
  height,
  width,
  onChange = () => {},
  onBlur = () => {},
}) => {
  const [textArea, textAreaRef] = useCallbackRef<HTMLTextAreaElement>();

  useEffect(() => {
    if (height === 'auto' && textArea) {
      autosize(textArea);
    }
  }, [height, textArea, textAreaRef]);

  function onValueChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <textarea
      className={classnames(className, 'text-area', 'c-input', {
        [`c-input__h-${height}`]: height && height !== 'auto',
        [`c-input__w-${width}`]: width,
      })}
      disabled={disabled}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onValueChange}
      placeholder={placeholder}
      ref={textAreaRef}
      rows={rows}
      style={style}
      value={value}
    />
  );
};
