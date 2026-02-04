import { flexCenterStyle, flexStyle, styles } from '@/styles';
import styled from '@emotion/styled';
import { lighten } from 'polished';

export const LeftChildrenWrapper = styled.div`
  ${flexStyle};
  gap: ${styles.space.level3}rem;

  .not-hover {
    cursor: default;
  }
`;

export const Grade = styled.span`
  ${flexCenterStyle};

  width: 3rem;
  height: 3rem;
  text-align: center;
  white-space: nowrap;
  line-height: 3rem; /* height와 동일하게 설정 */

  color: ${({ theme }) => theme.color.white};
  border-radius: ${styles.borderRadius.round}rem;
  background: ${({ theme }) => lighten(0.6, theme.background.dark)};
  box-shadow: ${styles.shadow.bottom1};
`;

export const Sales = styled.div`
  .trainer-sales {
    font-weight: ${styles.fontWeight.bold};
  }
`;
