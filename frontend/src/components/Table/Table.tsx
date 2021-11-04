import classnames from 'classnames';
import { isNil, isString, sum } from 'lodash-es';
import React, { ReactNode } from 'react';

import { Checkbox } from '../Checkbox/Checkbox';
import { IconName } from '../icons';
import { Icon } from '../icons/Icon';

import './Table.scss';

export type TableColumn = {
  // Relative units. eg: 1, 2, 1 => 25% , 50%, 25%
  dataType?: 'string' | 'dateTime' | 'boolean' | 'number';
  icon?: IconName;
  id: string;
  label?: string;
  sortable?: boolean;
  tooltip?: string;
  width?: number;
};

export interface TableProps<RowType> {
  align?: boolean;
  children?: ReactNode;
  className?: string;
  columns?: TableColumn[];
  data?: RowType[];
  emptyStateMessage?: string;
  horizontal?: boolean;
  nowrap?: boolean;
  onColumnClick?: (id: string) => void;
  onRowClick?: (rowData: RowType) => void;
  onSelectAll?: () => void;
  onSelectionChanged?: (selectedItemIds: (string | number)[]) => void;
  renderCell?: (rowData: RowType, columnId: string, rowIndex: number, columnIndex: number) => ReactNode;
  rowKey?: string | ((rowData: RowType) => string);
  selectedItemIds?: (string | number)[];
  showCheckboxes?: boolean;
  sortColumn?: string;
  sortOrder?: 'asc' | 'desc';
}

export function Table<RowType>({
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
}: TableProps<RowType>) {
  const totalColUnits = sum(columns.map(col => col.width || 1));

  const getRowKey = (rowData: RowType): string => {
    if (isString(rowKey)) {
      return ((rowData as unknown) as Record<string, string>)[rowKey];
    }
    if (isNil(rowKey)) {
      return ((rowData as unknown) as Record<string, string>).id;
    }
    return rowKey(rowData);
  };

  const handleRowClick = (rowData: RowType) => {
    if (onRowClick) {
      onRowClick(rowData);
    }
  };

  const areAllItemsSelected = () => {
    return selectedItemIds.length >= (data || []).length;
  };

  const isItemSelected = (dataItem: RowType) => selectedItemIds.find(selectedItemId => selectedItemId === getRowKey(dataItem));

  const toggleAllItemSelection = () => {
    if (areAllItemsSelected()) {
      onSelectionChanged([]);
    } else {
      onSelectAll();
    }
  };

  const toggleItemSelection = (item: RowType) => {
    if (isItemSelected(item)) {
      onSelectionChanged(selectedItemIds.filter(selectedItemId => selectedItemId !== getRowKey(item)));
    } else {
      onSelectionChanged([...selectedItemIds, getRowKey(item)]);
    }
  };

  const renderHeading = (heading: TableColumn) => {
    const { id, sortable, label, icon, tooltip } = heading;

    const isColumnSorted = sortColumn === id;
    const sortIconProps: { className: string | undefined; name: IconName } = {
      className: isColumnSorted ? undefined : 'c-table__header__sortable-icon',
      name: (isColumnSorted ? (sortOrder === 'asc' ? 'ChevronUp' : 'ChevronDown') : 'ChevronsUpAndDown') as IconName,
    };

    if (!children && !rowKey) {
      console.error('A rowKey param is required when not passing any children to the table component');
    }

    return (
      <th
        className={classnames({
          'c-table__header__sortable': sortable,
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
          'c-table__align-middle': align,
          'c-table__horizontal': horizontal,
          'c-table__nowrap': nowrap,
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
                    {columns.map((col, columnIndex) => {
                      const columnPercentageWidth = Math.round((100 / totalColUnits) * (col.width || 1) * 100) / 100;
                      return (
                        <td key={columnIndex} style={{ width: columnPercentageWidth + '%' }}>
                          {renderCell(rowData, col.id, rowIndex, columnIndex)}
                        </td>
                      );
                    })}
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
}
