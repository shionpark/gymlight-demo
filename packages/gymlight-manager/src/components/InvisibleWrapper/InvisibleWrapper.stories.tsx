import type { StoryObj, Meta } from '@storybook/react';

import InvisibleWrapper from './InvisibleWrapper';

/** ## InvisibleWrapper
 *
 * ### 개요
 *
 * 사용자에게 안보이게 랜더링되는 컴포넌트
 *
 *
 * ### 사용처
 *
 * 계약서
 *
 * ### 사용팁
 *
 * position: absolute를 사용하여 위치를 화면 밖으로 고정시켜, 사용자가 볼 수 없는 컴포넌트를 렌더링합니다.
 * 렌더링은 해야 하지만, 숨기고 싶은 요소가 있을 때 사용합니다.
 * 대표적인 예로, 계약서 생성 기능이 있습니다.
 *
 */
const meta: Meta<typeof InvisibleWrapper> = {
  title: 'components/InvisibleWrapper',
  component: InvisibleWrapper,
  argTypes: {
    children: {
      description: '자식 컴포넌트',
    },
  },
};
export default meta;

type Story = StoryObj<typeof InvisibleWrapper>;

export const Default: Story = {};
