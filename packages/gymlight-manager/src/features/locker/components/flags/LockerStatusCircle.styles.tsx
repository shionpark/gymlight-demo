import { Theme } from 'gymlight-design-system';

import styled from '@emotion/styled';
import { styles } from '@/styles';
import type { LockerStatusType } from '@/types';

const setStatusBackground = (status: LockerStatusType, theme: Theme) => {
  const colors: Record<LockerStatusType, string> = {
    '사용 가능': theme.memberStatus.active,
    '사용 중': theme.memberStatus.expired,
    '예약 중': theme.memberStatus.expiredSoon,
    파손: theme.memberStatus.holding,
  };
  const backgroundColor = colors[status as LockerStatusType];
  return `
        ${backgroundColor}
      `;
};

export const StatusCircle = styled.div<{ status: LockerStatusType }>`
  width: 1rem;
  height: 1rem;
  border-radius: ${styles.borderRadius.round}rem;
  margin-right: ${styles.space.level1}rem;
  background: ${({ status, theme }) => setStatusBackground(status, theme as unknown as Theme)};
`;
