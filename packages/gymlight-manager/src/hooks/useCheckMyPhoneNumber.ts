import { type ChangeEvent, useState } from 'react';

import { useMe } from '@/features/auth';

type UseCheckMyPhoneNumberReturnType = {
  /** 입력 필드의 전화번호 상태 값 */
  phoneNumber: string;

  /** 전화번호 입력 필드 변경 핸들러 */
  handleChangePhoneNumberInput: (event: ChangeEvent<HTMLInputElement>) => void;

  /** 로그인한 계정의 전화번호와 사용자가 입력한 전화번호가 동일한지 확인 */
  handleCheckIsCorrectPhoneNumber: () => void;

  /** 전화번호가 올바르게 확인되었는지 여부 */
  isCorrectlyAware: boolean;
};
export const useCheckMyPhoneNumber = (): UseCheckMyPhoneNumberReturnType => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCorrectlyAware, setIsCorrectlyAware] = useState(false);

  const handleChangePhoneNumberInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const { data: userData } = useMe();
  const currentPhoneNumber = userData?.phone;

  const handleCheckIsCorrectPhoneNumber = () => {
    const removeDash = (phoneNumber: string) => phoneNumber.split('-').join('');

    if (!currentPhoneNumber) {
      alert('등록된 전화번호를 읽어올 수 없습니다.');
      return;
    }

    const submittedPhoneNumber = removeDash(phoneNumber);
    const registeredPhoneNumber = removeDash(currentPhoneNumber);

    if (submittedPhoneNumber === registeredPhoneNumber) {
      setIsCorrectlyAware(true);
    } else {
      alert('계정에 등록된 전화번호와 다릅니다.');
    }
  };

  return {
    phoneNumber,
    handleChangePhoneNumberInput,
    handleCheckIsCorrectPhoneNumber,
    isCorrectlyAware,
  };
};
