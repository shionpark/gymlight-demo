import styled from '@emotion/styled';
import { SquareButton } from 'gymlight-design-system';

import { flexCenterStyle, flexStyle, styles } from '@/styles';

export const GridItem = styled.div`
  ${flexCenterStyle};
  flex-direction: column;

  min-width: 18rem;
  height: 20rem;
  padding: ${styles.space.level1}rem;
  padding-top: ${styles.space.level3}rem;

  box-shadow: ${styles.shadow.bottom1};
  border-radius: ${styles.borderRadius.normal}rem;
  background: ${({ theme }) => theme.background.light};

  cursor: pointer;
  position: relative;

  &:hover {
    ${styles.animation.yaxis};
    transition: transform 0.3s ease;
  }
`;

const absolutePaddingSize = `${styles.space.level1}`;

export const AbsoluteWrapper = styled.div`
  position: absolute;
  ${flexStyle};
  justify-content: space-between;

  left: ${absolutePaddingSize}rem;
  top: ${absolutePaddingSize}rem;
  gap: ${absolutePaddingSize}rem;
`;

export const DropdownWrapper = styled.div`
  position: absolute;

  right: ${absolutePaddingSize}rem;
  top: ${absolutePaddingSize}rem;
`;

export const ProductName = styled.span`
  max-width: 18rem;
  text-align: center;
  font-weight: ${styles.fontWeight.bold};
  margin-bottom: ${styles.space.level2}rem;
`;

export const ProductCard = styled.div`
  width: 100%;
  padding: 0 2rem;
  font-size: ${styles.fontSize.small - 0.1}rem;
`;

export const Line = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border.dark};
  margin: 1rem 0;
  width: 100%;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

export const PlusUserButton = styled(SquareButton)`
  width: 6rem;
  // height: 10rem;
  box-shadow: ${styles.shadow.broad1};
`;
