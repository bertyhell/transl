import autosize from 'autosize';
import classnames from 'classnames';
import React, { FunctionComponent, useEffect, useLayoutEffect, useState } from 'react';

import { useCallbackRef } from '../../hooks/useCallbackRef';
import { Button } from '../Button/Button';

import './TranslationInputField.scss';

export interface TranslationInputFieldProps {
  className?: string;
  id?: string;
  name?: string;
  onBlur?: (value: string) => void;
  value?: string;
}

export const TranslationInputField: FunctionComponent<TranslationInputFieldProps> = ({
  className,
  id,
  name,
  value = '',
  onBlur = () => {},
}) => {
  const [textArea, textAreaRef] = useCallbackRef<HTMLTextAreaElement>();
  const [tempValue, setTempValue] = useState<string>(value);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    if (textArea) {
      autosize(textArea);
    }
  }, [textArea, textAreaRef]);

  useLayoutEffect(() => {
    if (isFocused) {
      textArea?.focus();
      textArea?.select();
    }
  }, [isFocused, textArea]);

  const handleBlur = () => {
    setIsFocused(false);
    onBlur(tempValue);
  };

  const renderControl = () => {
    if (isFocused) {
      return (
        <textarea
          className={classnames(className, 'border-2 border-sky-500 border-solid rounded p-2 pt-4 outline-0 w-full')}
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={evt => setTempValue(evt.target.value)}
          ref={textAreaRef}
          // style={{ display: isFocused ? 'block' : 'none' }}
          value={tempValue}
        />
      );
    }
    return (
      <Button
        block
        icon='Edit2'
        label={value}
        onClick={() => setIsFocused(true)}
        style={{ display: isFocused ? 'none' : 'block' }}
        type='borderless'
      />
    );
  };

  return <div className='c-translation-input-field'>{renderControl()}</div>;
};
