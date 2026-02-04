import { styles, Theme } from 'gymlight-design-system';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ProductCategoryType, ProductStatusType } from '@/types';

export const GridAndListContainer = styled.div`
  display: flex;
  height: 69rem;
`;

export const ListContainer = styled.div`
  margin-left: ${styles.space.level3}rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${styles.space.level2}rem;
  background: ${({ theme }) => theme.button.disabled};
  padding: ${styles.space.level2}rem;

  width: 100%;
  overflow-y: auto;
`;

export const GridItem = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${styles.space.level1}rem;
  padding-top: ${styles.space.level4}rem;

  background: white;
  border-radius: ${styles.borderRadius.small}rem;

  width: 20rem;
  height: 22rem;

  position: relative;

  cursor: pointer;

  ${({ checked, theme }) => {
    const outlineStyle = checked ? `2px solid ${theme.color.primary}` : '';
    return css`
      outline: ${outlineStyle};
      ${styles.transition.button};
    `;
  }};
`;

export type CategoryStatusType = ProductCategoryType | ProductStatusType;

const setStatusBackground = (categoryOrStatus: CategoryStatusType, theme: Theme) => {
  const colors: Record<CategoryStatusType, string> = {
    PT: theme.productColor.PT,
    운동복: theme.productColor.clothes,
    회원권: theme.productColor.membership,
    락커: theme.productColor.locker,
    패키지: theme.productColor.package,
    판매중: theme.memberStatus.active,
    판매중지: theme.memberStatus.expiredSoon,
    이벤트: theme.memberStatus.holding,
    삭제: theme.memberStatus.expired,
  };
  const backgroundColor = colors[categoryOrStatus as ProductCategoryType];
  return `
      ${backgroundColor}
    `;
};

export const AbsoluteWrapper = styled.div`
  position: absolute;
  left: ${styles.space.level1}rem;
  top: ${styles.space.level1}rem;
  display: flex;
  gap: ${styles.space.level1}rem;
`;

export const Category = styled.div<{ categoryOrStatus: CategoryStatusType }>`
  font-size: ${styles.fontSize.xsmall}rem;
  padding: ${styles.space.level1}rem ${styles.space.level2}rem;
  background: ${({ theme, categoryOrStatus }) =>
    setStatusBackground(categoryOrStatus, theme as unknown as Theme)};
  border-radius: ${styles.borderRadius.normal}rem;
`;

export const Status = styled.div<{ categoryOrStatus: CategoryStatusType }>`
  font-size: ${styles.fontSize.xsmall}rem;
  padding: ${styles.space.level1}rem ${styles.space.level2}rem;
  background: ${({ theme, categoryOrStatus }) =>
    setStatusBackground(categoryOrStatus, theme as unknown as Theme)};
  border-radius: ${styles.borderRadius.normal}rem;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  right: ${styles.space.level1}rem;
  top: ${styles.space.level1}rem;
`;

export const ProductName = styled.span`
  font-weight: ${styles.fontWeight.bold};
  margin-bottom: ${styles.space.level3}rem;
`;

export const ProductCard = styled.div`
  width: 100%;
  padding: 0 2rem;
  font-size: ${styles.fontSize.small}rem;
`;

export const Line = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border.dark};
  margin: 1rem 0;
  width: 100%;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;
`;

export const ProductGridForRegisterMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
