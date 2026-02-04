import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { Select } from '@/components/inputs';
import { SquareButton, TabButton } from '@/components/buttons';
import ManagementSection from './ManagementSection';

import { GlobalStyles, theme } from '@/styles';

/**
 * #### 개요
 *
 * 'OO 관리' 페이지의 기본 레이아웃. 구성요소(예시)는 다음과 같음.
 *
 * - 상단 왼쪽 탭: ex. 팀 목록, 팀원 목록
 * - 상단 오른쪽 버튼: ex. 지점 선택, 팀 등록 버튼
 * - 메인 섹션: ex. 팀 목록 테이블
 *
 * #### 사용처
 *
 * 관리 페이지
 *
 * #### 사용 방법
 *
 * TabButtons 컴포넌트와 ControlButtons 컴포넌트를 함께 사용할 수 있음.
 * 
 * ```tsx
 * <ManagementSection
    tabs={
      <TabButtons
        tabMenus={tabMenus}
        checkIsActiveTab={checkIsActiveTab}
        getSelectTabHandler={getSelectTabHandler}
      />
    }
    buttons={
      <ControlButtons
        branches={teamTableProps.branchesData?.list || []}
        onBranchChange={teamTableProps.handleBranchChange}
        onOpenModal={clickTeamFormOpen}
        Icon={UserGroupIcon}
        label={activeTab === '팀 목록' ? '팀 등록' : '팀원 등록'}
      />
    }
  >
    test
  </ManagementSection>
 * ```
 */

const meta: Meta<typeof ManagementSection> = {
  title: 'Components/Containers/ManagementSection',
  component: ManagementSection,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ManagementSection>;

export const Default: Story = {
  render: (args) => {
    const [activeIdx, setActiveIdx] = useState(0);

    const tabButtons = ['팀 목록', '팀원 목록'].map((tabName, idx) => (
      <TabButton active={idx === activeIdx} onClick={() => setActiveIdx(idx)}>
        {tabName}
      </TabButton>
    ));

    const buttons = (
      <>
        <Select wide={false}>
          <option>서강대점</option>
          <option>명지대점</option>
        </Select>
        <SquareButton variant="primary">팀 등록</SquareButton>
      </>
    );

    return (
      <ManagementSection tabs={tabButtons} buttons={buttons}>
        <div style={{ width: '100%', height: '60rem' }}>preview</div>
      </ManagementSection>
    );
  },
};
