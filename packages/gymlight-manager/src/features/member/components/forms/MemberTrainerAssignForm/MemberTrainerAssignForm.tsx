import { useMemberTrainerAssignmentForm } from '@/features/member';
import { Select, SquareButton } from 'gymlight-design-system';

export interface IMemberTrainerAssignProps {
  memberId?: number;
  name?: string;

  currentTrainerName?: string;
}

import * as Styled from '../Form.styles';
import { Wrapper, CurrentTrainerName } from './MemberTrainerAssignForm.styles';
import { ErrorPlaceHolder } from '@/components';

const MemberTrainerAssignForm = ({
  memberId,
  name,
  currentTrainerName,
}: IMemberTrainerAssignProps) => {
  const { getHandleSubmit, register, trainers, hasAuth } = useMemberTrainerAssignmentForm();
  const handleSubmit = getHandleSubmit(memberId!);

  return (
    <Wrapper>
      <Styled.Wrapper>
        <Styled.FormTitle>{`${name}`} 회원님 트레이너 변경</Styled.FormTitle>
        <CurrentTrainerName>현재 담당자: {`${currentTrainerName || '없음'}`}</CurrentTrainerName>
        {hasAuth ? (
          <Styled.Form onSubmit={handleSubmit}>
            <Select disabled={!hasAuth} {...register({ name: 'trainerId' })}>
              {trainers?.map(({ trainerId, name }) => <option value={trainerId}>{name}</option>)}
            </Select>
            <SquareButton type="submit" disabled={!hasAuth}>
              트레이너 할당
            </SquareButton>
          </Styled.Form>
        ) : (
          <ErrorPlaceHolder type="not-allowed" />
        )}
      </Styled.Wrapper>
    </Wrapper>
  );
};

export default MemberTrainerAssignForm;
