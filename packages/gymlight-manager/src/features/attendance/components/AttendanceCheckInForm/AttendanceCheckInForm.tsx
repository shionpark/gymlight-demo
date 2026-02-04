import { SquareButton } from 'gymlight-design-system';

import { Modal, NumPad } from '@/components';
import { useNumPad } from '@/hooks';
import { getFullDateTime } from '@/utils';

import { AttendanceMembers } from '../AttendanceMembers';
import { useCheckInModal } from '../../hooks';

import * as Styled from './AttendanceCheckInForm.styles';
import { IBranchNameResponse } from '@/types';

const AttendanceCheckInForm = ({ branch }: { branch: IBranchNameResponse | null }) => {
  const { openAttendanceMembersModal, closeModal, modalTitleText, data } = useCheckInModal();

  const { digitState, handleNumPadAction, clearAllDigit, isAllDigitClicked, isNextDigit } =
    useNumPad();

  const handleSearchMember = (phone: string) => {
    if (phone.length !== 4) {
      alert('잘못된 형식입니다.');
      return;
    }
    openAttendanceMembersModal(phone);
  };

  const today = new Date();
  const { date, dayOfWeek, time } = getFullDateTime(today);

  return (
    <>
      <Styled.Wrapper>
        <span className="branch">짐라이트 {branch?.name}</span>

        <Styled.TopSection>
          <Styled.Clock>
            <span className="today-date">
              {date} {dayOfWeek}
            </span>
            <span className="current-time">{time}</span>
          </Styled.Clock>

          <Styled.ClickedNumbers>
            {[0, 1, 2, 3].map((index) => (
              <Styled.NumberBox
                key={index}
                isNext={isNextDigit(index)}
                isCurrent={digitState[index] ? true : false}
              >
                {digitState[index] || ''}
              </Styled.NumberBox>
            ))}
          </Styled.ClickedNumbers>
        </Styled.TopSection>

        <Styled.BottomSection>
          {/* <span className="info-desc">직원을 호출하시겠습니까?</span> */}
          <Styled.Description>
            <span>휴대전화번호</span>
            <span>뒤 4자리를 눌러주세요</span>
          </Styled.Description>
          <Styled.TouchPad>
            <NumPad handleNumPadAction={handleNumPadAction} />
            <SquareButton
              wide
              onClick={() => handleSearchMember(digitState)}
              variant={isAllDigitClicked ? 'primary' : 'outline'}
            >
              등록
            </SquareButton>
          </Styled.TouchPad>
        </Styled.BottomSection>
      </Styled.Wrapper>

      <Modal title={modalTitleText} onClose={closeModal}>
        {() =>
          data?.type === 'attendance-members' && (
            <AttendanceMembers
              phone={data?.phone}
              closeModal={closeModal}
              handleInitValue={clearAllDigit}
            />
          )
        }
      </Modal>
    </>
  );
};

export default AttendanceCheckInForm;
