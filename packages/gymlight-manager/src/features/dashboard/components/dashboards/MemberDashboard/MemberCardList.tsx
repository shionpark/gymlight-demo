import { lazy, Suspense } from 'react';
import { LoadingFallback } from 'gymlight-design-system';

import type { IMemberDashboardResponse } from '@/types';

const MemberCardItem = lazy(() => import('./MemberCardItem'));

interface IMemberDashboardResponseWithIndex extends IMemberDashboardResponse {
  [key: string]: string | number;
}

interface IMemberCardListProps {
  dataLabels: Record<string, string>;
  memberData: IMemberDashboardResponse;
}

const MemberCardList = ({ dataLabels, memberData }: IMemberCardListProps) => {
  return (
    <>
      {Object.entries(dataLabels).map(([key, label]) => (
        <Suspense key={key} fallback={<LoadingFallback />}>
          <MemberCardItem
            label={label as string}
            counts={(memberData as IMemberDashboardResponseWithIndex)[key] || 0} // 기본값 처리
          />
        </Suspense>
      ))}
    </>
  );
};

export default MemberCardList;
