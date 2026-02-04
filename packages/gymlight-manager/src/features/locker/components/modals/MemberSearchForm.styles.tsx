import styled from '@emotion/styled';
import { lighten } from 'polished';
import { flexColumnStyle, flexStyle, styles } from '@/styles';

export const Wrapper = styled.div`
  ${flexColumnStyle}// gap:${styles.space.level6}rem;
`;

export const SearchSection = styled.div`
  ${flexColumnStyle};
  margin-top: ${styles.space.level2}rem;
`;

export const DataCounts = styled.span`
  ${flexStyle};

  font-size: ${styles.fontSize.small}rem;
  color: ${({ theme }) => theme.font.light};
`;

export const SearchResultList = styled.div`
  ${flexColumnStyle}
  gap: ${styles.space.level2}rem;

  max-height: 36rem;
  overflow: auto;

  margin-bottom: ${styles.space.level1}rem;
`;

export const Result = styled.div`
  ${flexStyle};
  justify-content: space-between;

  background: ${({ theme }) => theme.border.default};
  border-radius: ${styles.borderRadius.normal}rem;
  padding: ${styles.space.level2}rem;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => lighten(0.03, theme.border.default)};
    ${styles.transition.button};
  }
`;

export const FlexContainer = styled.div`
  ${flexStyle}

  & > img {
    width: 5rem;
    height: 5rem;

    border: 1px solid ${({ theme }) => theme.border.light};
    border-radius: ${styles.borderRadius.round}rem;
  }
`;

export const FlexVerticalContainer = styled.div`
  ${flexColumnStyle}
  margin-left: ${styles.space.level3}rem;

  .name {
    font-weight: ${styles.fontWeight.bold};
  }

  .details {
    font-size: ${styles.fontSize.small}rem;
    color: ${({ theme }) => theme.font.light};
  }
`;
