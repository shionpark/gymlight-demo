import { useEffect, useMemo, useState } from 'react';

import {
  usePtIncentiveRateWithoutMembershipPoint,
  useUpdatePtIncentiveRateWithoutMembershipPoint,
} from '@/features/accounting';
import { IPtIncentiveRateWithoutMembershipPointResponse } from '@/types';

export const usePtIncentiveRateWithoutMembershipPointTable = () => {
  const { mutate: update } = useUpdatePtIncentiveRateWithoutMembershipPoint();
  const { data: ptIncentiveDataList } = usePtIncentiveRateWithoutMembershipPoint();

  /** 데이터를 state에 보관하기 쉽게 변경 */
  const initializeState = (
    dataList: IPtIncentiveRateWithoutMembershipPointResponse[],
  ): Record<number, IPtIncentiveRateWithoutMembershipPointResponse> => {
    return dataList.reduce(
      (acc, item) => {
        acc[item.ptIncentiveRateWithoutMembershipPointId] = item;
        return acc;
      },
      {} as Record<number, IPtIncentiveRateWithoutMembershipPointResponse>,
    );
  };

  const dataObj = initializeState(ptIncentiveDataList ? ptIncentiveDataList : []);

  const [formData, setFormData] = useState(() => dataObj);

  useEffect(() => {
    if (ptIncentiveDataList) {
      setFormData(initializeState(ptIncentiveDataList));
    }
  }, [ptIncentiveDataList]);
  /** InputChange: 여러 Input중 target을 변경 */
  const handleInputChange =
    (id: number, field: keyof IPtIncentiveRateWithoutMembershipPointResponse) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setFormData((prev) => ({
        ...prev,
        [id]: { ...prev[id], [field]: value },
      }));
    };

  // 업데이트 버튼 핸들러
  const handleUpdateClick = (id: number) => () => {
    const { ptIncentiveRecognitionRate, ptRevenue } = formData[id];
    update({
      ptIncentiveRateWithoutMembershipPointId: id,

      ptIncentiveRecognitionRate,
      ptRevenue,
    });
  };

  // 인풋과 버튼을 묶어서 반환
  const formElementsProps = useMemo(
    () =>
      Object.values(formData).map((item) => ({
        id: item.ptIncentiveRateWithoutMembershipPointId,
        inputs: {
          ptIncentiveRecognitionRate: {
            value: item.ptIncentiveRecognitionRate,
            onChange: handleInputChange(
              item.ptIncentiveRateWithoutMembershipPointId,
              'ptIncentiveRecognitionRate',
            ),
          },
          ptRevenue: {
            value: item.ptRevenue,
            onChange: handleInputChange(item.ptIncentiveRateWithoutMembershipPointId, 'ptRevenue'),
          },
        },
        button: {
          onClick: handleUpdateClick(item.ptIncentiveRateWithoutMembershipPointId),
        },
      })),
    [formData],
  );

  return {
    formElementsProps,
  };
};
