import styled from '@emotion/styled';

import { styles } from 'gymlight-design-system';

export const AuthCheckboxContainer = styled.div`
  height: 2.8rem;

  display: flex;
  align-items: center;

  input {
    margin: 0;
  }
`;

const CHECKBOX_SIZE = 1.6;
export const StyledCheckbox = styled.input`
  width: ${CHECKBOX_SIZE}rem;
  height: ${CHECKBOX_SIZE}rem;

  border-radius: 0;
`;

export const StyledLabel = styled.label`
  margin-left: 1rem;

  font-size: ${styles.fontSize.small}rem;
`;
