import { styles } from 'gymlight-design-system';
import styled from '@emotion/styled';

import { flexStyle } from '@/styles';

export const TeamDetails = styled.div`
  display: flex;
  gap: ${styles.space.level2}rem;
  font-size: ${styles.fontSize.small}rem;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${styles.space.level1}rem ${styles.space.level2}rem;

    border-radius: ${styles.borderRadius.normal}rem;
    background: ${({ theme }) => theme.background.light};
    user-select: none;
    color: ${({ theme }) => theme.font.light};
    box-shadow: ${styles.shadow.light};

    & > svg {
      width: 1.4rem;
      margin-right: 0.4rem;
    }
  }
`;

export const TeamStaffDetails = styled.div`
  ${flexStyle};
  gap: ${styles.space.level2}rem;
  font-size: ${styles.fontSize.small}rem;
`;

export const FlexContainer = styled.div`
  ${flexStyle}
  gap: ${styles.space.level1}rem;
`;
