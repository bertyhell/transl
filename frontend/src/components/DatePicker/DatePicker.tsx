import classnames from 'classnames';
import { isValid, parse, setHours, setMinutes } from 'date-fns';
import nl from 'date-fns/locale/nl';
import React, { FunctionComponent } from 'react';
import ReactDatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';

import { Icon } from '../icons/Icon';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

registerLocale('nl', nl);
setDefaultLocale('nl');

export interface DatePickerProps {
  className?: string;
  disabled?: boolean;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  required?: boolean;
  showTimeInput?: boolean;
  value?: Date | null;
}

export const DatePicker: FunctionComponent<DatePickerProps> = ({
  className,
  disabled = false,
  required = false,
  showTimeInput = false,
  placeholder,
  value,
  onChange = () => {},
}) => {
  return (
    <div className={classnames(className, 'c-input-with-icon')}>
      <ReactDatePicker
        className='c-input'
        dateFormat={showTimeInput ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy'}
        disabled={disabled}
        injectTimes={[setHours(setMinutes(new Date(), 59), 23)]}
        onChange={onChange}
        onChangeRaw={event => {
          const rawInput = (event.target.value || '').trim().replace(/[^0-9]+/g, '/');
          const newDate = parse(rawInput, 'dd/MM/yyyy', new Date(), { locale: nl });
          if (isValid(newDate)) {
            onChange(newDate);
          }
        }}
        placeholderText={placeholder || (showTimeInput ? 'dd/mm/yyyy uu:mm' : 'dd/mm/yyyy')}
        required={required}
        selected={value}
        showTimeSelect={showTimeInput}
        strictParsing
        timeCaption='tijd'
        timeFormat='HH:mm'
        timeIntervals={60}
      />
      <Icon name='Calendar' />
    </div>
  );
};
