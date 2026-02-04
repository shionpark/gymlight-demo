import { useEffect, useMemo, useState } from 'react';

import {
  usePtIncentiveRateWithMembershipPoint,
  useUpdatePtIncentiveRateWithMembershipPoint,
} from '@/features/accounting';
import { IPtIncentiveRateWithMembershipPointResponse } from '@/types';

export const usePtIncentiveRateWithMembershipPointTable = () => {
  const { mutate: update } = useUpdatePtIncentiveRateWithMembershipPoint();
  const { data: ptIncentiveDataList } = usePtIncentiveRateWithMembershipPoint();
  /** initState */
  const initializeState = (
    dataList: IPtIncentiveRateWithMembershipPointResponse[],
  ): Record<number, IPtIncentiveRateWithMembershipPointResponse> => {
    return dataList.reduce(
      (acc, item) => {
        acc[item.ptIncentiveRateWithMembershipPointId] = item;
        return acc;
      },
      {} as Record<number, IPtIncentiveRateWithMembershipPointResponse>,
    );
  };

  const dataObj = initializeState(ptIncentiveDataList ?? []);
  useEffect(() => {
    if (ptIncentiveDataList) {
      setFormData(initializeState(ptIncentiveDataList));
    }
  }, [ptIncentiveDataList]);

  const [formData, setFormData] = useState(() => dataObj);

  const handleInputChange =
    (id: number, field: keyof IPtIncentiveRateWithMembershipPointResponse) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setFormData((prev) => ({
        ...prev,
        [id]: { ...prev[id], [field]: value },
      }));
    };

  // 업데이트 버튼 핸들러
  const handleUpdateClick = (id: number) => () => {
    const { membershipPoints, ptIncentiveRecognitionRate, ptRevenue } = formData[id];
    update({
      ptIncentiveRateWithMembershipPointId: id,
      membershipPoints,
      ptIncentiveRecognitionRate,
      ptRevenue,
    });
  };

  // 인풋과 버튼을 묶어서 반환
  const formElementsProps = useMemo(
    () =>
      Object.values(formData).map((item) => ({
        id: item.ptIncentiveRateWithMembershipPointId,
        inputs: {
          membershipPoints: {
            value: item.membershipPoints,
            onChange: handleInputChange(
              item.ptIncentiveRateWithMembershipPointId,
              'membershipPoints',
            ),
          },
          ptIncentiveRecognitionRate: {
            value: item.ptIncentiveRecognitionRate,
            onChange: handleInputChange(
              item.ptIncentiveRateWithMembershipPointId,
              'ptIncentiveRecognitionRate',
            ),
          },
          ptRevenue: {
            value: item.ptRevenue,
            onChange: handleInputChange(item.ptIncentiveRateWithMembershipPointId, 'ptRevenue'),
          },
        },
        button: {
          onClick: handleUpdateClick(item.ptIncentiveRateWithMembershipPointId),
        },
      })),
    [formData],
  );

  return {
    formElementsProps,
  };
};
