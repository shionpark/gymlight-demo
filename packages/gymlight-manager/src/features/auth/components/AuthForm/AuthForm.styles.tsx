import styled from '@emotion/styled';

import { styles } from 'gymlight-design-system';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 1.2rem;
`;

export const AuthTitle = styled.h2`
  margin: 0 0 3.2rem 0;

  line-height: 140%;

  text-align: center;

  font-family: ${styles.fontFamily.kor};
`;
