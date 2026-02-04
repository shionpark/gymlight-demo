import { Input, LabeledContainer, SquareButton, Textarea } from 'gymlight-design-system';
import { useRecoilValue } from 'recoil';

import { activeBranchState } from '@/states';

import { useMemberDetails, useMemberModals } from '@/features/member';

import { LockerStatusFlag } from '@/features/locker/components';
import {
  useLockerDetail,
  useLockerModals,
  useLockerAssignFormState,
  useLockerAssignFormValidation,
  type LockerAssignFormFields,
  type IReturnOfUseLockerTable,
} from '@/features/locker/hooks';

import * as Styled from './LockerAssignForm.styles';

const LockerAssignForm = ({
  lockerItemProps: { activeLockerId, activeLockerNumber },
  memberSearchProps: { activeMemberId: selectedMemberId, handleActiveMemberId: selectMemberId },
}: IReturnOfUseLockerTable) => {
  const activeBranch = useRecoilValue(activeBranchState);
  const { openMemberSearchFormModal, openLockerMoveModal } = useLockerModals();
  const { openMemberDetailsModal } = useMemberModals();

  const { assignLocker, unassignLocker } = useLockerAssignFormValidation();

  const { data: selectedMemberData } = useMemberDetails(selectedMemberId!);

  const { data: activeLockerDetails } = useLockerDetail({
    branchName: activeBranch?.name || '',
    lockerId: activeLockerId || 0,
  });

  const {
    lockerAssignFormState: { memberName, password, memo, startDate, endDate },
    changeLockerAssignFormState,
  } = useLockerAssignFormState({
    activeLockerDetails,
    selectedMemberData,
  });

  const inUse = !!activeLockerDetails?.memberId;
  const memberButtonIsShow = inUse || !!selectedMemberId;

  const clickButton = (activeMemberId?: number, isSelectedMemberId?: number) => {
    if (inUse) {
      openMemberDetailsModal({ memberId: activeMemberId });
    } else {
      if (isSelectedMemberId) {
        selectMemberId(undefined);
      } else {
        openMemberSearchFormModal();
      }
    }
  };

  const assignValues: LockerAssignFormFields = {
    lockerId: activeLockerId,
    memberId: selectedMemberId,
    password,
    memo,
  };

  return (
    <Styled.Wrapper>
      <div className="form-header">
        <span className="locker-number">{activeLockerNumber}번 락커</span>
        <LockerStatusFlag status={activeLockerDetails?.status || '사용 가능'} />
      </div>
      <form>
        <LabeledContainer labelText="회원명" vertical size="small">
          <Styled.InputWrapper buttonSizeSmall={memberButtonIsShow}>
            <Input
              style={{ display: memberButtonIsShow ? 'block' : 'none' }}
              type="text"
              name="memberName"
              value={memberName}
              onChange={changeLockerAssignFormState}
            />
            <SquareButton
              wide
              type="button"
              size="small"
              variant="primary-outline"
              onClick={() => clickButton(activeLockerDetails?.memberId, selectedMemberId)}
            >
              {inUse ? '상세' : selectedMemberId ? '취소' : '검색'}
            </SquareButton>
          </Styled.InputWrapper>
        </LabeledContainer>
        <LabeledContainer labelText="시작일" vertical size="small">
          <Input
            readOnly
            type="text"
            name="startDate"
            value={startDate}
            onChange={changeLockerAssignFormState}
          />
        </LabeledContainer>
        <LabeledContainer labelText="만기일" vertical size="small">
          <Input
            readOnly
            type="text"
            name="endDate"
            value={endDate}
            onChange={changeLockerAssignFormState}
          />
        </LabeledContainer>
        <LabeledContainer labelText="비밀번호" vertical size="small">
          <Styled.InputWrapper>
            <Input
              type="text"
              name="password"
              value={password}
              onChange={changeLockerAssignFormState}
            />
          </Styled.InputWrapper>
        </LabeledContainer>
        <LabeledContainer labelText="메모" vertical size="small">
          <Textarea
            name="memo"
            value={memo}
            onChange={changeLockerAssignFormState}
            size="small"
            maxTextLength={40}
          />
        </LabeledContainer>
      </form>
      {inUse ? (
        <Styled.ButtonsWrapper>
          <SquareButton wide onClick={unassignLocker(activeLockerId)}>
            락커 회수
          </SquareButton>
          <SquareButton
            wide
            onClick={() =>
              openLockerMoveModal({
                memberId: activeLockerDetails?.memberId,
                password,
                memo,
              })
            }
          >
            락커 이동
          </SquareButton>
        </Styled.ButtonsWrapper>
      ) : (
        <SquareButton wide onClick={assignLocker(assignValues)}>
          락커 배정
        </SquareButton>
      )}
    </Styled.Wrapper>
  );
};

export default LockerAssignForm;
