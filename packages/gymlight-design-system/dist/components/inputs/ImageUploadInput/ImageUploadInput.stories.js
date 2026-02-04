"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const ImageUploadInput_1 = __importDefault(require("./ImageUploadInput"));
/** ## ImageUploadInput
 *
 * ### 개요
 * 사진을 직접 촬영하지 않고, 컴퓨터에 있는 파일로 업로드 하는 용도의 Input 입니다.
 *
 *
 * ### 사용처
 * 짐라이트 매니저를 사용 중인 기기의 저장 장치에서 사진 파일을 업로드하는 곳
 * (촬영은 SelfieCamera 컴포넌트와 useSelfieCamera훅을 사용해주세요.)
 *
 */
const meta = {
    component: ImageUploadInput_1.default,
    title: 'Components/inputs/ImageUploadInput',
    argTypes: {
        setImageState: { description: '부모로부터 전달받는 state setter' },
        imageState: { description: '이미지를 저장하는 state' },
    },
};
exports.default = meta;
exports.Default = {};
