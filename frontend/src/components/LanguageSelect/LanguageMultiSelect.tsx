import React, { FunctionComponent } from 'react';
import Flag from 'react-flagkit';
import ReactSelect, { ActionMeta } from 'react-select';
import { OnChangeValue } from 'react-select/dist/declarations/src/types';

import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useGetLanguagesQuery } from '../../queries/config/graphql-generated-types';
import { Language } from '../../queries/type-aliasses';

interface LanguageSelectProps {
  id?: string;
  loading?: boolean;
  onChange?: (value: OnChangeValue<Language, true>, actionMeta: ActionMeta<Language>) => void;
  value?: Language[];
}

export const LanguageMultiSelect: FunctionComponent<LanguageSelectProps> = ({ onChange, value }) => {
  const { data: languagesResponse } = useGetLanguagesQuery(DATABASE_CONFIG, {}, { cacheTime: Infinity });

  return (
    <>
      <ReactSelect<Language, true>
        formatOptionLabel={(data: Language) => (
          <div className='flex flex-row'>
            <span className='mr-2 w-6 flex items-center text-transparent'>
              <Flag country={data.iso_code.split('-').pop()} size={100} />
            </span>
            <span className='flex-grow whitespace-nowrap text-ellipsis mr-2'>{data.name}</span>
            <span className='whitespace-nowrap'>{data.iso_code}</span>
          </div>
        )}
        getOptionLabel={option => option.name + ' ' + option.iso_code}
        getOptionValue={option => option.iso_code}
        id='select-language'
        isClearable
        isMulti
        isSearchable
        loadingMessage={() => $t('Loading')}
        noOptionsMessage={() => $t('No options')}
        onChange={onChange}
        options={languagesResponse?.languages || []}
        value={value}
      />
    </>
  );
};
