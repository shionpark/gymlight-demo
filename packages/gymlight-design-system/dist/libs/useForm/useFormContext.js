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
exports.FormProvider = exports.useFormContext = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const FormContext = (0, react_1.createContext)(null);
/**
 * 폼 컨텍스트를 사용하기 위한 커스텀 훅입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @returns {UseFormReturn<SubmitForm>} 폼 컨텍스트의 값을 반환합니다.
 */
const useFormContext = () => (0, react_1.useContext)(FormContext);
exports.useFormContext = useFormContext;
/**
 * 폼 컨텍스트 프로바이더 컴포넌트입니다.
 * @template SubmitForm - 제출할 폼 데이터의 타입입니다.
 * @param {FormProviderProps<SubmitForm>} props - 폼 컨텍스트 프로바이더의 속성입니다.
 * @returns {JSX.Element} 폼 컨텍스트 프로바이더 컴포넌트입니다.
 */
const FormProvider = (props) => {
    const { children } = props, rest = __rest(props, ["children"]);
    return ((0, jsx_runtime_1.jsx)(FormContext.Provider, { value: Object.assign({}, rest), children: children }));
};
exports.FormProvider = FormProvider;
