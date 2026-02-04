import { flexColumnStyle, styles } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';

export const Item = styled.div<{
  checked?: boolean;
  unAvailable?: boolean;
}>`
  height: 12rem;
  width: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${styles.fontSize.small}rem;
  border-radius: ${styles.borderRadius.normal}rem;

  position: relative;
  cursor: pointer;

  ${({ checked, unAvailable, theme }) => {
    const outlineStyle = checked ? `2px solid ${theme.color.primary}` : '';
    const background = unAvailable
      ? `${theme.background.light}`
      : `${darken(0.03, theme.color.lightGray)}`;
    const color = unAvailable ? `${theme.font.default}` : `${theme.color.white}`;
    return css`
      outline: ${outlineStyle};
      background: ${background};
      color: ${color};
      ${styles.transition.button};
    `;
  }};
`;

export const NumberWrapper = styled.span`
  position: absolute;

  top: ${styles.space.level1}rem;
  left: ${styles.space.level2}rem;

  font-size: ${styles.fontSize.normal}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const StatusWrapper = styled.div`
  position: absolute;

  top: ${styles.space.level1}rem;
  right: ${styles.space.level1}rem;
`;

export const Details = styled.div`
  ${flexColumnStyle};
  width: 100%;
  align-items: center;
  margin-top: ${styles.space.level1}rem;
`;

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: ${styles.fontSize.small}rem;
    min-width: ${styles.fontSize.small}rem;
    margin-right: ${styles.space.level1}rem;
  }
`;
