import { Meta, StoryObj } from '@storybook/react';
import Canvas from './Canvas';
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
declare const meta: Meta<typeof Canvas>;
export default meta;
type Story = StoryObj<typeof Canvas>;
export declare const Default: Story;
