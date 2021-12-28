import React, { FunctionComponent, ReactNode, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { Pagination } from '../../components/Pagination/Pagination';
import { Table } from '../../components/Table/Table';
import { TextInput } from '../../components/TextInput/TextInput';
import { TranslationInputField } from '../../components/TranslationInputField/TranslationInputField';
import { $t } from '../../helpers/i18n';
import { useTableSort } from '../../hooks/useTableSort';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import {
  useGetTranslationsByLanguageCodesQuery,
  useUpdateTranslationValueMutation,
} from '../../queries/config/graphql-generated-types';
import { Term } from '../../queries/type-aliasses';

export const ITEMS_PER_PAGE = 100;

type ColumnId = 'key' | string; // language codes

const ENTRIES_PER_PAGE = 20;

/**
 * Shows a tabular view of the data and allows the user to edit the data
 */
export const TranslationEditor: FunctionComponent = () => {
  const { branchUuid } = useParams();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<number>(0);
  const allLanguageCodes =
    searchParams.get('languageCodes') === 'all'
      ? null
      : (searchParams.get('languageCodes') || '').split('|').map(code => code.trim());

  const { data, refetch: refetchTranslations } = useGetTranslationsByLanguageCodesQuery(
    DATABASE_CONFIG,
    {
      branchUuid,
      languageCodes: allLanguageCodes,
      offset: page * ITEMS_PER_PAGE,
    },
    { enabled: !!allLanguageCodes },
  );
  const { mutateAsync: updateTranslation } = useUpdateTranslationValueMutation(DATABASE_CONFIG);
  const [filterString, setFilterString] = useState<string>('');
  const [sortColumn, sortOrder, handleSortClick] = useTableSort<ColumnId>('key');

  const onValueChanged = async (languageCode: string, key: string, value: string) => {
    try {
      await updateTranslation({
        branchUuid,
        languageCode,
        translationKey: key,
        translationValue: value,
      });
      await refetchTranslations();
      console.log('changed: ' + key + ' => ' + value);
    } catch (err) {
      console.error(err);
      // TODO toast error
    }
  };

  const renderCell = (projectTerm: Term, columnId: ColumnId): ReactNode | null => {
    switch (columnId) {
      case 'key':
        return <div>{projectTerm.key}</div>;

      default:
        // language codes
        return (
          <TranslationInputField
            onBlur={(newValue: string) => onValueChanged(columnId, projectTerm.key, newValue)}
            value={
              projectTerm.translations.find(translation => translation?.project_language?.language?.iso_code === columnId)
                ?.translation_value || ''
            }
          />
        );
    }
  };

  const getColumns = () => {
    const columns = [{ id: 'key', label: $t('key'), sortable: true }];
    allLanguageCodes?.forEach(languageCode => {
      if (languageCode) {
        columns.push({ id: languageCode, label: $t(languageCode), sortable: true });
      }
    });
    return columns;
  };

  console.log('rerendering', data);
  return (
    <div className='c-key-value-editor'>
      <div className='flex flex-row-reverse'>
        <TextInput className='w-60' icon='Filter' onChange={setFilterString} value={filterString} />
      </div>
      {data?.terms?.length ? (
        <Table<Term>
          className='my-4'
          columns={getColumns()}
          data={data.terms}
          emptyStateMessage={filterString ? $t('no data') : $t('no data for the selected filters')}
          onColumnClick={(columnId: string) => handleSortClick(columnId)}
          renderCell={renderCell}
          rowKey={'uuid'}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
        />
      ) : (
        <>No results</>
      )}
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        pageCount={Math.ceil((data?.terms_aggregate?.aggregate?.count || 0) / ENTRIES_PER_PAGE)}
      />
    </div>
  );
};
