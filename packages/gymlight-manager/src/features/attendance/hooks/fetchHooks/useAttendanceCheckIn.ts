import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';
import type { IErrorResponse, IAttendanceCheckRequest } from '@/types';
import { checkInAttendance } from '@/apis';
import { QUERIES } from '@/constants';

interface IUseCheckInAttendanceReturn {
  mutate: (variables: IAttendanceCheckRequest) => void;
}

export const useAttendanceCheckIn = (): IUseCheckInAttendanceReturn => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: checkInAttendance,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERIES.ATTENDANCE.LIST] });
      alert('출석 완료 되었습니다.');
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error.response?.data.message ?? '출석 등록 중 알 수 없는 오류가 발생했습니다.';
      alert(errorMessage || '출석 등록 중 알 수 없는 오류가 발생했습니다.');
    },
  });

  return { mutate };
};
