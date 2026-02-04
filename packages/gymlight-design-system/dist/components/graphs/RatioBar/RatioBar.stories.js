"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discrete = exports.Default = void 0;
const RatioBar_1 = __importDefault(require("./RatioBar"));
/** ## RatioBar
 *
 * ### 개요
 * - 입력받은 두개의 숫자의 비율을 시각적으로 나타내는 막대 그래프
 *
 * ### 목적
 * - 대시보드에서 여러가지 통계나 수량을 시각적으로 보여주기 위함
 *
 * ### 사용처
 * - 페이지 경로: /members 회원 상세정보 모달의 대시보드
 *
 * ### 사용팁
 * numerator는 분자, denominator는 분모를 뜻합니다
 *
 * numerator는 나타내고자 하는 부분값 ,denominator에는 전체수량을 넣으세요.
 *
 *
 * discrete 모드에서는 내부에서 히트박스의 크기가 정밀하게 계산됩니다.
 * 브라우저가 감당하기힘든 조그마한 크기에, 수많은 박스를 집어넣을경우 소숫점 무시 문제로 일정한 gap 디자인이 무너지는 경향이있습니다.
 * 130개 이상의 요소들은 되도록이면 continuous로 설정해주세요
 *
 */
const meta = {
    component: RatioBar_1.default,
    title: 'components/graphs/RatioBar',
    argTypes: {
        numeratorColor: { description: '분자를 표시하는 부분의 색깔' },
        denominatorColor: { description: '분자를 제외한 부분의  색깔' },
        numeratorNumber: { description: '분자 수' },
        denominatorNumber: { description: '분모 수' },
        shape: {
            description: '연속 / 불연속 디자인 결정',
            option: ['continuous', 'discrete'],
        },
        colorCells: { description: '전체디자인과 별개로 색상을 부여하고싶은 cell 정보' },
        barThikness: { description: '그래프의 두께, rem 단위' },
        wide: {
            control: 'boolean',
            description: '그래프가 전체 너비를 차지할지 여부',
            defaultValue: false,
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        numeratorColor: '#c1c1c1',
        denominatorColor: '#555',
        numeratorNumber: 50,
        denominatorNumber: 100,
        barThikness: 1.5,
        wide: true,
    },
};
exports.Discrete = {
    args: {
        numeratorColor: '#c1c1c1',
        denominatorColor: '#555',
        numeratorNumber: 4,
        denominatorNumber: 10,
        barThikness: 1.5,
        shape: 'discrete',
        wide: true,
    },
};
