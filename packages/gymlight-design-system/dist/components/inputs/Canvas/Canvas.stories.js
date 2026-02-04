"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const Canvas_1 = __importDefault(require("./Canvas"));
/** ## Canvas
 *
 * ### 개요
 * 서명과 같이 그림을 그리기 위한곳에 사용하는 컴포넌트
 *
 * ### 사용처
 *
 * SignaturePad구현
 *
 * ### 사용팁
 *
 *
 * 이 Canvas는 기본 디자인을 제공하기 위한 컴포넌트입니다.
 * ex) hover 색상변화 / 마우스 포인터 변화
 *
 *
 * 실제로 그림 그리는 기능을 제공하지 않습니다.
 *
 * 하지만 그림을 그리기위해 필요한 prop들에 대한 설명을 작성해놓았습니다.
 * Canvas에 그림그리기위해서는 웹표준 webGL api의 매서드를 사용해서 해당 prop들을 구현해주세요.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext
 *
 */
const meta = {
    title: 'components/inputs/Canvas',
    component: Canvas_1.default,
    argTypes: {
        id: {
            description: '캔버스의 고유한 ID입니다.',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
        onTouchStart: {
            description: '터치 시작 이벤트 핸들러 <br> 선 경로를 시작하는 콜백.',
            action: 'onTouchStart',
            table: {
                type: { summary: '(event: TouchEvent) => void' },
            },
        },
        onTouchMove: {
            description: '터치 이동 이벤트 핸들러  <br> 선 경로를 진행하며 색을 채우는 콜백.',
            action: 'onTouchMove',
            table: {
                type: { summary: '(event: TouchEvent) => void' },
            },
        },
        onTouchEnd: {
            description: '터치 종료 이벤트 핸들러  <br> 선 경로 그리기를 종료하는 콜백',
            action: 'onTouchEnd',
            table: {
                type: { summary: '(event: TouchEvent) => void' },
            },
        },
        onMouseDown: {
            description: '마우스 누를 때의 이벤트 핸들러 <br> 선 경로를 시작하는 콜백.',
            action: 'onMouseDown',
            table: {
                type: { summary: '(event: MouseEvent) => void' },
            },
        },
        onMouseMove: {
            description: '마우스 이동 시의 이벤트 핸들러<br> 선 경로를 진행하며 색을 채우는 콜백',
            action: 'onMouseMove',
            table: {
                type: { summary: '(event: MouseEvent) => void' },
            },
        },
        onMouseUp: {
            description: '마우스 클릭을 뗄 때의 이벤트 핸들러<br> 선 경로 그리기를 종료하는 콜백',
            action: 'onMouseUp',
            table: {
                type: { summary: '(event: MouseEvent) => void' },
            },
        },
        ref: {
            description: '캔버스 요소의 참조 (reference), 또는 그를 설정하는 함수',
            table: {
                type: {
                    summary: '(htmlCanvasElement: HTMLCanvasElement | null) => void',
                },
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {},
};
