"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const Textarea_styles_1 = require("./Textarea.styles");
const Textarea = (0, react_1.forwardRef)((_a, ref) => {
    var { value, size = 'normal', errorMessage, isReadOnly, maxTextLength = 40 } = _a, rest = __rest(_a, ["value", "size", "errorMessage", "isReadOnly", "maxTextLength"]);
    const [textValue, setTextValue] = (0, react_1.useState)(value || '');
    const handleChange = (event) => {
        setTextValue(event.target.value);
        if (rest.onChange)
            rest.onChange(event);
    };
    return ((0, jsx_runtime_1.jsxs)(Textarea_styles_1.TextareaContainer, { children: [(0, jsx_runtime_1.jsx)(Textarea_styles_1.StyledTextarea, Object.assign({ size: size, ref: ref, value: value }, rest, { readOnly: isReadOnly, onChange: handleChange })), !isReadOnly ? ((0, jsx_runtime_1.jsxs)(Textarea_styles_1.InfoContainer, { children: [(0, jsx_runtime_1.jsx)(Textarea_styles_1.ErrorMessage, { children: errorMessage !== null && errorMessage !== void 0 ? errorMessage : '' }), (0, jsx_runtime_1.jsx)(Textarea_styles_1.TextCounter, { children: `${textValue.length || '0'} / ${maxTextLength}` })] })) : ('')] }));
});
Textarea.displayName = 'Textarea';
exports.default = (0, react_1.memo)(Textarea);
