import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${styles.fontSize.small}rem;
  color: ${({ theme }) => theme.font.default};
  padding: ${styles.space.level2}rem ${styles.space.level2}rem;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.background.default};
    ${styles.transition.button};
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: ${styles.space.level2}rem;
  }
`;
