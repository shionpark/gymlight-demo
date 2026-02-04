import styled from '@emotion/styled';

import { styles } from '@/styles';

export const DateSelectContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: ${styles.space.level2}rem;
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles.fontSize.small}rem;
`;
