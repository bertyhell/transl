import { sortBy } from 'lodash-es';
import React, { FunctionComponent, useEffect } from 'react';
import { ActionMeta } from 'react-select';
import { OnChangeValue } from 'react-select/dist/declarations/src/types';

import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useGetLanguagesQuery } from '../../queries/config/graphql-generated-types';
import { Language } from '../../queries/type-aliasses';
import { Select } from '../Select/Select';

interface LanguageSelectProps {
  id?: string;

  // Text to fuzzy search for initial selection
  initialSelectionHint?: string;
  loading?: boolean;
  onChange?: (value: OnChangeValue<Language, false>, actionMeta: ActionMeta<Language>) => void;
  value?: Language;
}

export const LanguageSelect: FunctionComponent<LanguageSelectProps> = ({ onChange, value }) => {
  const { data: languagesResponse } = useGetLanguagesQuery(DATABASE_CONFIG, {}, { cacheTime: Infinity });

  useEffect(() => {
    if (languagesResponse?.languages?.length) {
      // TODO fuzzy search language to select
    }
  }, [languagesResponse]);

  return (
    <Select<Language, false>
      getOptionLabel={lang => `${lang.name} [${lang.iso_code}]`}
      id='select-language'
      isMulti={false}
      onChange={onChange}
      options={sortBy(languagesResponse?.languages, lang => lang.name) || []}
      value={value}
    />
  );
};
