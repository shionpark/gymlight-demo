import { useState } from 'react';

import { NumPadButtonType } from '../components/NumPad/NumPad';

import { BackspaceIcon, TrashIcon } from '@heroicons/react/24/outline';

interface IUseNumPad {
  /** 입력한 번호 */
  digitState: string;

  /** 현재 입력 번호로 취하는 액션 핸들러 함수 */
  handleNumPadAction: ({ label, icon }: NumPadButtonType) => void;

  /** 전체 입력 번호를 초기화하는 함수 */
  clearAllDigit: () => void;

  /** 4개의 모든 번호 입력을 완료했는지 여부 */
  isAllDigitClicked: boolean;

  /** 입력한 번호의 바로 다음 인덱스 판별하는 함수 */
  isNextDigit: (index: number) => boolean;
}

/**
 * 숫자패드(NumPad) 입력 값을 관리하는 훅
 *
 */

export const useNumPad = (): IUseNumPad => {
  const [digitState, setDigitState] = useState<string>('');

  const appendDigit = (digit: string) => {
    if (digitState.length < 4) {
      setDigitState((prev) => prev + digit);
    }
  };

  const removeLastDigit = () => {
    setDigitState((prev) => prev.slice(0, -1));
  };

  const clearAllDigit = () => {
    setDigitState('');
  };

  const handleNumPadAction = ({ label, icon }: NumPadButtonType) => {
    if (icon === TrashIcon) {
      clearAllDigit();
    } else if (icon === BackspaceIcon) {
      removeLastDigit();
    } else {
      appendDigit(label);
    }
  };

  const isAllDigitClicked = digitState.length === 4;

  const isNextDigit = (index: number) => {
    return index === digitState.length;
  };

  return {
    digitState,
    handleNumPadAction,

    isNextDigit,
    clearAllDigit,

    isAllDigitClicked,
  };
};
