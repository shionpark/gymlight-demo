import { Meta, StoryObj } from '@storybook/react';
import ImageUploadInput from './ImageUploadInput';
/** ## ImageUploadInput
 *
 * ### 개요
 * 사진을 직접 촬영하지 않고, 컴퓨터에 있는 파일로 업로드 하는 용도의 Input 입니다.
 *
 *
 * ### 사용처
 * 짐라이트 매니저를 사용 중인 기기의 저장 장치에서 사진 파일을 업로드하는 곳
 * (촬영은 SelfieCamera 컴포넌트와 useSelfieCamera훅을 사용해주세요.)
 *
 */
declare const meta: Meta<typeof ImageUploadInput>;
export default meta;
type Story = StoryObj<typeof ImageUploadInput>;
export declare const Default: Story;
