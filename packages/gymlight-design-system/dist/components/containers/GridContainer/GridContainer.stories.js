"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertical = exports.Horizontal = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const GridContainer_1 = __importDefault(require("./GridContainer"));
/** ## GridContainer
 *
 * ### 개요
 *
 * 그리드 요소들을 감싸는 컨테이너 컴포넌트
 *
 * ### 사용처
 *
 * 그리드 컨테이너를 사용하는 모든 곳
 *
 * ### 사용팁
 *
 * 기본 그리드 방향은 가로입니다.
 * 따라서 direction boolean값을 설정하면 세로로 바뀌고 columns 값이 rows처럼 설정됩니다.
 *
 */
const meta = {
    title: 'components/Containers/GridContainer',
    component: GridContainer_1.default,
    argTypes: {
        columns: {
            description: '그리드 컨테이너 열 개수',
            control: 'number',
        },
        height: {
            description: '그리드 컨테이너 높이(rem)',
            control: 'number',
        },
        gap: {
            description: '그리드 컨테이너 간격(px)',
            control: 'number',
        },
        direction: {
            description: '그리드 아이템 정렬 방향. 기본적으로 그리드는 가로(`horizontal`)방향임.',
            options: ['가로', '세로'],
            control: { type: 'radio' },
            defaultValue: '가로',
        },
    },
};
exports.default = meta;
const Items = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: items.map((item) => ((0, jsx_runtime_1.jsx)("div", { style: { background: 'gray', padding: '1rem', textAlign: 'center' }, children: item }, item))) }));
};
exports.Horizontal = {
    args: {
        columns: 3,
        gap: 1,
    },
    render: (args) => {
        return ((0, jsx_runtime_1.jsx)(GridContainer_1.default, { columns: args.columns, height: args.height, direction: args.direction, gap: args.gap, children: (0, jsx_runtime_1.jsx)(Items, {}) }));
    },
};
exports.Vertical = {
    args: Object.assign(Object.assign({}, exports.Horizontal.args), { direction: '가로' }),
    render: (args) => {
        return ((0, jsx_runtime_1.jsx)(GridContainer_1.default, { columns: args.columns, height: args.height, direction: args.direction, gap: args.gap, children: (0, jsx_runtime_1.jsx)(Items, {}) }));
    },
};
