import type { StoryObj, Meta } from '@storybook/react';
import ScrollableTableCell from './ScrollableTableCell';
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
declare const meta: Meta<typeof ScrollableTableCell>;
export default meta;
type Story = StoryObj<typeof ScrollableTableCell>;
/** 기본설정 */
export declare const Default: Story;
/** 긴 문장
 *
 * **  height를 제한하는 부모 컴포넌트가 없으므로, 직접 style 객체를 prop으로 넘겨줬습니다.
 *  - 실구현에선 이렇게 하지마세요
 */
export declare const WithLongSentence: Story;
