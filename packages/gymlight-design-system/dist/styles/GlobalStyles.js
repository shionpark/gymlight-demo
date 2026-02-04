"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const _1 = require(".");
const GlobalStyles = () => {
    const theme = (0, react_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_1.Global, { styles: (0, react_1.css) `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

        html {
          font-size: 62.5%;
        }

        body {
          margin: 0;
          font-size: 160%;
          letter-spacing: 0.05em;
          line-height: 1.7;
        }

        #root {
          min-height: 100vh;
        }

        * {
          &,
          &:before,
          &:after {
            box-sizing: border-box;
          }
        }

        body,
        button,
        input,
        textarea,
        select {
          font-family: ${_1.styles.fontFamily.kor};
        }

        a {
          color: ${theme.font.default};
          text-decoration: none;
        }

        h1 {
          font-size: ${_1.styles.fontSize.h1}rem;
        }

        h2 {
          font-size: ${_1.styles.fontSize.h2}rem;
        }

        h3 {
          font-size: ${_1.styles.fontSize.h3}rem;
        }

        h4 {
          font-size: ${_1.styles.fontSize.h4}rem;
        }

        h5 {
          font-size: ${_1.styles.fontSize.h5}rem;
        }

        h6 {
          font-size: ${_1.styles.fontSize.h6}rem;
        }

        small {
          color: ${theme.font.dark};
          font-size: ${_1.styles.fontSize.small}rem;
        }
      ` }));
};
exports.GlobalStyles = GlobalStyles;
