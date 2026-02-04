import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { darken } from 'polished';

import { flexCenterStyle, flexStyle, styles } from '@/styles';

export const Wrapper = styled.div`
  width: 100%;
  padding: ${styles.space.level3}rem ${styles.space.level5}rem;

  border: 1px solid ${({ theme }) => darken(0.04, theme.border.default)};
  border-radius: ${styles.borderRadius.normal}rem;
  background: ${({ theme }) => theme.background.light};
`;

const paddingSize = styles.space.level2;

export const TopSection = styled.div`
  ${flexStyle};
  justify-content: space-between;

  width: 100%;
  padding: ${paddingSize}rem;
`;

export const Border = styled.div`
  height: 0.1rem;
  background: ${({ theme }) => theme.border.default};
  margin: ${styles.space.level1}rem 0;
`;

export const MainSection = styled.section`
  padding: ${paddingSize}rem;
`;

export const StyledLink = styled(Link)`
  ${flexCenterStyle};
  font-size: ${styles.fontSize.small}rem;
  color: ${({ theme }) => theme.font.light};
  height: 3.2rem;

  ${styles.transition.button};
`;

export const Title = styled.div`
  ${flexStyle};
  gap: ${styles.space.level3}rem;

  font-size: ${styles.fontSize.large}rem;
  font-weight: ${styles.fontWeight.bold};
  color: ${({ theme }) => theme.font.default};
`;
