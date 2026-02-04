import { Meta, StoryObj } from '@storybook/react';
import SelfieCamera from './SelfieCamera';
import { useSelfieCamera } from '@/hooks';

/** ## SelfieCamera
 *
 * ## 개요
 *
 * 브라우저의 MediaDevices api를 이용하여 사진을 촬영하는데에 사용되는 컴포넌트
 *
 * ## 사용처
 *
 * 회원등록 등 고객의 사진을 입력받는곳
 *
 * ## 사용팁
 *
 * hooks 폴더의 useSelfieCamera의 모든 반환값을 prop으로 넘겨주면 됩니다.
 * 사용처에서 api의 이미지 전송 데이터로 photoString을 입력해주시면 됩니다.
 *
 * 내부 컴포넌트의 비율이 정해져있습니다. 사용처에서 Wrapper를 만들어 width값을 조절하는 방식으로
 * 카메라의 크기를 조절할 수있습니다.
 *
 *
 */
const meta: Meta<typeof SelfieCamera> = {
  title: 'Components/SelfieCamera',
  component: SelfieCamera,
  argTypes: {
    cameraMode: {
      control: {
        type: 'select',
        options: ['active', 'standby', 'saved'],
      },
      description: 'SelfieCamera의 현재 상태',
      defaultValue: 'standby',
      table: {
        type: { summary: "'active' | 'standby' | 'saved'" },
        defaultValue: { summary: 'standby' },
      },
    },
    photoString: {
      control: 'text',
      description: '캡처된 사진의 데이터 URL',
      defaultValue: null,
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'null' },
      },
    },
    shot: {
      action: 'shot',
      description: '현재 카메라 화면을 캡처하여 photoString에 저장',
      table: {
        type: { summary: '() => void' },
      },
    },
    removeSavedPhoto: {
      action: 'removeSavedPhoto',
      description: '저장된 사진을 삭제하고 standby 상태로 전환',
      table: {
        type: { summary: '() => void' },
      },
    },
    turnOnCamera: {
      action: 'turnOnCamera',
      description: '카메라를 켜고 active 상태로 전환',
      table: {
        type: { summary: '() => void' },
      },
    },
    turnOffCamera: {
      action: 'turnOffCamera',
      description: '카메라를 끄고 standby 또는 saved 상태로 전환',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SelfieCamera>;

export const Default: Story = {
  render: () => {
    const { videoRef, ...SelfieCameraProps } = useSelfieCamera();
    return <SelfieCamera {...SelfieCameraProps} ref={videoRef} />;
  },
};
