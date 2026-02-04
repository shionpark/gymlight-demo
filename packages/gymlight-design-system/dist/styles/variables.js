"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadow = exports.transition = exports.tableCellWidth = exports.component = exports.fontWeight = exports.space = exports.fontFamily = exports.borderRadius = exports.border = exports.fontSize = exports.grid = exports.responsive = exports.maxWidth = exports.breakpoint = exports.BREAKPOINT_NAME = exports.pxToRem = exports.remToPx = void 0;
exports.remToPx = 10;
exports.pxToRem = 1 / exports.remToPx;
exports.BREAKPOINT_NAME = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile',
};
exports.breakpoint = {
    [exports.BREAKPOINT_NAME.DESKTOP]: 120,
    [exports.BREAKPOINT_NAME.TABLET]: 76.8,
    [exports.BREAKPOINT_NAME.MOBILE]: 36,
};
exports.maxWidth = exports.breakpoint[exports.BREAKPOINT_NAME.DESKTOP];
exports.responsive = {
    [exports.BREAKPOINT_NAME.TABLET]: `@media (max-width: ${((_a = exports.breakpoint === null || exports.breakpoint === void 0 ? void 0 : exports.breakpoint[exports.BREAKPOINT_NAME.DESKTOP]) !== null && _a !== void 0 ? _a : 0) * exports.remToPx - 1}px) and (min-width: ${((_b = exports.breakpoint === null || exports.breakpoint === void 0 ? void 0 : exports.breakpoint[exports.BREAKPOINT_NAME.TABLET]) !== null && _b !== void 0 ? _b : 0) * exports.remToPx}px)`,
    [exports.BREAKPOINT_NAME.MOBILE]: `@media (max-width: ${((_c = exports.breakpoint === null || exports.breakpoint === void 0 ? void 0 : exports.breakpoint[exports.BREAKPOINT_NAME.TABLET]) !== null && _c !== void 0 ? _c : 0) * exports.remToPx - 1}px)`,
};
exports.grid = {
    column: 12,
    gutter: 2.4,
    rowGap: 6.4,
};
exports.fontSize = {
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
    xxsmall: 1.0,
};
exports.border = {
    level1: 0.1,
    level2: 0.2,
};
exports.borderRadius = {
    small: 0.5,
    normal: 1,
    round: 999,
};
exports.fontFamily = {
    kor: 'Noto Sans KR',
    eng: 'Playfair Display',
};
exports.space = {
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
exports.fontWeight = {
    light: 300,
    regular: 400,
    bold: 700,
    black: 900,
};
exports.component = {
    header: {
        height: 5.6,
    },
    sidebar: {
        width: 20,
        isFold: 7.2,
    },
};
exports.tableCellWidth = {
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
exports.transition = {
    button: 'transition: all 0.15s ease-out;',
    sidebar: 'transition: all 0.15s ease-in-out;',
};
exports.shadow = {
    light: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    bottom1: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    bottom2: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    bottom3: 'rgba(0, 0, 0, 0.3) 0rem 0.25rem 0.375rem',
    broad1: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    broad2: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
};
