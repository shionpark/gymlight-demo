"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDropdownForMenu = exports.WithDropdown = exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const DropdownForMenu_1 = __importDefault(require("./DropdownForMenu"));
const Dropdown_1 = __importDefault(require("../Dropdown/Dropdown"));
/**  ## DropdownForMenu
 *
 * ### 개요
 *
 * 드롭다운 메뉴 스타일 컴포넌트
 *
 * ### 사용처
 *
 * Dropdown 컴포넌트의 children으로 전달하는 각 메뉴를 감싸서 사용
 *
 *
 * ### 사용팁
 *
 * DropdownForMenu에 전달하는 children 요소에 커스텀 스타일링을 할 수 있습니다.
 *
 */
const meta = {
    title: 'components/Containers/Dropdown/DropdownForMenu',
    component: DropdownForMenu_1.default,
    argTypes: {
        children: {
            description: '텍스트 및 아이콘 삽입',
        },
    },
};
exports.default = meta;
/** 기본
 *
 */
exports.Default = {
    render: () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274 1" }), (0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274 2" }), (0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274 3" }), (0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274 4" }), (0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274 5" })] })),
};
/** Dropdown과 함께 사용 */
exports.WithDropdown = {
    render: () => {
        const [isDropdownMenuOpened, setIsDropdownVisible] = (0, react_1.useState)(false);
        const onClickDropdown = () => setIsDropdownVisible((prev) => !prev);
        return ((0, jsx_runtime_1.jsxs)(Dropdown_1.default, { isDropdownMenuOpened: isDropdownMenuOpened, button: (0, jsx_runtime_1.jsx)("button", { onClick: onClickDropdown, children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBC84\uD2BC" }), children: [(0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB2741" }), (0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB2742" }), (0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: "\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB2743" })] }));
    },
};
/** 커스텀 스타일 */
exports.CustomDropdownForMenu = {
    render: () => {
        const [isDropdownMenuOpened, setIsDropdownVisible] = (0, react_1.useState)(false);
        const onClickDropdown = () => setIsDropdownVisible((prev) => !prev);
        return ((0, jsx_runtime_1.jsxs)(Dropdown_1.default, { isDropdownMenuOpened: isDropdownMenuOpened, button: (0, jsx_runtime_1.jsx)("button", { onClick: onClickDropdown, children: "\uCEE4\uC2A4\uD140 \uBC84\uD2BC" }), children: [(0, jsx_runtime_1.jsxs)(DropdownForMenu_1.default, { children: [(0, jsx_runtime_1.jsx)("div", { children: "\uCEE4\uC2A4\uD140" }), (0, jsx_runtime_1.jsx)("div", { children: "\uBC84\uD2BC" }), (0, jsx_runtime_1.jsx)("div", { children: "\uB4DC\uB86D\uB2E4\uC6B4" })] }), (0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { children: (0, jsx_runtime_1.jsx)("div", { style: { color: 'red' }, children: "\uCEE4\uC2A4\uD140 \uBC84\uD2BC \uB4DC\uB86D\uB2E4\uC6B4" }) }), (0, jsx_runtime_1.jsx)(DropdownForMenu_1.default, { style: { background: 'yellow' }, children: "\uCEE4\uC2A4\uD140 \uBC84\uD2BC \uB4DC\uB86D\uB2E4\uC6B4" })] }));
    },
};
