import classnames from 'classnames';
import { isNil, isString } from 'lodash-es';
import React, { FunctionComponent, ReactNode } from 'react';

import { Checkbox } from '../Checkbox/Checkbox';
import { IconName } from '../icons';
import { Icon } from '../icons/Icon';

import './Table.scss';

export enum ColumnWidth {
  /* eslint-disable typescript-sort-keys/string-enum */
  'col_1' = '1',
  'col_2' = '2',
  'col_3' = '3',
  'col_4' = '4',
  'col_5' = '5',
  'col_6' = '6',
  'col_7' = '7',
  'col_8' = '8',
  'col_9' = '9',
  'col_10' = '10',
  'col_11' = '11',
  'col_12' = '12',
  'col_13' = '13',
  'col_14' = '14',
  'col_15' = '15',
  /* eslint-enable typescript-sort-keys/string-enum */
}

export type TableColumn = {
  col?: ColumnWidth;
  dataType?: 'string' | 'dateTime' | 'boolean' | 'number';
  icon?: IconName;
  id: string;
  label?: string;
  sortable?: boolean;
  tooltip?: string;
};

export interface TableProps {
  align?: boolean;
  children?: ReactNode;
  className?: string;
  columns?: TableColumn[];
  data?: Record<string, unknown>[];
  emptyStateMessage?: string;
  horizontal?: boolean;
  nowrap?: boolean;
  onColumnClick?: (id: string) => void;
  onRowClick?: (rowData: Record<string, unknown>) => void;
  onSelectAll?: () => void;
  onSelectionChanged?: (selectedItemIds: (string | number)[]) => void;
  renderCell?: (rowData: Record<string, unknown>, columnId: string, rowIndex: number, columnIndex: number) => ReactNode;
  rowKey?: string | ((rowData: unknown) => string);
  selectedItemIds?: (string | number)[];
  showCheckboxes?: boolean;
  sortColumn?: string;
  sortOrder?: 'asc' | 'desc';
}

export const Table: FunctionComponent<TableProps> = ({
  align = true,
  children,
  className,
  columns = [],
  data = [],
  emptyStateMessage,
  horizontal,
  nowrap,
  onColumnClick = () => {},
  onRowClick,
  renderCell = () => null,
  rowKey,
  sortColumn,
  sortOrder = 'asc',
  showCheckboxes = false,
  selectedItemIds = [],
  onSelectionChanged = () => {},
  onSelectAll = () => {},
}) => {
  const getRowKey = (rowData: Record<string, unknown>): string => {
    if (isString(rowKey)) {
      return rowData[rowKey] as string;
    }
    if (isNil(rowKey)) {
      return rowData.id as string;
    }
    return rowKey(rowData);
  };

  const handleRowClick = (rowData: Record<string, unknown>) => {
    if (onRowClick) {
      onRowClick(rowData);
    }
  };

  const areAllItemsSelected = () => {
    return selectedItemIds.length >= (data || []).length;
  };

  const isItemSelected = (dataItem: Record<string, unknown>) =>
    selectedItemIds.find(selectedItemId => selectedItemId === getRowKey(dataItem));

  const toggleAllItemSelection = () => {
    if (areAllItemsSelected()) {
      onSelectionChanged([]);
    } else {
      onSelectAll();
    }
  };

  const toggleItemSelection = (item: Record<string, unknown>) => {
    if (isItemSelected(item)) {
      onSelectionChanged(selectedItemIds.filter(selectedItemId => selectedItemId !== getRowKey(item)));
    } else {
      onSelectionChanged([...selectedItemIds, getRowKey(item)]);
    }
  };

  const renderHeading = (heading: TableColumn) => {
    const { id, col, sortable, label, icon, tooltip } = heading;

    const isColumnSorted = sortColumn === id;
    const sortIconProps: { className: string | undefined; name: IconName } = {
      className: isColumnSorted ? undefined : 'c-table__header--sortable-icon',
      name: (isColumnSorted ? (sortOrder === 'asc' ? 'ChevronUp' : 'ChevronDown') : 'ChevronsUpAndDown') as IconName,
    };

    if (!children && !rowKey) {
      console.error('A rowKey param is required when not passing any children to the table component');
    }

    return (
      <th
        className={classnames({
          [`o-table-col-${col}`]: col,
          'c-table__header--sortable': sortable,
        })}
        key={`table-head-${id}`}
        onClick={() => sortable && onColumnClick(id)}
        title={tooltip}>
        <div>
          {!!icon && <Icon name={icon} />}
          <span>{label || null}</span>
          {sortable && <Icon {...sortIconProps} />}
        </div>
      </th>
    );
  };

  const renderTable = () => (
    <>
      <table
        className={classnames(className, 'c-table', {
          'c-table--align-middle': align,
          'c-table--horizontal': horizontal,
          'c-table--nowrap': nowrap,
        })}>
        {children ? (
          children
        ) : (
          <>
            {columns.length > 0 && (
              <thead>
                <tr>
                  {showCheckboxes && (
                    <th className='c-table__checkbox-column'>
                      <Checkbox checked={areAllItemsSelected()} label='' onChange={toggleAllItemSelection} />
                    </th>
                  )}
                  {columns.map(renderHeading)}
                </tr>
              </thead>
            )}
            {data.length > 0 && rowKey && (
              <tbody>
                {data.map((rowData, rowIndex) => (
                  <tr
                    className={onRowClick ? 'u-clickable' : ''}
                    key={`table-row-${getRowKey(rowData)}`}
                    onClick={() => handleRowClick(rowData)}>
                    {showCheckboxes && (
                      <td className='c-table__checkbox-column u-clickable' onClick={() => toggleItemSelection(rowData)}>
                        <Checkbox
                          checked={!!selectedItemIds.find(selectedItemId => selectedItemId === getRowKey(rowData))}
                          label=''
                        />
                      </td>
                    )}
                    {columns
                      .map(col => col.id)
                      .map((columnId, columnIndex) => (
                        <td key={columnIndex}>{renderCell(rowData, columnId, rowIndex, columnIndex)}</td>
                      ))}
                  </tr>
                ))}
              </tbody>
            )}
          </>
        )}
      </table>
      {!children && !data.length && emptyStateMessage && emptyStateMessage}
    </>
  );

  return renderTable();
};
