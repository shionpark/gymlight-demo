import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  background: ${({ theme }) => theme.background.light};
  border-radius: ${styles.borderRadius.normal}rem;

  box-shadow: ${styles.shadow.broad1};

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    margin-left: -15px;
    margin-bottom: -15px;
  }
`;

export const Name = styled.span`
  display: flex;
  align-items: center;

  width: 100%;
  background: ${({ theme }) => theme.background.default};
  padding: ${styles.space.level2}rem ${styles.space.level4}rem;
  border-top-left-radius: ${styles.borderRadius.normal}rem;
  border-top-right-radius: ${styles.borderRadius.normal}rem;

  z-index: 0;
  position: relative;

  .close-button {
    position: absolute;
    right: ${styles.space.level1}rem;
    top: ${styles.space.level1}rem;
    z-index: 100;
  }

  & > span {
    font-weight: ${styles.fontWeight.bold};
    margin-right: ${styles.space.level1}rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
  padding: ${styles.space.level3}rem;
  font-size: ${styles.fontSize.xsmall}rem;

  img {
    width: 8rem;
    height: 8rem;
    border: 1.2px solid ${({ theme }) => theme.border.default};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: ${styles.space.level1}rem ${styles.space.level2}rem;
`;
