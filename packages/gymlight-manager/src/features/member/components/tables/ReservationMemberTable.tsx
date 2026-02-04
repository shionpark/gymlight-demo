import { FilterWindowButton } from '@/components';

import { tableCellWidth } from '@/styles/variables';

import {
  Checkbox,
  VerticalTable,
  DualSideBar,
  SquareButton,
  Dropdown,
  TablePaginationManager,
} from 'gymlight-design-system';

import { ReservationFilterMenu, useReservationMemberTable } from '@/features/member';

import * as TableStyled from './table.styles';
import { ProductStatusFlag } from '@/features/product';
import { getEachDateTimeValuesFromString } from '@/utils';

const ReservationMemberTable = () => {
  const {
    data,
    setFilterDropdownRef,

    toggleFilterDropdownOpen,
    isFilterDropdownOpened,
    filterBoxProps,

    handlePageNumberChange,
    currentPageNumber,
    pageSize,
    handlePageSizeChange,
    openReservationMemberFormModal,
  } = useReservationMemberTable();

  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.xs,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.sm,
    tableCellWidth.md,
    tableCellWidth.lg,
    tableCellWidth.sm,
    tableCellWidth.xs,
    tableCellWidth.xs,
  ];
  const tableHeaderCells = [
    '✔️',
    'No.',
    '이름',
    '성별',
    '연락처',
    '예약 경로',
    '에약 일자',
    '문의 상품',
    '등록 여부',
    '상세 보기',
  ];

  const tableRows = data?.list.length
    ? data.list.map(
        (
          {
            name,
            phone,
            reservationPath,
            gender,
            productType,
            reservationId,
            isRegistered,
            content,
            reservationDate,
          },
          index,
        ) => [
          <Checkbox id={`Reservation-${index}`} />,
          index,
          name,
          gender,
          phone,
          reservationPath,
          reservationDate,
          <ProductStatusFlag status={productType} />,
          isRegistered ? `✅` : `❌`,
          <SquareButton
            variant="primary"
            size="small"
            onClick={() => {
              const { year, day, month, time } = getEachDateTimeValuesFromString(reservationDate);
              openReservationMemberFormModal({
                initContent: content,
                initMode: 'view',
                initIsRegistered: isRegistered,
                initName: name,
                initPhone: phone,
                initProductType: productType,

                initVisitDateYear: year,
                initVisitDateMonth: month,
                initVisitDateDay: day,
                initReservationId: reservationId,
                initVisitTime: time,
              });
            }}
          >
            조회
          </SquareButton>,
        ],
      )
    : [];
  return (
    <TableStyled.Wrapper>
      <DualSideBar
        rightSideChildren={[
          <Dropdown
            ref={setFilterDropdownRef(0)}
            align="left"
            isDropdownMenuOpened={isFilterDropdownOpened}
            button={<FilterWindowButton onClick={toggleFilterDropdownOpen} />}
          >
            <ReservationFilterMenu {...filterBoxProps} />
          </Dropdown>,
        ]}
      />
      <VerticalTable
        tableHeaderCells={tableHeaderCells}
        columnWidths={columnWidths}
        tableRows={tableRows}
      />
      <TablePaginationManager
        pageSize={pageSize}
        currentPageIndexNumber={currentPageNumber}
        handlePageIndexNumberChange={handlePageNumberChange}
        handlePageSizeChange={handlePageSizeChange}
        totalPageNumber={data?.totalPages || 0}
        tableDataName="쿠폰 회원"
      />
    </TableStyled.Wrapper>
  );
};

export default ReservationMemberTable;
