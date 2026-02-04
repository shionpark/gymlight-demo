import type { Meta, StoryObj } from '@storybook/react';

import AuthCheckbox from './AuthCheckbox';

const meta: Meta<typeof AuthCheckbox> = {
  title: 'Components/Forms/AuthCheckbox',
  component: AuthCheckbox,
  argTypes: {
    label: {
      control: 'text',
      description: '체크박스 옆에 표시될 라벨 텍스트를 지정합니다.',
    },
    name: {
      control: 'text',
      description: '체크박스의 이름을 지정합니다.',
    },
    onChange: {
      action: 'changed',
      description: '체크박스 상태가 변경될 때 호출되는 핸들러입니다.',
    },
    onBlur: {
      action: 'blurred',
      description: '체크박스가 포커스를 잃을 때 호출되는 핸들러입니다.',
    },
    style: {
      control: 'object',
      description: '체크박스 컨테이너의 추가 스타일을 지정합니다.',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof AuthCheckbox>;

export const Default: Story = {
  args: {
    label: '동의합니다',
    name: 'consent',
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: '이용약관에 동의합니다',
    name: 'terms',
  },
};
