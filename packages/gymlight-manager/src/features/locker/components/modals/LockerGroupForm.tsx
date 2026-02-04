import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import {
  Checkbox,
  GridContainer,
  Input,
  LabeledContainer,
  SquareButton,
} from 'gymlight-design-system';

import { activeBranchState } from '@/states';
import type { LockerDirectionType } from '@/types';

import { LockerItem } from '@/features/locker/components';
import {
  type IReturnOfUseLockerTable,
  useCreateLockerGroup,
  useLockerModals,
  useUpdateLockerGroup,
  useLockerGroupForm,
} from '@/features/locker/hooks';

import * as Styled from './LockerGroupForm.styles';

export interface ILockerGroupFormProps {
  isEdit?: boolean;
  initName?: string;
}

interface LockerGroupFormProps extends ILockerGroupFormProps, IReturnOfUseLockerTable {}

const LockerGroupForm = ({
  lockerGroupProps: { activeLockerGroupId, lastLockerItemNumber },
  isEdit = false,
  initName,
}: LockerGroupFormProps) => {
  const activeBranch = useRecoilValue(activeBranchState);

  const { closeModal } = useLockerModals();

  const {
    name,
    rows,
    columns,
    quantity,
    direction,
    startNumber,
    isHorizontal,
    handleNameChange,
    handleNumberChange,
    handleDirectionChange,
    resetColumnAndRow,

    errorMessage,
    handleErrorMessage,
  } = useLockerGroupForm(lastLockerItemNumber);

  const { mutate: createLockerGroup } = useCreateLockerGroup({
    onSuccessAdditional: () => {
      closeModal();
    },
    onErrorAdditional: async (errorMessage) => {
      handleErrorMessage(errorMessage);
    },
  });

  const { mutate: updateLockerGroup } = useUpdateLockerGroup({
    onSuccessAdditional: () => {
      closeModal();
    },
  });

  const handleCreateLockerGroup = () => {
    if (confirm('락커 그룹을 생성하시겠습니까?')) {
      createLockerGroup({
        name,
        rows,
        columns,
        quantity,
        direction,
        startNumber,
        branchId: activeBranch?.branchId || 0,
      });
    }
  };

  const handleUpdateLockerGroup = () => {
    if (confirm('락커 그룹명을 수정하시겠습니까?') && activeLockerGroupId) {
      updateLockerGroup({ lockerGroupId: activeLockerGroupId, name });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    isEdit ? handleUpdateLockerGroup() : handleCreateLockerGroup();
  };

  useEffect(() => {
    resetColumnAndRow();
  }, [direction]);

  return (
    <Styled.ModalSection isEdit={isEdit}>
      <form onSubmit={handleSubmit}>
        <LabeledContainer labelText="그룹 이름" vertical>
          <Input
            type="text"
            value={name || initName}
            onChange={handleNameChange}
            placeholder="그룹 이름을 입력해주세요."
          />
        </LabeledContainer>
        {!isEdit && (
          <>
            <LabeledContainer labelText="락커 수량" vertical>
              <Input
                type="number"
                name="quantity"
                min={1}
                value={quantity}
                onChange={handleNumberChange}
              />
            </LabeledContainer>
            <Styled.FlexContainer>
              <LabeledContainer labelText="방향" vertical>
                <Styled.DirectionSection>
                  {['가로', '세로'].map((option, index: number) => (
                    <Styled.FlexContainer key={index}>
                      <Checkbox
                        id={`${option}-${index}`}
                        value={option}
                        checked={option === direction}
                        onClick={() => handleDirectionChange(option as LockerDirectionType)}
                      />
                      <span>{option}</span>
                    </Styled.FlexContainer>
                  ))}
                </Styled.DirectionSection>
              </LabeledContainer>
            </Styled.FlexContainer>
            <LabeledContainer labelText="가로 개수" vertical>
              <Input
                type="number"
                name="columnsInput"
                min={1}
                value={columns}
                onChange={handleNumberChange}
                readOnly={!isHorizontal}
              />
            </LabeledContainer>
            <LabeledContainer labelText="세로 개수" vertical>
              <Input
                type="number"
                name="rowsInput"
                min={1}
                value={rows}
                onChange={handleNumberChange}
                readOnly={isHorizontal}
              />
            </LabeledContainer>
            <LabeledContainer labelText="락커 시작 번호" vertical>
              <Input
                type="number"
                name="startNumber"
                value={startNumber}
                onChange={handleNumberChange}
              />
            </LabeledContainer>
            {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
          </>
        )}
        <SquareButton size="normal">{isEdit ? '수정' : '생성'}</SquareButton>
      </form>

      {!isEdit && (
        <Styled.GridWrapper>
          <GridContainer direction={direction} columns={isHorizontal ? columns : rows}>
            {Array.from({ length: quantity }, (_, index) => (
              <LockerItem key={index} lockerNumber={startNumber + index} isPreview />
            ))}
          </GridContainer>
        </Styled.GridWrapper>
      )}
    </Styled.ModalSection>
  );
};

export default LockerGroupForm;
