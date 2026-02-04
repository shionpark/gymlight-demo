import styled from '@emotion/styled';
import type { Theme } from 'gymlight-design-system';
import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.background.light};
  height: 9rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProductCategory = styled.div`
  width: 8.4rem;
  height: 6.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PaidProduct = styled.div`
  width: 17.9rem;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductName = styled.span`
  font-size: ${styles.fontSize.large}rem;
`;

export const PaidUsage = styled.span`
  font-size: ${styles.fontSize.small}rem;
`;

const setStatusBackground = (producStatus: '이용중' | '만료예정' | '홀딩', theme: Theme) => {
  const colors = {
    이용중: theme.memberStatus.active,
    만료예정: theme.memberStatus.expiredSoon,
    홀딩: theme.memberStatus.holding,
  };
  const backgroundColor = colors[producStatus];
  return `
    ${backgroundColor}
  `;
};

export const Status = styled.div<{ productStatus: '이용중' | '만료예정' | '홀딩' }>`
  width: 6rem;
  height: 2.1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ productStatus, theme }) =>
    setStatusBackground(productStatus, theme as unknown as Theme)};
  font-size: ${styles.fontSize.xsmall}rem;
  font-weight: ${styles.fontWeight.bold};

  border-radius: ${styles.borderRadius.small}rem;
`;

export const RemainingAmountGraph = styled.div`
  width: 39rem;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
`;
export const GraphText = styled.span`
  font-size: ${styles.fontSize.small}rem;
`;

export const RemainingAmountText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 3rem;
  font-size: ${styles.fontSize.h5}rem;
`;
