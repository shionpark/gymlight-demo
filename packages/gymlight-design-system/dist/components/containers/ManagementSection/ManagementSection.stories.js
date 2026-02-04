"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@emotion/react");
const inputs_1 = require("../../../components/inputs");
const buttons_1 = require("../../../components/buttons");
const ManagementSection_1 = __importDefault(require("./ManagementSection"));
const styles_1 = require("../../../styles");
/**
 * #### 개요
 *
 * 'OO 관리' 페이지의 기본 레이아웃. 구성요소(예시)는 다음과 같음.
 *
 * - 상단 왼쪽 탭: ex. 팀 목록, 팀원 목록
 * - 상단 오른쪽 버튼: ex. 지점 선택, 팀 등록 버튼
 * - 메인 섹션: ex. 팀 목록 테이블
 *
 * #### 사용처
 *
 * 관리 페이지
 *
 * #### 사용 방법
 *
 * TabButtons 컴포넌트와 ControlButtons 컴포넌트를 함께 사용할 수 있음.
 *
 * ```tsx
 * <ManagementSection
    tabs={
      <TabButtons
        tabMenus={tabMenus}
        checkIsActiveTab={checkIsActiveTab}
        getSelectTabHandler={getSelectTabHandler}
      />
    }
    buttons={
      <ControlButtons
        branches={teamTableProps.branchesData?.list || []}
        onBranchChange={teamTableProps.handleBranchChange}
        onOpenModal={clickTeamFormOpen}
        Icon={UserGroupIcon}
        label={activeTab === '팀 목록' ? '팀 등록' : '팀원 등록'}
      />
    }
  >
    test
  </ManagementSection>
 * ```
 */
const meta = {
    title: 'Components/Containers/ManagementSection',
    component: ManagementSection_1.default,
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(react_2.ThemeProvider, { theme: styles_1.theme, children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(Story, {})] })),
    ],
    argTypes: {},
};
exports.default = meta;
exports.Default = {
    render: (args) => {
        const [activeIdx, setActiveIdx] = (0, react_1.useState)(0);
        const tabButtons = ['팀 목록', '팀원 목록'].map((tabName, idx) => ((0, jsx_runtime_1.jsx)(buttons_1.TabButton, { active: idx === activeIdx, onClick: () => setActiveIdx(idx), children: tabName })));
        const buttons = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(inputs_1.Select, { wide: false, children: [(0, jsx_runtime_1.jsx)("option", { children: "\uC11C\uAC15\uB300\uC810" }), (0, jsx_runtime_1.jsx)("option", { children: "\uBA85\uC9C0\uB300\uC810" })] }), (0, jsx_runtime_1.jsx)(buttons_1.SquareButton, { variant: "primary", children: "\uD300 \uB4F1\uB85D" })] }));
        return ((0, jsx_runtime_1.jsx)(ManagementSection_1.default, { tabs: tabButtons, buttons: buttons, children: (0, jsx_runtime_1.jsx)("div", { style: { width: '100%', height: '60rem' }, children: "preview" }) }));
    },
};
