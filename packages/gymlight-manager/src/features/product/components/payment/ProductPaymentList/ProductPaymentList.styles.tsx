import styled from '@emotion/styled';
import { SquareButton, styles } from 'gymlight-design-system';
import { darken } from 'polished';

export const SectionWrapper = styled.div`
  width: 34rem;
  height: 69rem;
  background: ${({ theme }) => theme.background.light};
  display: flex;
  flex-direction: column;
  padding: ${styles.space.level4}rem ${styles.space.level5}rem;

  position: relative;
`;

export const Title = styled.div`
  font-weight: ${styles.fontWeight.bold};
  padding: ${styles.space.level1}rem 0;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: calc(5 * 10rem + 4 * ${styles.space.level1}rem + 4 * 0.1rem); /* 자식 5개의 높이 + 간격 */
  overflow-y: scroll;
  margin: ${styles.space.level2}rem 0;

  display: flex;
  flex-direction: column;
  gap: ${styles.space.level1}rem;
  box-sizing: border-box;
`;

export const Item = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${styles.space.level4}rem;
  flex-shrink: 0;
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.border.dark};
  border-radius: ${styles.borderRadius.normal}rem;
  background: ${({ theme }) => darken(0.02, theme.background.light)};

  &:hover {
    background: ${({ theme }) => darken(0.08, theme.background.light)};
    ${styles.transition.button};
  }

  position: relative;

  .iconButton {
    position: absolute;
    right: ${styles.space.level1}rem;
    top: ${styles.space.level1}rem;
  }
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const ItemCores = styled.div`
  font-weight: ${styles.fontWeight.bold};
`;

export const ItemDetails = styled.span`
  color: ${({ theme }) => theme.font.light};
  font-size: ${styles.fontSize.small}rem;
`;

export const StyledButton = styled(SquareButton)`
  // position: absolute;
  // bottom: 0;
`;
