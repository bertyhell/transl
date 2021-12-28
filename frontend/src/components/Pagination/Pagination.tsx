import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { PaginationButton } from './PaginationButton';

export interface PaginationProps {
  className?: string;
  currentPage?: number;
  displayCount?: number;
  onPageChange?: (page: number) => void;
  pageCount: number;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  className,
  pageCount,
  displayCount = 5,
  currentPage = 0,
  onPageChange = () => {},
}) => {
  function changePage(page: number) {
    if (page >= 0 && page <= pageCount - 1) {
      onPageChange(page);
    }
  }

  function generatePages() {
    // generate all pages if pageCount is less than the displayCount
    if (pageCount < displayCount) {
      return Array.from({ length: pageCount }, (value: number, index: number) => index);
    }

    // generate first x pages if currentPage is less than the displayCount
    if (currentPage < displayCount / 2) {
      return Array.from({ length: displayCount }, (value: number, index: number) => index);
    }

    // generate last x pages if currentPage is less than the pageCount - displayCount
    if (currentPage >= Math.floor(pageCount - displayCount / 2)) {
      return Array.from({ length: displayCount }, (value: number, index: number) => pageCount - (displayCount - index));
    }

    // generate x pages padding the current page
    return Array.from(
      { length: displayCount },
      (value: number, index: number) => index + currentPage - Math.ceil(displayCount / 2) + 1,
    );
  }

  const pagesToDisplay = generatePages();

  return (
    <div className={classnames(className, 'c-pagination flex flex-row justify-center w-full')}>
      <PaginationButton icon='ChevronsLeft' onClick={() => changePage(0)} />
      <PaginationButton icon='ChevronLeft' onClick={() => changePage(currentPage - 1)} />
      <div className='w-10 h-10 text-center p-2 leading-5'>
        {pagesToDisplay.map((pageIndex: number) => (
          <div
            className={classnames('c-pagination__btn', {
              'c-pagination__btn__active': pageIndex === currentPage,
            })}
            key={pageIndex}
            onClick={pageIndex !== currentPage ? () => changePage(pageIndex) : () => {}}>
            {pageIndex + 1}
          </div>
        ))}
      </div>
      <PaginationButton icon='ChevronRight' onClick={() => changePage(currentPage + 1)} />
      <PaginationButton icon='ChevronsRight' onClick={() => changePage(pageCount - 1)} />
    </div>
  );
};
