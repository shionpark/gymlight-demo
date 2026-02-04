import { flexColumnStyle, styles } from '@/styles';
import styled from '@emotion/styled';
import { darken } from 'polished';

export const Wrapper = styled.div`
  ${flexColumnStyle};
  gap: ${styles.space.level2}rem;

  padding: ${styles.space.level3}rem;
  border-radius: ${styles.borderRadius.normal}rem;
  box-shadow: ${styles.shadow.light};

  &:hover {
    background: ${({ theme }) => darken(0.012, theme.background.light)};
    ${styles.transition.button};
  }
`;

export const NoticeHeader = styled.div`
  display: flex;
  gap: ${styles.space.level2}rem;
  align-items: start;
`;

export const NoticeTitle = styled.span`
  font-weight: ${styles.fontWeight.bold};
`;

export const NoticeContent = styled.span`
  font-size: ${styles.fontSize.small}rem;
  margin: 0 ${styles.space.level9}rem;
`;
