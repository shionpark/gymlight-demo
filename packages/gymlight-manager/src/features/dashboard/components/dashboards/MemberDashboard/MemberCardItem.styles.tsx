import styled from '@emotion/styled';

import { flexColumnStyle, flexStyle, styles } from '@/styles';

export const CardWrapper = styled.div<{ backgroundColor: string; iconColor: string }>`
  ${flexColumnStyle};

  gap: ${styles.space.level1}rem;
  width: 20rem;
  height: 14rem;

  padding: ${styles.space.level4}rem;
  box-shadow: ${styles.shadow.light};
  border-radius: ${styles.borderRadius.normal}rem;

  background-color: ${({ backgroundColor }) => backgroundColor};

  & > svg {
    width: 2.2rem;
    stroke-width: 2;
    color: ${({ iconColor }) => iconColor};
  }
`;

export const DataCounts = styled.div`
  ${flexColumnStyle};

  span:first-child {
    fonpt-size: ${styles.fontSize.h5}rem;
    font-weight: ${styles.fontWeight.bold};
    margin-bottom: -${styles.space.level1}rem;
  }
`;

export const ComparedWrapper = styled.div`
  ${flexStyle};
  color: ${({ theme }) => theme.font.light};
  font-size: ${styles.fontSize.small}rem;
  gap: ${styles.space.level1}rem;
`;
