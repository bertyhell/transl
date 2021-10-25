import React from 'react';

import { KeyValueEditor } from '../components/KeyValueEditor/KeyValueEditor';
import { testTranslations } from './test-translations';

export function TranslationEditor() {
  return (
    <>
      key value editor: {}
      <KeyValueEditor data={testTranslations} initialData={testTranslations} onChange={() => {}} />
    </>
  );
}
