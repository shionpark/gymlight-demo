import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 34.2rem;
  border-radius: ${styles.borderRadius.normal}rem;
  background: ${({ theme }) => theme.background.light};
`;

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background: ${({ theme }) => theme.border.dark};
  padding: ${styles.space.level2}rem ${styles.space.level4}rem;
  border-top-left-radius: ${styles.borderRadius.normal}rem;
  border-top-right-radius: ${styles.borderRadius.normal}rem;

  position: relative;

  .more-button {
    position: absolute;
    right: ${styles.space.level2}rem;
    top: ${styles.space.level2}rem;
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
  width: 100%;

  padding: ${styles.space.level1}rem;
  font-size: ${styles.fontSize.small}rem;
`;

export const ProfileImg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 12.8rem;
  height: 12.8rem;

  position: relative;

  img {
    width: inherit;
    border: 1.2px solid ${({ theme }) => theme.border.default};
  }

  div {
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    opacity: 0.5;
    color: ${({ theme }) => theme.background.light};
    background: ${({ theme }) => theme.background.dark};
  }

  .timeline {
    font-size: ${styles.fontSize.xsmall}rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  gap: 0.1rem;
  padding: 0 ${styles.space.level3}rem;
`;

export const ProductButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: ${styles.space.level1}rem;
  padding: ${styles.space.level1}rem 0;
`;
