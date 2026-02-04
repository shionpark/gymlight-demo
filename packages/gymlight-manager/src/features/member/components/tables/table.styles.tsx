import styled from '@emotion/styled';
import { styles, type Theme } from 'gymlight-design-system';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 3rem;

  .left-section {
    gap: 0rem 1rem;
  }

  .top-menu .left-section button {
    width: 8rem;
  }
`;
export const TopPanel = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
`;

const setStatusBackground = (
  status: '활성' | '만료예정' | '홀딩' | 'PT' | '운동복' | '락커' | '회원권',
  theme: Theme,
) => {
  const colors = {
    활성: theme.memberStatus.active,
    만료예정: theme.memberStatus.expiredSoon,
    홀딩: theme.memberStatus.holding,
    PT: theme.productColor.PT,
    운동복: theme.productColor.clothes,
    회원권: theme.productColor.membership,
    락커: theme.productColor.locker,
  };
  const backgroundColor = colors[status];
  return `
      ${backgroundColor}
    `;
};

export const MemberStatus = styled.div<{
  status: '활성' | '만료예정' | '홀딩' | 'PT' | '운동복' | '락커' | '회원권';
}>`
  width: 7rem;
  height: 2.1rem;
  border-radius: ${styles.borderRadius.small}rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ status, theme }) =>
    setStatusBackground(status, theme as unknown as Theme)};
  font-size: ${styles.fontSize.small}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const ProductStatus = styled.div<{
  status: '활성' | '만료예정' | '홀딩' | 'PT' | '운동복' | '락커' | '회원권';
}>`
  width: 5rem;
  height: 2.1rem;
  border-radius: ${styles.borderRadius.small}rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ status, theme }) =>
    setStatusBackground(status, theme as unknown as Theme)};
  font-size: ${styles.fontSize.xsmall}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const DateAndTime = styled.pre`
  font-family: inherit;
  height: 3.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
