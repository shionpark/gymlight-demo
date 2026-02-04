import { DualSideBar, TabButton } from 'gymlight-design-system';

import { useToggleTabMenu } from '@/hooks';

import { IMemberDetailsResponse, IMemberPurchasedProduct } from '@/types';
import {
  MemberAttendanceTab,
  MemberHoldingTab,
  MemberLessonTab,
  MemberPaymentTab,
  MemberDashBoardTab,
} from './Tabs';

import { MemberProfile } from './MemberProfile';

import * as Styled from './MemberDetails.styles';
import { AuthLoading } from '@/features/auth';

type TabType = '대시보드' | '결제내역' | '출석내역' | '수업내역' | '홀딩내역';

const MemberDetails = ({ data }: { data: IMemberDetailsResponse }) => {
  const tableTabNames = ['대시보드', '결제내역', '출석내역', '수업내역', '홀딩내역'] as TabType[];

  const {
    getSelectTabHandler: getSelectTableTabHandler,
    checkIsActiveTab: checkIsActiveTableTab,
    activeTab: activeTableTab,
  } = useToggleTabMenu(tableTabNames);

  const TableTabButtons = tableTabNames.map((tabName) => (
    <TabButton active={checkIsActiveTableTab(tabName)} onClick={getSelectTableTabHandler(tabName)}>
      {tabName}
    </TabButton>
  ));

  return (
    <Styled.Wrapper>
      <Styled.Body>
        <MemberProfile
          birthDate={data?.member.birthDate}
          name={data?.member.name}
          statusFlags={[]}
          address={data?.member.address || ''}
          gender={data?.member.gender || ('' as any)}
          phone={data?.member.phone || ''}
          trainerName={data?.member.trainerName || '없음'}
          trainerPhone={data.member.trainerPhone || '없음'}
        />

        <DualSideBar leftSideChildren={TableTabButtons}></DualSideBar>
        <Styled.TabContainer>
          {(() => {
            switch (activeTableTab) {
              case '대시보드':
                return data?.purchasedProducts ? (
                  <MemberDashBoardTab currentProductStates={data?.purchasedProducts} />
                ) : (
                  <AuthLoading />
                );
              case '결제내역':
                return <MemberPaymentTab payments={data?.payments} />;
              case '출석내역':
                return <MemberAttendanceTab />;
              case '수업내역':
                return <MemberLessonTab />;
              case '홀딩내역':
                return <MemberHoldingTab holdings={data?.holdings} />;
              default:
                return null;
            }
          })()}
        </Styled.TabContainer>
      </Styled.Body>
    </Styled.Wrapper>
  );
};

export default MemberDetails;
