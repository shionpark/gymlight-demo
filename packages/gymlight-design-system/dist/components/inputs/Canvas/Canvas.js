"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const Canvas_styles_1 = require("./Canvas.styles");
const Canvas = (0, react_1.forwardRef)((props, ref) => {
    return (0, jsx_runtime_1.jsx)(Canvas_styles_1.StyledCanvas, Object.assign({}, props, { ref: ref }));
});
exports.default = Canvas;
