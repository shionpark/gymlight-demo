import styled from '@emotion/styled';
import { flexStyle, styles } from '@/styles';
import { SquareButton } from 'gymlight-design-system';

export const UpdateDateSection = styled.div<{ isRefetching: boolean }>`
  ${flexStyle};
  gap: ${styles.space.level1}rem;

  svg {
    width: 1.4rem;
  }

  .updated-time {
    opacity: ${({ isRefetching }) => (isRefetching ? 0 : 1)};
  }
`;

export const Wrapper = styled.div`
  ${flexStyle};
  gap: ${styles.space.level4}rem;
  justify-content: space-between;
`;

export const PlusUserButton = styled(SquareButton)`
  width: 16rem;
  height: 10rem;
  box-shadow: ${styles.shadow.bottom1};
  gap: ${styles.space.level2}rem;
`;
