import { SquareButton, TabButton } from 'gymlight-design-system';

import { UserPlusIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

import { ManagementSection, Modal } from '@/components';

import { getEachDateTimePartsFromDate } from '@/utils';

import { useToggleTabMenu } from '@/hooks';

import {
  ScheduleCalendar,
  MyMemberTable,
  ScheduleTable,
  MyWorkPageTabWrapper,
  ScheduleForm,
  ScheduleFormWithFetchingData,
  PerformanceProgressBoard,
  useMyWorkModals,
  MyTeamMemberTrainerTable,
  SettlementRequestForm,
} from '@/features/myWork';

import { MemberDetailManagementSection } from '@/features/member';
import { useMe } from '@/features/auth';

const MyWorkPage = () => {
  const {
    data,
    openScheduleFormModal,
    modalTitleText,
    closeModal,
    openSettlementRequestFormModal,
  } = useMyWorkModals();

  const { data: userData } = useMe();

  const tabMenus =
    userData?.role === '팀장 트레이너'
      ? ([
          '실적 현황',
          '목표 매출',
          '팀원 목록',
          '담당 회원',
          '일정 관리',
          '수업 목록',
          '정산 내역',
        ] as const)
      : (['실적 현황', '목표 매출', '담당 회원', '일정 관리', '수업 목록', '정산 내역'] as const);

  const { activeTab, getSelectTabHandler, checkIsActiveTab } = useToggleTabMenu(tabMenus);

  const tabs = {
    '팀원 목록': <MyTeamMemberTrainerTable />,
    '실적 현황': <PerformanceProgressBoard />,
    '담당 회원': <MyMemberTable />,
    '일정 관리': <ScheduleCalendar />,
    '수업 목록': <ScheduleTable />,
    '목표 매출': <div>목표 매출</div>,
    '정산 내역': <div>정산 내역</div>,
  };

  const { year, month, day, time } = getEachDateTimePartsFromDate(new Date());

  return (
    <>
      <ManagementSection
        tabs={tabMenus.map((tabName) => (
          <TabButton active={checkIsActiveTab(tabName)} onClick={getSelectTabHandler(tabName)}>
            {tabName}
          </TabButton>
        ))}
        buttons={
          activeTab === '정산 내역' || activeTab === '실적 현황' ? (
            <SquareButton
              onClick={() => openSettlementRequestFormModal()}
              variant="primary"
              size="small"
            >
              <span>
                <CurrencyDollarIcon />
              </span>
              급여 정산 요청
            </SquareButton>
          ) : (
            <SquareButton
              onClick={() =>
                openScheduleFormModal({
                  startDateYear: year,
                  startDateMonth: month,
                  startDateDay: day,
                  scheduledStartTime: time,
                })
              }
              variant="primary"
              size="small"
            >
              <span>
                <UserPlusIcon />
              </span>
              수업 일정 등록
            </SquareButton>
          )
        }
      >
        <MyWorkPageTabWrapper>{tabs[activeTab]}</MyWorkPageTabWrapper>
      </ManagementSection>
      <Modal onClose={closeModal} title={modalTitleText} size={data?.size}>
        {() => (
          <>
            {data?.type === 'mywork-schedule' && <ScheduleForm {...data?.scheduleFormProps} />}
            {data?.type === 'member-details' && (
              <MemberDetailManagementSection {...data?.memberDetailManagementSectionProps} />
            )}
            {data?.type === 'mywork-schedule-fetching-data' && (
              <ScheduleFormWithFetchingData {...data?.ScheduleFormWithFetchingDataProps} />
            )}
            {data?.type === 'mywork-settlement' && (
              <SettlementRequestForm {...data?.settlementRequestFormProps} />
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default MyWorkPage;
