import { flexStyle } from '@/styles';
import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  ${flexStyle};
  gap: ${styles.space.level2}rem;
  font-size: ${styles.fontSize.small}rem;

  .section {
    ${flexStyle};
    gap: 0.2rem;

    & > svg {
      width: 1.4rem;
    }
  }
`;
