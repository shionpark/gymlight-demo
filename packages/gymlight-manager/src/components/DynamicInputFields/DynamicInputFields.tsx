import { memo, ReactNode, useEffect } from 'react';

import { IconButton, LabeledContainer, SquareButton } from 'gymlight-design-system';

import { useDynamicInputFields } from '@/hooks';

import * as Styled from './DynamicInputFields.styles';
import { ArrowPathIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ChildComponentProps {
  value?: string | number;
  onChange: (value: string | number) => void;
}

interface IDynamicInputFieldsProps {
  /** inputFields 라벨 */
  labelText: string;
  /** children 요소 복사 */
  children: (props: ChildComponentProps) => ReactNode;
  /** 값을 외부(부모 컴포넌트)로 전달할 콜백 */
  onChange: (values: (string | number)[]) => void;
  /** 기본값 */
  defaultValue?: (string | number)[];
  vertical?: boolean;
}

const DynamicInputFields = ({
  labelText,
  children,
  onChange,
  defaultValue,
  vertical,
}: IDynamicInputFieldsProps) => {
  const {
    inputFields,
    handleAddInputFields,
    handleRemoveInputFields,
    handleResetInputFields,
    handleChangeField,
    isRemovable,
  } = useDynamicInputFields(defaultValue);

  // 변경된 값(inputFields)을 외부(부모 컴포넌트)에 반영
  useEffect(() => {
    onChange(inputFields);
  }, [inputFields, onChange]);

  return (
    <LabeledContainer
      labelText={
        <Styled.ButtonsWrapper>
          <span>{labelText}</span>
          <div>
            <SquareButton
              size="xsmall"
              type="button"
              variant="outline"
              onClick={handleResetInputFields}
              wide
            >
              <span className="icon">
                <ArrowPathIcon />
              </span>
              초기화
            </SquareButton>
            <SquareButton size="xsmall" type="button" onClick={handleAddInputFields} wide>
              <span className="icon">
                <PlusIcon />
              </span>
              추가
            </SquareButton>
          </div>
        </Styled.ButtonsWrapper>
      }
      {...(vertical ? { vertical: true } : { labelRatio: 1, contentRatio: 2 })}
      labelAlign="start"
    >
      <Styled.Container>
        <div className="children-inputs">
          {inputFields.map((value, index) => (
            <Styled.InputWrapper key={index}>
              <span style={{ fontSize: '1.3rem', width: '2rem', textAlign: 'center' }}>
                {index + 1}
              </span>
              {children({
                value,
                onChange: (value) => handleChangeField(value, index),
              })}
              {isRemovable(inputFields) && (
                <IconButton
                  size="small"
                  type="button"
                  className="xMarkIcon"
                  icon={<XMarkIcon />}
                  onClick={() => handleRemoveInputFields(index)}
                />
              )}
            </Styled.InputWrapper>
          ))}
        </div>
      </Styled.Container>
    </LabeledContainer>
  );
};

export default memo(DynamicInputFields);
