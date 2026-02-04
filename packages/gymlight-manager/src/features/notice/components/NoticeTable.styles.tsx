import { flexStyle } from '@/styles';
import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const NoticeTitle = styled.div`
  ${flexStyle};
  justify-content: space-between;
  width: 100%;
  padding: 0 ${styles.space.level3}em;

  .title {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
  font-size: ${styles.fontSize.small}rem;
  margin: ${styles.space.level2}rem 0;
`;
