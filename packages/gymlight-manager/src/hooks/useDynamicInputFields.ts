import { useState } from 'react';

export interface UseDynamicInputFieldsReturn {
  /** input 필드 배열 */
  inputFields: (string | number)[];

  /** 버튼 클릭 시 새로운 input 필드를 추가하는 함수 */
  handleAddInputFields: () => void;

  /** 해당 인덱스의 input 필드 제거 */
  handleRemoveInputFields: (index: number) => void;

  /** 모든 input 필드를 초기화 (빈 배열로 초기화) */
  handleResetInputFields: () => void;

  /** 특정 인덱스의 값을 변경하는 함수 */
  handleChangeField: (value: string | number, index: number) => void;

  /** input 필드가 2개 이상이므로 삭제할 수 있는 상태인지 여부 */
  isRemovable: (inputFields: (string | number)[]) => boolean;
}

export const useDynamicInputFields = (
  defaultValues?: (string | number)[],
): UseDynamicInputFieldsReturn => {
  const [inputFields, setInputFields] = useState<(string | number)[]>(defaultValues || ['']);

  const handleAddInputFields = () => {
    setInputFields((prevInputs) => [...prevInputs, '']);
  };

  const handleRemoveInputFields = (index: number) => {
    if (!inputFields[index] || confirm('팀원을 삭제하시겠습니까?')) {
      setInputFields((prevInputs) => prevInputs.filter((_, i) => i !== index));
    }
  };

  const handleResetInputFields = () => {
    if (confirm('초기화 하시겠습니까?')) {
      setInputFields(['']);
    }
  };

  const handleChangeField = (value: string | number, index: number) => {
    setInputFields((prev) => {
      const newFields = [...prev];
      newFields[index] = value;
      return newFields;
    });
  };

  const isRemovable = (inputFields: (string | number)[]): boolean => inputFields.length > 1;

  return {
    inputFields,
    handleAddInputFields,
    handleRemoveInputFields,
    handleResetInputFields,
    handleChangeField,
    isRemovable,
  };
};
