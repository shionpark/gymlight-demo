export const remToPx = 10;
export const pxToRem = 1 / remToPx;

export const BREAKPOINT_NAME = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

export const breakpoint = {
  [BREAKPOINT_NAME.DESKTOP]: 120,
  [BREAKPOINT_NAME.TABLET]: 76.8,
  [BREAKPOINT_NAME.MOBILE]: 36,
};

export const maxWidth = breakpoint[BREAKPOINT_NAME.DESKTOP];

export const responsive = {
  [BREAKPOINT_NAME.TABLET]: `@media (max-width: ${
    (breakpoint?.[BREAKPOINT_NAME.DESKTOP] ?? 0) * remToPx - 1
  }px) and (min-width: ${(breakpoint?.[BREAKPOINT_NAME.TABLET] ?? 0) * remToPx}px)`,

  [BREAKPOINT_NAME.MOBILE]: `@media (max-width: ${
    (breakpoint?.[BREAKPOINT_NAME.TABLET] ?? 0) * remToPx - 1
  }px)`,
};

export const grid = {
  column: 12,
  gutter: 2.4,
  rowGap: 6.4,
};

export const fontSize = {
  h1: 4.8,
  h2: 4,
  h3: 2.8,
  h4: 2.4,
  h5: 2,
  h6: 1.6,
  large: 1.8,
  normal: 1.6,
  small: 1.4,
  xsmall: 1.2,
};

export const border = {
  level1: 0.1,
  level2: 0.2,
};

export const borderRadius = {
  normal: 1,
  round: 999,
};

export const fontFamily = {
  kor: 'Noto Sans KR',
  eng: 'Playfair Display',
};

export const space = {
  level1: 0.4,
  level2: 0.8,
  level3: 1.2,
  level4: 1.6,
  level5: 2.4,
  level6: 2.8,
  level7: 3.2,
  level8: 3.6,
  level9: 4,
};

export const fontWeight = {
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
  black: 900,
};

export const component = {
  header: {
    height: 6.4,
  },
  sidebar: {
    width: 22,
    isFold: 7.2,
  },
};

export const tableCellWidth = {
  xxs: 3.5,
  checkbox: 3.5,
  xs: 7,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  auto: 'auto',
};

export const transition = {
  button: 'transition: all 0.15s ease-out;',
  sidebar: 'transition: all 0.3s ease-in-out;',
};

export const shadow = {
  light: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  bottom1: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  bottom2: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
  bottom3: 'rgba(0, 0, 0, 0.3) 0rem 0.25rem 0.375rem',
  broad1: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
  broad2: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
};

export const animation = {
  yaxis: 'transform: translateY(-5px);',
};
