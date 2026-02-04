import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.span`
  & > button > svg {
    width: 2rem;
    margin-right: ${styles.space.level1}rem;
  }
`;

export const LabelWrapper = styled.span`
  white-space: nowrap;
`;
