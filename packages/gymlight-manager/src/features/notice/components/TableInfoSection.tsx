import {
  Dropdown,
  DualSideBar,
  Input,
  LabeledContainer,
  SquareButton,
} from 'gymlight-design-system';

import { NoticeSortType } from '@/types';
import { useToggleDropdownMenu } from '@/hooks';
import { FilterWindowButton, SortDropdown } from '@/components';

import {
  NOTICE_SORT_OPTIONS,
  NOTICE_TYPES_ALL,
  type NoticeTypes,
} from '@/features/notice/constant';

import * as Styled from './NoticeTable.styles';

interface TableInfoSectionProps {
  sortParam: NoticeSortType;
  setSortParam: (param: NoticeSortType) => void;
  totalElements?: number;
  checkboxCountSelected: number;
  checkIsActiveType: (tabName: NoticeTypes | '전체') => boolean;
  getSelectTypeHandler: (tabName: NoticeTypes | '전체') => () => void;
}

const TableInfoSection = ({
  sortParam,
  setSortParam,
  totalElements,
  checkboxCountSelected,
  checkIsActiveType,
  getSelectTypeHandler,
}: TableInfoSectionProps) => {
  const {
    toggleDropdownMenu: toggleFilterMenu,
    setDropdownMenuRef: setFilterMenuRef,
    checkDropdownMenuOpen: checkFilterMenuOpen,
    closeDropdownMenu: closeFilterDropdownMenu,
  } = useToggleDropdownMenu(1);

  return (
    <div style={{ marginBottom: '0.4rem' }}>
      <DualSideBar
        leftSideChildren={[
          <Styled.ButtonsWrapper>
            {NOTICE_TYPES_ALL.map((type) => (
              <SquareButton
                key={type}
                size="small"
                variant={checkIsActiveType(type) ? 'primary' : 'outline'}
                onClick={getSelectTypeHandler(type)}
              >
                {type}
              </SquareButton>
            ))}
          </Styled.ButtonsWrapper>,
        ]}
      />
      <DualSideBar
        leftSideChildren={[
          <Styled.Details>
            <span>총 {totalElements || 0}개</span>
            <span>{` / `}</span>
            <span>{sortParam}</span>
            {checkboxCountSelected ? (
              <>
                <span>{` / `}</span>
                <span>{checkboxCountSelected}개 선택</span>
              </>
            ) : null}
          </Styled.Details>,
        ]}
        rightSideChildren={[
          <Dropdown
            align="left"
            ref={setFilterMenuRef(0)}
            button={<FilterWindowButton onClick={() => toggleFilterMenu(0)} />}
            isDropdownMenuOpened={checkFilterMenuOpen(0)}
            distance={10}
          >
            <LabeledContainer labelText="시작">
              <Input type="date" />
            </LabeledContainer>
            <LabeledContainer labelText="종료">
              <Input type="date" />
            </LabeledContainer>
          </Dropdown>,
          <SortDropdown
            sortParam={sortParam}
            sortOptions={NOTICE_SORT_OPTIONS}
            setSortParam={setSortParam}
          />,
        ]}
      />
    </div>
  );
};

export default TableInfoSection;
