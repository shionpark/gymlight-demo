"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const Styled = __importStar(require("./ImageUploadInput.styles"));
const ImageUploadInput = ({ setImageState, imageState }) => {
    const [previewUrl, setPreviewUrl] = (0, react_1.useState)(imageState || '');
    const handleFileChange = (event) => {
        var _a;
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const validExtensions = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
            if (!validExtensions.includes(file.type)) {
                alert('적절한 이미지 형식이 아닙니다. png,jpg, jpeg, gif중 한가지 형식을 사용해주세요.');
                return;
            }
            const objectUrl = URL.createObjectURL(file);
            setPreviewUrl(objectUrl);
            if (setImageState) {
                setImageState(objectUrl);
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Styled.Wrapper, { children: [previewUrl ? ((0, jsx_runtime_1.jsx)(Styled.PreviewImage, { src: previewUrl, alt: "Uploaded preview" })) : ((0, jsx_runtime_1.jsx)(Styled.MockupBox, {})), (0, jsx_runtime_1.jsx)(Styled.ImageInput, { type: "file", onChange: handleFileChange, accept: ".png,.jpg,.jpeg,.gif" })] }));
};
exports.default = ImageUploadInput;
