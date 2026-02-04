import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;

  width: 100%;
  overflow-y: auto;

  gap: ${styles.space.level1}rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: ${styles.space.level1}rem;

  border: 1px solid ${({ theme }) => theme.border.dark};
  background: ${({ theme }) => theme.background.light};
  border-radius: ${styles.borderRadius.normal}rem;

  & > img {
    display: block;
    height: 18rem;
    width: 24rem;
    background: gray;
  }
`;

export const Index = styled.div`
  font-size: ${styles.fontSize.large}rem;
  text-align: center;
  width: 4rem;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${styles.space.level5}rem ${styles.space.level2}rem;
  align-items: center;
  width: 100%;

  & > span:first-child {
    font-size: ${styles.fontSize.h5}rem;
    font-weight: ${styles.fontWeight.bold};
  }
`;
