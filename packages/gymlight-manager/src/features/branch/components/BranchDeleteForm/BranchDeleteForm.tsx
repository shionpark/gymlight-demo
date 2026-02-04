import { LabeledContainer, SquareButton, Input } from 'gymlight-design-system';

import { ErrorPlaceHolder } from '@/components';

import { useBranchDeleteForm } from '@/features/branch';

import * as Styled from './BranchDeleteForm.styles';
export interface IBranchDeleteFormProps {
  name: string;
  branchId: number;
}

const BranchDeleteForm = ({ name, branchId }: IBranchDeleteFormProps) => {
  const {
    hasAuth,

    phoneNumber,
    handleChangePhoneNumberInput,
    handleCheckIsCorrectPhoneNumber,
    isCorrectlyAware,

    certificationNumber,
    handleChangeCertificationNumberInput,

    handleClickSendSms,
    timeString,
    isCountingNow,

    isValidCertificationCodeCreated,
    handleClickDeleteBranch,
    isReadyToDeleteBranch,
  } = useBranchDeleteForm({ branchId: branchId, name: name });

  if (!hasAuth) {
    return <ErrorPlaceHolder type="not-allowed" />;
  }

  return (
    <Styled.Wrapper>
      <p>{name}</p>
      <LabeledContainer labelText="관리자 전화번호 확인" vertical>
        <Styled.InputWithButtonContainer>
          <Input
            name="phone"
            value={phoneNumber}
            onChange={handleChangePhoneNumberInput}
            placeholder="관리자 계정 전화번호 ('-' 포함 여부 상관없음)"
            readOnly={isCorrectlyAware}
          />
          <SquareButton
            variant={isCorrectlyAware ? 'reverse' : 'primary'}
            onClick={handleCheckIsCorrectPhoneNumber}
            size="small"
            disabled={isCorrectlyAware}
          >
            {isCorrectlyAware ? '확인 완료' : '확인하기'}
          </SquareButton>
        </Styled.InputWithButtonContainer>
      </LabeledContainer>

      {isCorrectlyAware && (
        <LabeledContainer labelText="인증코드 전송" vertical>
          <Styled.InputWithButtonContainer>
            <Styled.TimerBox>
              {isReadyToDeleteBranch
                ? '인증 되었습니다.'
                : isCountingNow
                  ? `코드 유효시간 - ${timeString}`
                  : '요청 전송 대기'}
            </Styled.TimerBox>

            <SquareButton
              size="small"
              onClick={handleClickSendSms}
              wide
              variant={isCountingNow ? 'primary-outline' : 'primary'}
              disabled={isReadyToDeleteBranch}
            >
              {isReadyToDeleteBranch ? '완료' : isCountingNow ? '재 전송' : '코드 전송'}
            </SquareButton>
          </Styled.InputWithButtonContainer>
        </LabeledContainer>
      )}

      {isValidCertificationCodeCreated && (
        <LabeledContainer labelText="인증코드 확인" vertical>
          <Styled.InputWithButtonContainer>
            <Input
              value={certificationNumber}
              onChange={handleChangeCertificationNumberInput}
              readOnly={isReadyToDeleteBranch}
            />
            <SquareButton
              size="small"
              variant={isReadyToDeleteBranch ? 'reverse' : 'primary'}
              disabled={isReadyToDeleteBranch}
              onClick={() => alert('SMS 기능은 현재 준비중입니다.')}
            >
              {isValidCertificationCodeCreated ? '완료' : '인증하기'}
            </SquareButton>
          </Styled.InputWithButtonContainer>
        </LabeledContainer>
      )}

      {isReadyToDeleteBranch && (
        <SquareButton wide variant="primary" onClick={handleClickDeleteBranch}>
          지점 삭제
        </SquareButton>
      )}
    </Styled.Wrapper>
  );
};

export default BranchDeleteForm;
