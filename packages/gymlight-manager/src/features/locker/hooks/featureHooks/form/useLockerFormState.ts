import { useEffect, useState } from 'react';

import type { ILockerDetailResponse, IMemberDetailsResponse } from '@/types';

export interface LockerAssignFormState {
  memberName?: string;
  password: string;
  memo: string;
  startDate?: string;
  endDate?: string;
}

interface UseLockerAssignFormStateProps {
  selectedMemberData?: IMemberDetailsResponse;
  activeLockerDetails?: ILockerDetailResponse;
}

export const useLockerAssignFormState = ({
  selectedMemberData,
  activeLockerDetails,
}: UseLockerAssignFormStateProps) => {
  const [lockerAssignFormState, setLockerAssignFormState] = useState<LockerAssignFormState>({
    memberName: '',
    password: '',
    memo: '',
    startDate: '',
    endDate: '',
  });

  const handleLockerAssignFormState = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const {
      target: { name, value },
    } = e;
    setLockerAssignFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!selectedMemberData) {
      setLockerAssignFormState({
        memberName: '',
        password: '',
        memo: '',
        startDate: '',
        endDate: '',
      });
    }

    const isLockerAssigned = !!activeLockerDetails?.memberId;
    const member = selectedMemberData?.member;

    setLockerAssignFormState({
      memberName: isLockerAssigned ? (activeLockerDetails?.memberName ?? '') : (member?.name ?? ''),
      password: activeLockerDetails?.password ?? '',
      memo: activeLockerDetails?.memo ?? '',
      startDate:
        activeLockerDetails?.startDate && activeLockerDetails.startDate !== 'N/A'
          ? activeLockerDetails.startDate
          : (member?.startDate ?? ''),
      endDate:
        activeLockerDetails?.endDate && activeLockerDetails.endDate !== 'N/A'
          ? activeLockerDetails.endDate
          : (member?.endDate ?? ''),
    });
  }, [activeLockerDetails, selectedMemberData]);

  return {
    lockerAssignFormState,
    changeLockerAssignFormState: handleLockerAssignFormState,
  };
};
