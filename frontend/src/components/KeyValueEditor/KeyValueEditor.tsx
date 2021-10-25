import classnames from 'classnames';
import React, { FunctionComponent, ReactNode, useState } from 'react';

import { useTableSort } from '../../hooks/useTableSort';
import { Pagination } from '../Pagination/Pagination';
import { Table } from '../Table/Table';
import { TextArea } from '../TextArea/TextArea';
import { TextInput } from '../TextInput/TextInput';

import './KeyValueEditor.scss';

export type TranslationInfo = {
  fuzzy?: boolean;
  id: string;
  key: string;
  value: string;
};
export type KeyValueEditorTableColsSchema = 'key' | 'value';

const ENTRIES_PER_PAGE = 20;

export interface KeyValueEditorPropsSchema {
  className?: string;
  data: TranslationInfo[];
  initialData: TranslationInfo[];
  keyLabel?: string;
  keySeparator?: string;
  noDataForFilterMessage?: string;
  noDataMessage?: string;
  onChange?: (modifiedData: TranslationInfo[]) => void;
  readonly?: boolean;
  valueLabel?: string;
}

/**
 * Shows a tabular view of the data and allows the user to edit the data
 * @param initialData Contains the key value pairs when the page is loaded, and are only updated on save
 *        This extra prop is needed so we can keep fields visible that were searched for, while the user is modifying them
 * @param data Contains the key value pairs while the user is modifying them, updated on every key stroke
 * @param keyLabel
 * @param valueLabel
 * @param keySeparator
 * @param readonly
 * @param onChange
 * @param className
 * @param noDataMessage
 * @param noDataForFilterMessage
 * @constructor
 */
export const KeyValueEditor: FunctionComponent<KeyValueEditorPropsSchema> = ({
  initialData,
  data,
  keyLabel = 'Key',
  valueLabel = 'Value',
  readonly = false,
  onChange = () => {},
  className,
  noDataMessage = 'No data',
  noDataForFilterMessage = 'No data found that matches the filter',
}) => {
  const [filterString, setFilterString] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [sortColumn, sortOrder, handleSortClick] = useTableSort<KeyValueEditorTableColsSchema>('key');

  const getPaginatedData = (): [TranslationInfo[], number] => {
    const filteredItems = data.filter(row => {
      const query = filterString.toLowerCase();

      // If key or value contains the searched value, show the row
      if (row.key.toLowerCase().includes(query) || row.value.toLowerCase().includes(query)) {
        return true;
      }

      // If the initial row value contains the searched value, show the row
      const initialRow = initialData.find(initialRow => initialRow.key === row.key);
      if (initialRow && initialRow.value.toLowerCase().includes(query)) {
        return true;
      }

      // Else, do not show the row
      return false;
    });
    const sortedItems = filteredItems.sort((rowA: TranslationInfo, rowB: TranslationInfo) => {
      if (rowA[sortColumn].toLowerCase() < rowB[sortColumn].toLowerCase()) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      if (rowA[sortColumn].toLowerCase() > rowB[sortColumn].toLowerCase()) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      return 0;
    });
    return [sortedItems.slice(page * ENTRIES_PER_PAGE, (page + 1) * ENTRIES_PER_PAGE), sortedItems.length];
  };

  const onValueChanged = (value: string, key: string) => {
    // TODO save to database
  };

  const renderCell = (rowData: TranslationInfo, columnId: KeyValueEditorTableColsSchema): ReactNode | null => {
    switch (columnId) {
      case 'key':
        return <div>{rowData.key}</div>;

      case 'value':
        if (readonly) {
          return <span className='c-keyvalue-label'>{rowData.value}</span>;
        }

        return <TextArea height='auto' onChange={(value: string) => onValueChanged(value, rowData.key)} value={rowData.value} />;

      default:
        return null;
    }
  };

  const [paginatedData, totalFilteredResults] = getPaginatedData();
  return (
    <div className={classnames('c-key-value-editor', className)}>
      <div className='align-right'>
        <TextInput icon='Filter' onChange={setFilterString} value={filterString} />
      </div>
      {!!paginatedData && !!paginatedData.length ? (
        <Table
          columns={[
            { col: '5', id: 'key', label: keyLabel, sortable: true },
            { col: '7', id: 'value', label: valueLabel, sortable: true },
          ]}
          data={paginatedData}
          emptyStateMessage={filterString ? noDataMessage : noDataForFilterMessage}
          onColumnClick={(columnId: string) => handleSortClick(columnId as KeyValueEditorTableColsSchema)}
          renderCell={(rowData: Record<string, unknown>, columnId: string) =>
            renderCell(rowData as TranslationInfo, columnId as KeyValueEditorTableColsSchema)
          }
          rowKey={'key'}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
        />
      ) : (
        <>No results</>
      )}
      <Pagination currentPage={page} onPageChange={setPage} pageCount={Math.ceil(totalFilteredResults / ENTRIES_PER_PAGE)} />
    </div>
  );
};
