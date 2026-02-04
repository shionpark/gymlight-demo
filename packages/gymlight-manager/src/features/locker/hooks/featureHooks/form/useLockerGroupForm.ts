import { useCallback, useMemo, useState } from 'react';

import type { LockerDirectionType } from '@/types';

/**
 * 락커 그룹 생성 모달의 폼 입력값을 관리하기 위한 커스텀 훅
 *
 * 실시간으로 값을 업데이트 하기 위해 ref 대신 state로 상태를 관리함
 *
 */

interface LockerGroupFormType {
  name: string;
  rowsInput: number;
  columnsInput: number;
  quantity: number;
  direction: LockerDirectionType;
  startNumber: number;
}

export const useLockerGroupForm = (lastLockerItemNumber: number) => {
  const [lockerGroupFormState, setLockerGroupFormState] = useState<LockerGroupFormType>({
    name: '',
    rowsInput: 1,
    columnsInput: 1,
    quantity: 0,
    direction: '가로',
    startNumber: (lastLockerItemNumber ?? 0) + 1,
  } as LockerGroupFormType);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { direction, quantity, rowsInput, columnsInput } = lockerGroupFormState;

  const isHorizontal = useMemo(() => direction === '가로', [direction]);

  const rows = useMemo(
    () => (!isHorizontal ? rowsInput : Math.ceil(quantity / columnsInput)),
    [direction, columnsInput, rowsInput, quantity],
  );

  const columns = useMemo(
    () => (isHorizontal ? columnsInput : Math.ceil(quantity / rowsInput)),
    [direction, columnsInput, rowsInput, quantity],
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setLockerGroupFormState((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setLockerGroupFormState((prev) => ({
      ...prev,
      [name]: +value,
    }));
  };

  const handleDirectionChange = useCallback((direction: LockerDirectionType) => {
    setLockerGroupFormState((prev) => ({ ...prev, direction }));
  }, []);

  const resetColumnAndRow = useCallback(
    () => setLockerGroupFormState((prev) => ({ ...prev, rows: 1, columns: 1 })),
    [],
  );

  const handleErrorMessage = (errorMessage: string) => {
    if (errorMessage === '해당 락커 그룹에 대한 락커의 시작 번호가 올바르지 않습니다.') {
      setErrorMessage(`${errorMessage}\n 최소 ${lastLockerItemNumber + 1} 이상이어야 합니다.`);
    } else {
      setErrorMessage(errorMessage);
    }
  };

  return {
    name: lockerGroupFormState.name,
    direction: lockerGroupFormState.direction,
    startNumber: lockerGroupFormState.startNumber,
    quantity: lockerGroupFormState.quantity,
    isHorizontal,
    rows,
    columns,
    handleNameChange,
    handleNumberChange,
    handleDirectionChange,
    resetColumnAndRow,

    errorMessage,
    handleErrorMessage,
  };
};
