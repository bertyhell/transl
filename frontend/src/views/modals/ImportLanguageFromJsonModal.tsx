import React, { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';

import { Button } from '../../components/Button/Button';
import { FileInput } from '../../components/FileInput/FileInput';
import { Form } from '../../components/Form/Form';
import { FormGroup } from '../../components/Form/FormGroup/FormGroup';
import { LanguageSelect } from '../../components/LanguageSelect/LanguageSelect';
import { Modal } from '../../components/Modal/Modal';
import { ModalBody, ModalFooterRight } from '../../components/Modal/Modal.slots';
import { MultiOption, MultiOptionGroup } from '../../components/MultiOptionGroup/MultiOptionGroup';
import { $t } from '../../helpers/i18n';
import { Language } from '../../queries/type-aliasses';

enum WhatToImport {
  terms = 'terms',
  termsAndTranslations = 'termsAndTranslations',
}

const WHAT_TO_IMPORT_OPTIONS: MultiOption[] = [
  { icon: 'Columns', label: $t('Terms and translations'), value: WhatToImport.termsAndTranslations },
  { icon: 'Square', label: $t('Terms only'), value: WhatToImport.terms },
];

enum HowToImport {
  appendNew = 'appendNew',
  clearAndImport = 'clearAndImport',
  replaceExisting = 'replaceExisting',
}

const HOW_TO_IMPORT_OPTIONS: MultiOption[] = [
  { icon: 'UploadCloud', label: $t('Import only new terms, leave existing intact'), value: HowToImport.appendNew },
  { icon: 'RefreshCw', label: $t('Replace existing, leave others intact'), value: HowToImport.replaceExisting },
  { icon: 'Trash2', label: $t('Delete existing translations'), value: HowToImport.clearAndImport },
];

interface ImportLanguageFromJsonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImportLanguageFromJsonModal: FunctionComponent<ImportLanguageFromJsonModalProps> = ({ isOpen, onClose }) => {
  const [whatToImport, setWhatToImport] = useState<MultiOption | null>(WHAT_TO_IMPORT_OPTIONS[0]);
  const [howToImport, setHowToImport] = useState<MultiOption | null>(HOW_TO_IMPORT_OPTIONS[0]);
  const [jsonContent, setJsonContent] = useState<Record<string, string> | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [fileLanguages, setFileLanguages] = useState<(Language | null)[] | null>(null);

  const readJsonFile = (file: File): Promise<Record<string, string>> => {
    return new Promise<Record<string, string>>((resolve, reject) => {
      try {
        const reader = new FileReader();

        reader.onload = function (event) {
          try {
            const jsonObj = JSON.parse(String(event?.target?.result) || '{}');
            resolve(jsonObj);
          } catch (err) {
            reject(err);
          }
        };

        reader.readAsText(file);
      } catch (err) {
        reject(err);
      }
    });
  };

  const handleJsonFileLanguageChanged = () => {};

  const handleJsonFileChanged = (evt: ChangeEvent<HTMLInputElement>) => {
    setFiles(evt?.target?.files);
    // TODO init selects with detected language from file name
    setFileLanguages(new Array<Language>(evt?.target?.files?.length || 0));
  };

  const renderFilesWithLanguage = () => {
    const languageSelectorComponents: ReactNode[] = [];
    for (let i = 0; i < (files?.length || 0); i++) {
      const fileName = files?.item(i)?.name;
      if (!fileName || !fileName.endsWith('.json')) {
        return;
      }
      languageSelectorComponents.push(
        <FormGroup key={fileName || i}>
          <span>{$t('Import {file} under language:', { file: fileName || '' })}</span>
          <LanguageSelect
            initialSelectionHint={(fileName || '').substring(0, (fileName || '').length - 4)}
            onChange={handleJsonFileLanguageChanged}
            value={fileLanguages?.[i] || undefined}
          />
        </FormGroup>,
      );
    }
    return languageSelectorComponents;
  };

  const insertTranslations = () => {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='medium' title={$t('Import JSON files')}>
      <ModalBody>
        <Form>
          <FormGroup label={$t('What')} labelFor='select-what'>
            <MultiOptionGroup
              onChange={option => {
                setWhatToImport(option);
              }}
              options={WHAT_TO_IMPORT_OPTIONS}
              value={whatToImport}
            />
          </FormGroup>
          <FormGroup label={$t('File')} labelFor='json-file'>
            <FileInput id='json-file' multiple onChange={handleJsonFileChanged} placeholder={$t('Select file (*.json)')} />
          </FormGroup>
          {renderFilesWithLanguage()}
          <FormGroup label={$t('How')} labelFor='select-how'>
            <MultiOptionGroup
              onChange={option => {
                setHowToImport(option);
              }}
              options={HOW_TO_IMPORT_OPTIONS}
              value={howToImport}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooterRight>
        <Button onClick={insertTranslations} type='primary'>
          {$t('Import')}
        </Button>
      </ModalFooterRight>
    </Modal>
  );
};
