import type { StoryObj, Meta } from '@storybook/react';

import BranchTable from './BranchTable';

/** ## BranchTable
 *
 * ### 개요
 *
 * 지점 목록을 조회하는 테이블
 *
 * ### 사용처
 *
 * 지점 목록 테이블이 필요한 곳
 *
 * ### 사용팁
 *
 * useBranchTable 커스텀 훅과 같이 사용하세요.
 * 테이블 랜더링 중간에 훅의 반환요소를 재사용하는 코드가 생길수도있기떄문에
 *
 * 내부에서 직접 훅을 호출하지 않고, 외부에서 호출해서 반환값을 prop으로 제공하게 만들었습니다.
 */
const meta: Meta<typeof BranchTable> = {
  title: 'features/branch/BranchTable',
  component: BranchTable,
  argTypes: {
    data: {
      description: 'list가 들어있는 response 데이터.',
    },
    checkboxStates: {
      description: '각 행에 대한 체크박스의 선택 상태가 boolean으로 저장된 객체',
    },
    toggleOneCheckbox: {
      description: '특정 행의 체크박스 상태를 토글하는 함수',
    },
    resetCheckboxes: {
      description: '모든 체크박스의 선택 상태를 초기화하는 함수',
    },
    sortParam: {
      description: ' 정렬 상태를 나타내는 변수 (쿼리의 sort param)',
    },
    branchNumberButtonProps: {
      description: '"지점 번호 " 컬럼 헤더 정렬 버튼의 props',
    },
    branchNameButtonProps: {
      description: '"지점 이름 " 컬럼 헤더 정렬 버튼의 props',
    },

    openDateButtonProps: {
      description: '"생성일" 컬럼 헤더 정렬 버튼의 props',
    },
    toggleDropdownMenu: {
      description: '지정된 row에 해당하는 드롭다운을 토글하는 함수',
    },
    checkDropdownMenuOpen: {
      description: '드롭다운 오픈 여부를 boolean타입의 값으로 반환하는 함수',
    },
    pageSize: {
      description: '테이블의 한 페이지에 표시될 row 갯수.',
    },
    handlePageSizeChange: {
      description: '한 페이지에 표시할 항목 수를 변경하는 함수',
    },
    currentPageNumber: {
      description: '현재 표시 중인 페이지 번호를 나타내는 변수',
    },
    handlePageNumberChange: {
      description: '페이지 번호를 변경하는 함수.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BranchTable>;

export const Default: Story = {};
