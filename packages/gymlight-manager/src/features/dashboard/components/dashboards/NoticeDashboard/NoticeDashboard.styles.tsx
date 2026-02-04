import styled from '@emotion/styled';
import { flexColumnStyle, flexStyle, styles } from '@/styles';

export const NoticeCard = styled.div`
  ${flexStyle};
  gap: ${styles.space.level2}rem;

  padding: ${styles.space.level3}rem;
  box-shadow: ${styles.shadow.light};
  border-radius: ${styles.borderRadius.normal}rem;
`;

export const NoticeDetails = styled.div`
  ${flexStyle};
  gap: ${styles.space.level2}rem;

  font-size: ${styles.fontSize.xsmall}rem;
  color: ${({ theme }) => theme.font.light};

  div {
    ${flexStyle};
    gap: ${styles.space.level1}rem;
  }

  svg {
    width: 1.4rem;
  }
`;

export const NoticeContent = styled.div`
  ${flexStyle};
  justify-content: space-between;
  width: 100%;
`;

export const NoticeTitle = styled.div`
  ${flexColumnStyle};
`;
