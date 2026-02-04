import { DualSideBar, LabeledContainer } from '@/components/containers';
import { Pagination } from '@/components/buttons';
import { SelectWithCustomOption } from '@/components/inputs';

import * as Styled from './TablePaginationManager.styles';
import { ChangeEventHandler } from 'react';

interface ITablePaginationManagerProps {
  currentPageIndexNumber: number;
  totalPageNumber: number;
  pageSize: number;
  handlePageIndexNumberChange: (page: number) => void;
  handlePageSizeChange: ChangeEventHandler<HTMLSelectElement>;
  tableDataName: string;
}

const TablePaginationManager = ({
  currentPageIndexNumber,
  totalPageNumber,
  pageSize,
  handlePageIndexNumberChange,
  handlePageSizeChange,
  tableDataName,
}: ITablePaginationManagerProps) => (
  <Styled.Wrapper>
    <DualSideBar
      leftSideChildren={[
        <Pagination
          currentPage={currentPageIndexNumber}
          totalPages={totalPageNumber}
          onPageChange={handlePageIndexNumberChange}
        />,
      ]}
      rightSideChildren={[
        <LabeledContainer
          labelText={`한 페이지당 ${tableDataName} 수`}
          width={20}
          labelRatio={2}
          contentRatio={2}
        >
          <SelectWithCustomOption
            value={pageSize}
            onChange={handlePageSizeChange}
            wide
            withCancelButton={false}
          >
            {[3, 5, 10, 15, 18, 20].map((num) => (
              <option key={num} value={num.toString()}>
                {num}
              </option>
            ))}
          </SelectWithCustomOption>
        </LabeledContainer>,
      ]}
    />
  </Styled.Wrapper>
);

export default TablePaginationManager;
