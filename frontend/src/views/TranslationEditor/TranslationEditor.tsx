import React, { FunctionComponent, ReactNode, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { Pagination } from '../../components/Pagination/Pagination';
import { Table } from '../../components/Table/Table';
import { TextArea } from '../../components/TextArea/TextArea';
import { TextInput } from '../../components/TextInput/TextInput';
import { $t } from '../../helpers/i18n';
import { useTableSort } from '../../hooks/useTableSort';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useGetTranslationsQuery } from '../../queries/config/graphql-generated-types';

import './TranslationEditor.scss';

export const ITEMS_PER_PAGE = 100;

export type TranslationInfo = {
  id: string;
  key: string;
  status: string | null;
  value: string;
};
export type KeyValueEditorTableColsSchema = 'key' | 'value';

const ENTRIES_PER_PAGE = 20;

/**
 * Shows a tabular view of the data and allows the user to edit the data
 */
export const TranslationEditor: FunctionComponent = () => {
  const { projectUuid } = useParams();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<number>(0);

  const languageCodes = (searchParams.get('languageCodes') || '').split('|').map(code => code.trim());

  const { data } = useGetTranslationsQuery(
    DATABASE_CONFIG,
    {
      languageCodes: languageCodes,
      offset: page * ITEMS_PER_PAGE,
      projectUuid,
    },
    {
      enabled: !!languageCodes?.length,
    },
  );
  const [filterString, setFilterString] = useState<string>('');
  const [sortColumn, sortOrder, handleSortClick] = useTableSort<KeyValueEditorTableColsSchema>('key');

  const onValueChanged = (value: string, key: string) => {
    // TODO save to database
    console.log('changed: ' + key + ' => ' + 'value');
  };

  const renderCell = (rowData: TranslationInfo, columnId: KeyValueEditorTableColsSchema): ReactNode | null => {
    switch (columnId) {
      case 'key':
        return <div>{rowData.key}</div>;

      case 'value':
        return <TextArea height='auto' onChange={(value: string) => onValueChanged(value, rowData.key)} value={rowData.value} />;

      default:
        return null;
    }
  };

  const getColumns = () => {
    const columns = [{ id: 'key', label: $t('Key'), sortable: true }];
    languageCodes?.forEach(languageCode => {
      if (languageCode) {
        columns.push({ id: languageCode, label: $t(languageCode), sortable: true });
      }
    });
    return columns;
  };

  return (
    <div className='c-key-value-editor'>
      <div className='align-right'>
        <TextInput icon='Filter' onChange={setFilterString} value={filterString} />
      </div>
      {data?.project_terms?.length ? (
        <Table
          columns={getColumns()}
          data={data.project_terms}
          emptyStateMessage={filterString ? $t('no data') : $t('no data for the selected filters')}
          onColumnClick={(columnId: string) => handleSortClick(columnId as KeyValueEditorTableColsSchema)}
          renderCell={(rowData: Record<string, unknown>, columnId: string) =>
            renderCell(rowData as TranslationInfo, columnId as KeyValueEditorTableColsSchema)
          }
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
        pageCount={Math.ceil((data?.project_terms_aggregate?.aggregate?.count || 0) / ENTRIES_PER_PAGE)}
      />
    </div>
  );
};
