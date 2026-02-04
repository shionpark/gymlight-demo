import { useState } from 'react';
import { Input, LabeledContainer, SquareButton } from 'gymlight-design-system';

import { flexColumnStyle } from '@/styles';

import { LockerAssignFormFields, useLockerAssignFormValidation } from '@/features/locker/hooks';

const LockerMoveForm = ({ memberId, password, memo }: Partial<LockerAssignFormFields>) => {
  const [moveId, setMoveId] = useState<number>();

  const changeMoveId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setMoveId(Number(value));
  };

  const { moveLocker } = useLockerAssignFormValidation();

  return (
    <div css={flexColumnStyle} style={{ gap: '0.8rem' }}>
      <form>
        <LabeledContainer labelText="이동할 락커 번호" vertical size="small">
          <Input value={moveId} onChange={changeMoveId} />
        </LabeledContainer>
      </form>
      <SquareButton
        wide
        disabled={!moveId}
        variant={!!moveId ? 'primary' : 'outline'}
        onClick={moveLocker({ lockerId: moveId, memberId, password, memo })}
      >
        락커 이동
      </SquareButton>
    </div>
  );
};

export default LockerMoveForm;
