import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${styles.space.level6}rem;
  background: ${({ theme }) => theme.background.light};
  overflow-y: auto;
  border-radius: 0.4rem;

  & > .iconButton {
    position: absolute;
    top: 8rem;
    right: 8rem;
  }

  h2 {
    font-size: ${styles.fontSize.h5}rem;
    font-weight: ${styles.fontWeight.bold};
    margin-bottom: ${styles.space.level7}rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${styles.space.level3}rem;
  }
`;
