import { css, Theme } from '@emotion/react';
import { styles } from '..';

const borderPadding = styles.space.level4;

export const boxStyles = (theme: Theme) => css`
  padding: 1.4rem 2rem;
  border-radius: 1rem;
  box-shadow: ${styles.shadow.light};
  background: ${theme.background.light};

  .title {
    color: ${theme.font.default};
    font-size: ${styles.fontSize.large}rem;
    font-weight: ${styles.fontWeight.bold};

    padding: 0 ${borderPadding}rem;
    padding-bottom: ${borderPadding / 2}rem;
    margin-bottom: ${borderPadding}rem;
    border-bottom: 1px solid ${theme.border.default};
    width: inherit;
  }
`;

export const activeStyle = css`
  font-size: ${styles.fontSize.xsmall}rem;
  color: white;
  padding: 0.2rem 0.6rem;
  background: green;
  border-radius: 1rem;
`;
