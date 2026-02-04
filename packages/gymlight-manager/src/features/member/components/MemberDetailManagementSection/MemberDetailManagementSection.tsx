import { Select } from 'gymlight-design-system';

import { useToggleTabMenu } from '@/hooks';

import { MemberDetails } from './MemberDetails';
import {
  MemberHoldForm,
  MemberInfoForm,
  MemberRegisterForm,
  OptionApplicationForm,
  useMemberDetails,
  useMemberRegisterForm,
  useAdditionOptionPurchaseForm,
  MemberPaymentRefundForm,
  MemberTransferForm,
  useMemberTransferForm,
  MemberTrainerAssignForm,
} from '@/features/member';

import * as Styled from './MemberDetailManagementSection.styles';
import { AuthLoading } from '@/features/auth';

export interface IMemberDetailManagementSectionProps {
  memberId?: number;
}
const MemberDetailManagementSection = ({ memberId }: IMemberDetailManagementSectionProps) => {
  if (!memberId) {
    return '잘못된 접근입니다.';
  }

  const { data } = useMemberDetails(memberId);

  const memberRegisterFormProps = useMemberRegisterForm({
    isReRegister: true,
    initData: {
      initName: data?.member?.name,
      initAddress: data?.member?.address,
      initBirthDate: data?.member?.birthDate,
      initGender: data?.member?.gender,
      initJoinReason: data?.member?.joinReason,
      initJoinReasonOther: data?.member?.joinReasonOther,
      initPhone: data?.member?.phone,
      initVisitPath: data?.member?.visitPath,
      initVisitPathOther: data?.member?.visitPathOther,
    },
  });

  const purchaseFormProps = useAdditionOptionPurchaseForm({
    memberId,
    initName: data?.member?.name,
    initPhone: data?.member?.phone,
  });

  const memberTransferFormProps = useMemberTransferForm({
    memberId,
    initPhone: data?.member?.phone,
    initName: data?.member?.name,
  });

  const tabs = [
    '활동 정보 조회',
    '옵션 추가 결제',
    '재 등록 결제',
    '양도 신청',
    '해지 신청',
    '홀딩 등록',
    '가입 정보 수정',
    '담당자 변경',
  ] as const;
  const { activeTab, setActiveTab } = useToggleTabMenu(tabs);

  if (!data) {
    return <AuthLoading />;
  }

  return (
    <Styled.Wrapper>
      <Styled.TabSelectWrapper>
        <Select
          className="manage-category-select"
          value={activeTab}
          onChange={(event) => setActiveTab(event.target.value)}
        >
          {tabs.map((menu) => (
            <option key={menu} value={menu}>
              {menu}
            </option>
          ))}
        </Select>
      </Styled.TabSelectWrapper>

      <Styled.ManageFormWrapper>
        {activeTab === '활동 정보 조회' && <MemberDetails data={data} />}
        {activeTab === '홀딩 등록' && <MemberHoldForm memberId={memberId} />}
        {activeTab === '옵션 추가 결제' && <OptionApplicationForm {...purchaseFormProps} />}
        {activeTab === '가입 정보 수정' && (
          <MemberInfoForm
            memberId={memberId}
            name={data.member?.name}
            gender={data.member?.gender}
            phone={data.member?.phone}
            initVisitPath={data.member?.visitPath}
            initVisitPathOther={data.member?.visitPathOther}
            initJoinReason={data.member?.joinReason}
            initJoinReasonOther={data.member?.joinReasonOther}
            birthDate={data.member?.birthDate}
            startDate={data.member?.startDate}
            address={data.member?.address}
          />
        )}
        {activeTab === '재 등록 결제' && <MemberRegisterForm {...memberRegisterFormProps} />}
        {activeTab === '해지 신청' && (
          <MemberPaymentRefundForm
            initName={data.member?.name}
            initPhone={data.member?.phone}
            memberId={memberId}
          />
        )}
        {activeTab === '양도 신청' && <MemberTransferForm {...memberTransferFormProps} />}
        {activeTab === '담당자 변경' && (
          <MemberTrainerAssignForm
            memberId={data.member?.memberId}
            name={data.member?.name}
            currentTrainerName={data.member?.trainerName}
          />
        )}
      </Styled.ManageFormWrapper>
    </Styled.Wrapper>
  );
};

export default MemberDetailManagementSection;
