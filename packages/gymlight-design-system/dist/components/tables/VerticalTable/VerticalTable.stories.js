"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithCheckbox = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const styles_1 = require("../../../styles");
const react_1 = require("@emotion/react");
const VerticalTable_1 = __importDefault(require("./VerticalTable"));
const react_2 = require("react");
const inputs_1 = require("../../../components/inputs");
/**  ## VerticalTable
 *
 * ### 개요
 *
 * 컬럼별 길이설정이 가능한 테이블 컴포넌트
 *
 * ### 사용처
 *
 * 한페이지를 차지하는 커다란 테이블이 필요한곳
 * - ex) 직원관리, 회원관리, 기타 조회페이지
 *
 *
 * ### 사용팁
 * - children을 사용하지 않습니다. tr, th, td와 같은 항목은 내부에서 생성됩니다.
 * - 모든 정보는 배열형태의 prop으로 입력받습니다.
 *
 *
 *
 *
 */
const meta = {
    title: 'Components/Tables/VerticalTable',
    component: VerticalTable_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_1.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {
        columnWidths: {
            controll: 'array',
            description: '각 컬럼의 길이값 배열. <br> 테이블 컬럼 수보다 길이가 짧을경우, 나머지 값은 auto로 지정',
        },
        tableHeaderCells: {
            controll: 'object',
            description: `헤더 컴포넌트 배열`,
        },
        tableRows: { controll: 'object', description: `row 컴포넌트 배열의 배열` },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        columnWidths: ['10rem', '1fr', '1fr', '2fr', '2fr'],
        tableHeaderCells: ['No', '이름', '나이', '이메일', '주소'],
        tableRows: [
            ['1', '박장진', '28', 'park@gymlight.com', '짐라이트 연세연희'],
            ['2', '신서훈', '32', 'jane@example.com', '짐라이트 구산연신내'],
            ['3', '최영영', '24', 'sam@example.com', '짐라이트 서강대'],
        ],
    },
};
/** 체크박스 결합
 *
 */
exports.WithCheckbox = {
    render: () => {
        const [checks, setChecks] = (0, react_2.useState)([false, false, false]);
        const handleClickCheckbox = (i) => {
            setChecks((prev) => {
                prev[i] = !prev[i];
                return [...prev];
            });
        };
        const columnWidths = ['3.6rem', '3.6rem', '1fr', '2fr', '2fr', '2fr'];
        const tableHeaderCells = ['✔️', 'No', '이름', '나이', '이메일', '주소'];
        const tableRows = [
            [
                (0, jsx_runtime_1.jsx)(inputs_1.Checkbox, { checked: checks[0], onClick: () => handleClickCheckbox(0), id: `Checkbox-${0}` }),
                '1',
                '박장진',
                '28',
                'park@gymlight.com',
                '짐라이트 연세연희',
            ],
            [
                (0, jsx_runtime_1.jsx)(inputs_1.Checkbox, { checked: checks[1], onClick: () => handleClickCheckbox(1), id: `Checkbox-${1}` }),
                '2',
                '신서훈',
                '32',
                'jane@example.com',
                '짐라이트 구산연신내',
            ],
            [
                (0, jsx_runtime_1.jsx)(inputs_1.Checkbox, { checked: checks[2], onClick: () => handleClickCheckbox(2), id: `Checkbox-${2}` }),
                '3',
                '최영영',
                '24',
                'sam@example.com',
                '짐라이트 서강대',
            ],
        ];
        return ((0, jsx_runtime_1.jsx)(VerticalTable_1.default, { columnWidths: columnWidths, tableHeaderCells: tableHeaderCells, tableRows: tableRows }));
    },
};
