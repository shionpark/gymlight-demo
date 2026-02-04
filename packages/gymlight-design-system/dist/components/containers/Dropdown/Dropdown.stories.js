"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rightSpread = exports.leftExpand = exports.WithCustomButton = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const Dropdown_1 = __importDefault(require("./Dropdown"));
/**  ## Dropdown
 *
 * ### 개요
 *
 * 버튼과 섹션을 제공하면, 그 둘을 드롭다운으로 결합하여 제공하는 컴포넌트
 *
 * ### 사용처
 *
 * 한페이지를 차지하는 커다란 테이블이 필요한곳
 * - ex) 직원관리, 회원관리, 기타 조회페이지
 *
 *
 * ### 사용팁
 *
 *- 드롭다운 토글용 버튼 컴포넌트를 button에 삽입하고, 내용을 children에 삽입하세요
 *- 버튼을 따로 제공하지 않으면, 미트볼 모양의 default 버튼이 생성됩니다.
 *	    - default 버튼에 삽입하고 싶은 prop은 그냥 DropDown의 prop으로 제공하면 됩니다.
 *
 */
const meta = {
    title: 'components/Containers/Dropdown',
    component: Dropdown_1.default,
    argTypes: {
        button: {
            description: '드롭다운 토글 버튼 <br> 값을 제공하지 않으면 기본디자인이 생성됩니다.',
        },
        isDropdownMenuOpened: {
            description: '드롭다운 섹션의 오픈 여부',
            control: 'boolean',
        },
        distance: {
            description: '드롭다운 섹션과 토글 버튼간의 간격 (rem)',
            control: 'number',
        },
    },
};
exports.default = meta;
/** 기본
 *
 */
exports.Default = {
    render: () => ((0, jsx_runtime_1.jsx)(Dropdown_1.default, { isDropdownMenuOpened: true, children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "\uB4DC\uB86D\uB2E4\uC6B4 1" }), (0, jsx_runtime_1.jsx)("li", { children: "\uB4DC\uB86D\uB2E4\uC6B4 2" }), (0, jsx_runtime_1.jsx)("li", { children: "\uB4DC\uB86D\uB2E4\uC6B4 3" }), (0, jsx_runtime_1.jsx)("li", { children: "\uB4DC\uB86D\uB2E4\uC6B4 4" })] }) })),
};
/** 외부에서 버튼 삽입 */
exports.WithCustomButton = {
    render: () => {
        const [isDropdownMenuOpened, setIsDropdownVisible] = (0, react_1.useState)(false);
        const onClickDropdown = () => setIsDropdownVisible((prev) => !prev);
        return ((0, jsx_runtime_1.jsx)(Dropdown_1.default, { isDropdownMenuOpened: isDropdownMenuOpened, button: (0, jsx_runtime_1.jsx)("button", { onClick: onClickDropdown, children: "\uCEE4\uC2A4\uD140 \uBC84\uD2BC" }), children: (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { children: " \uCEE4\uC2A4\uD140 \uBC84\uD2BC \uB4DC\uB86D\uB2E4\uC6B4" }) }) }));
    },
};
/** 왼쪽으로 확장되는 섹션 */
exports.leftExpand = {
    args: Object.assign(Object.assign({}, exports.Default.args), { align: 'left', isDropdownMenuOpened: true }),
};
/** 오른쪽으로 확장되는 섹션 */
exports.rightSpread = {
    args: Object.assign(Object.assign({}, exports.Default.args), { align: 'right', isDropdownMenuOpened: true }),
};
