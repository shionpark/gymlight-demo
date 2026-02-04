import { ManagementSection } from 'gymlight-design-system';

import { useRecoilValue } from 'recoil';
import { activeBranchState } from '@/states';
1;
import { Modal, TabButtons } from '@/components';
import { useToggleTabMenu } from '@/hooks';

import { MemberDetailManagementSection, useMemberModals } from '@/features/member';
import { MemberStatistics, SalesStatistics, StatisticsTimeInput } from '@/features/statistics';

const StatisticsPage = () => {
  const activeBranch = useRecoilValue(activeBranchState);

  const tabMenus = ['회원 통계', '매출 통계'];
  const {
    activeTab: activeTab,
    getSelectTabHandler: getSelectTabHandler,
    checkIsActiveTab: checkIsActiveTab,
  } = useToggleTabMenu(tabMenus);

  const { data, closeModal, modalTitleText } = useMemberModals();

  return (
    <>
      <ManagementSection
        tabs={
          <TabButtons
            tabMenus={tabMenus}
            checkIsActiveTab={checkIsActiveTab}
            getSelectTabHandler={getSelectTabHandler}
          />
        }
        buttons={<StatisticsTimeInput />}
      >
        {activeTab === '회원 통계' && <MemberStatistics activeBranch={activeBranch} />}
        {activeTab === '매출 통계' && <SalesStatistics />}
      </ManagementSection>

      <Modal title={modalTitleText} onClose={closeModal} size={data?.size}>
        {() => (
          <>
            {data?.type === 'member-details' && (
              <MemberDetailManagementSection {...data?.memberDetailManagementSectionProps} />
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default StatisticsPage;
