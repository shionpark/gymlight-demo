"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithLongSentence = exports.Default = void 0;
const ScrollableTableCell_1 = __importDefault(require("./ScrollableTableCell"));
/**  ## ScrollableTableCell
 *
 * ### 개요
 *
 * 테이블 cell 내부에서 투명 스크롤을 제공하는 셀
 *
 * ### 사용처
 *
 * 이질적으로 긴 텍스트 데이터를 표시하는 테이블 cell
 *
 * ### 사용팁
 *
 * 테이블 상에서 단지 기이하게 긴 몇 개의 데이터 때문에 해당 컬럼의 너비를 넓히거나 행의 높이를 조정해야 하는상황에서 사용하세요.
 *
 **/
const meta = {
    title: 'components/Containers/ScrollableTableCell',
    component: ScrollableTableCell_1.default,
    argTypes: {
        children: {
            description: 'cell에 삽입될 컴포넌트',
        },
    },
};
exports.default = meta;
/** 기본설정 */
exports.Default = {
    args: {
        children: '셀 텍스트',
    },
};
/** 긴 문장
 *
 * **  height를 제한하는 부모 컴포넌트가 없으므로, 직접 style 객체를 prop으로 넘겨줬습니다.
 *  - 실구현에선 이렇게 하지마세요
 */
exports.WithLongSentence = {
    args: {
        style: { width: '20rem', height: '3.6rem' },
        children: '긴 문장을 만나면 줄바꿈이 이루어집니다. 이 컴포넌트를 굳이 따로 만든이유는, 테이블의 각 셀의 높이를 고정시키고 싶어서입니다.  테이블 자체의 행의 수나 열의 수가 아주 많은 테이블에서 어떠한 한 셀만 무지막지하게 길어서 (이벤트 상품의 구성품 목록이라던가) 해당 colummn의 전체 가로 길이를 늘리거나, 해당 row의  높이만 다른 row보다 높게 만들고 싶지 않아서입니다. ',
    },
};
