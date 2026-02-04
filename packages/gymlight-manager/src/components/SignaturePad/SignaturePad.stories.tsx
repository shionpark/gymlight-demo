import type { StoryObj, Meta } from '@storybook/react';

import SignaturePad from './SignaturePad';
import { useSignaturePad } from '@/hooks';

/** ## SignaturePad
 *
 * ### 개요
 *
 * 터치, 마우스 드래그 등의 상호작용을 통해 서명을 입력받아 저장하는 컴포넌트
 *
 * ### 사용처
 *
 * 계약서를 비롯한 서명이 들어가는 모든곳
 *
 * ### 사용팁
 *
 * useSignaturePad 커스텀훅과 함께 사용하세요.
 *
 * 이 컴포넌트는 mode 상태값에 따라 표시되는 컴포넌트가 다릅니다.
 *
 * waiting: 대기 모드
 * editing: 그림을 그려서 signatureData 값을 수정하는 모드
 * complete: signatureData를 보여주는 이미지
 *
 *  mode가 변경되면  z-index를 변경하는 로직을 통해 컴포넌트를 선택적으로 변경하고 있습니다.
 *  만약 SignaturePad 컴포넌트가 화면에 제대로 표시되지 않을 경우,
 *  부모 컴포넌트의 z-index를 확인하고, 적절하게 defaultZIndex prop을 변경해 주세요.
 *
 *	하지만, 모드별로 렌더링되는 컴포넌트를 다르게 하거나 display: block CSS를 이용해 선택적으로 컴포넌트를 보여줄 경우,
 * canvas의 ref가 항상 초기화되는 버그가 있었습니다.
 *
 *  그래서 모드별로 z-index와 opacity를 조절하여 사용자와 상호작용할 수 있도록 구현하였습니다.
 *
 */
const meta: Meta<typeof SignaturePad> = {
  title: 'components/SignaturePad',
  component: SignaturePad,
  argTypes: {
    title: {
      description: 'SignaturePad의 좌상단에 위치할 이름',
    },
    mode: {
      description: '현재 SignaturePad의 모드 변수 <br> 각 모드에 따라 다른 상태를 보임 ',
      details: "'waiting' | 'editing' | 'complete'",
    },
    canvasProps: {
      description: 'canvas에 그림을 그리기 위해 필요한 제공해야하는 props <br>',
    },
    clearSignature: {
      description: 'canvas의 상태를 초기화 하는 함수',
    },
    completeSignature: {
      description: 'canvas에 그려진 그림 데이터를 state에 저장하는 함수',
    },
    resetSignaturePad: {
      description: '모든 데이터를 초기화 하고 mode를 waiting으로 되돌리는 함수',
    },
    editSignature: { description: 'mode를 editing으로 변경하는 메서드' },
    defaultZIndex: {
      description: '기준이되는 z index',
    },
    signatureData: {
      description: 'string으로 나타낸 그림 데이터',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SignaturePad>;

export const Default: Story = {
  render: () => {
    const SignaturePadProps = useSignaturePad({});
    return <SignaturePad {...SignaturePadProps} />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const SignaturePadProps = useSignaturePad({ placeholder: '서명' });
    return <SignaturePad {...SignaturePadProps} />;
  },
};
