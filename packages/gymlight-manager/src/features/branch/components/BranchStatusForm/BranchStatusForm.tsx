import { LabeledContainer, Select, SquareButton } from 'gymlight-design-system';

import { BranchStatusType } from '@/types';
import { BranchStatus } from '@/constants';

import { BranchStatusFlag, useBranchStatusForm } from '@/features/branch';

import * as Styled from './BranchStatusForm.styles';

export interface IBranchStatusFormProps {
  initStatus: BranchStatusType;
  branchId: number;
  branchName: string;
  branchNumber: number;
}

const BranchStatusForm = ({
  initStatus,
  branchId,
  branchName,
  branchNumber,
}: IBranchStatusFormProps) => {
  const { register, onSubmitBranchStatusUpdate } = useBranchStatusForm();

  return (
    <Styled.Wrapper>
      <h5>{`${branchName}(${branchNumber}호점) 상태 변경`}</h5>
      <LabeledContainer labelText="현재 상태" labelRatio={1} contentRatio={3} bold>
        <BranchStatusFlag status={initStatus} />
      </LabeledContainer>

      <Styled.Form onSubmit={onSubmitBranchStatusUpdate(branchId)}>
        <LabeledContainer
          labelText="다음 상태로 변경"
          labelRatio={2}
          contentRatio={3}
          bold
          vertical
        >
          <Select
            defaultValue={initStatus}
            {...register({
              name: 'status',
            })}
          >
            {BranchStatus.map((status) => (
              <option value={status}>{status}</option>
            ))}
          </Select>
        </LabeledContainer>
        <SquareButton type="submit" variant="primary">
          지점 상태 변경
        </SquareButton>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default BranchStatusForm;
