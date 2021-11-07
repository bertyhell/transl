import React, { FunctionComponent } from 'react';
import { ActionMeta } from 'react-select';
import { OnChangeValue } from 'react-select/dist/declarations/src/types';

import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useGetLanguagesQuery } from '../../queries/config/graphql-generated-types';
import { Language } from '../../queries/type-aliasses';
import { Select } from '../Select/Select';

interface LanguageSelectProps {
  id?: string;
  loading?: boolean;
  onChange?: (value: OnChangeValue<Language, true>, actionMeta: ActionMeta<Language>) => void;
  value?: Language[];
}

export const LanguageMultiSelect: FunctionComponent<LanguageSelectProps> = ({ onChange, value }) => {
  const { data: languagesResponse } = useGetLanguagesQuery(DATABASE_CONFIG, {}, { cacheTime: Infinity });

  return (
    <Select<Language, true>
      id='select-language'
      isMulti={true}
      onChange={onChange}
      options={languagesResponse?.languages || []}
      value={value}
    />
  );
};
