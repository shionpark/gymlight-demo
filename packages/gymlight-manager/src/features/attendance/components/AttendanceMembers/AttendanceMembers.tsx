import { SquareButton } from 'gymlight-design-system';

import { useAttendanceCheckIn, useAttendanceSearchList } from '../../hooks';

import * as Styled from './AttendanceMembers.styles';

interface IAttendanceMembersProps {
  phone: string;
  closeModal: () => void;
  handleInitValue: () => void;
}

const AttendanceMembers = ({ phone, closeModal, handleInitValue }: IAttendanceMembersProps) => {
  const { data: searchList } = useAttendanceSearchList({ phone });

  const { mutate: checkIn } = useAttendanceCheckIn();

  const handleCheckIn = (memberId: number) => {
    if (confirm('출석 등록 하시겠습니까?')) {
      checkIn({ memberId });
      closeModal();
      handleInitValue();
    }
  };

  return (
    <>
      {searchList?.length ? (
        <Styled.Container>
          {searchList.map(({ memberId, name, phone }) => (
            <Styled.FlexContainer key={memberId}>
              <img />
              <Styled.MemberInfo>
                <span>{name}</span>
                <span>{phone}</span>
                <SquareButton variant="primary" onClick={() => handleCheckIn(memberId)} wide>
                  출석하기
                </SquareButton>
              </Styled.MemberInfo>
            </Styled.FlexContainer>
          ))}
        </Styled.Container>
      ) : (
        <div>존재하지 않는 회원입니다.</div>
      )}
    </>
  );
};

export default AttendanceMembers;
