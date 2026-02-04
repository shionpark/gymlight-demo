import type { Meta, StoryObj } from '@storybook/react';
import SquareButton from './SquareButton';

import { UserPlusIcon } from '@heroicons/react/24/outline';

/**
 *
 * ### 개요
 * 일반적으로 사용되는 버튼. 버튼의 텍스트 및 아이콘을 children으로 받음.
 *
 *  아이콘을 추가하고 싶을 경우, span 태그 내에 아이콘을 추가해야함.
 *
 *
 *
 */

const meta: Meta<typeof SquareButton> = {
  title: 'Components/Buttons/SquareButton',
  component: SquareButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['normal', 'reverse', 'outline', 'primary', 'primary-outline', 'error-outline'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'normal'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
    wide: {
      control: 'boolean',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof SquareButton>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'normal',
    size: 'normal',
    disabled: false,
    active: false,
    wide: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true,
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Wide: Story = {
  args: {
    ...Default.args,
    wide: true,
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <SquareButton {...args}>
      <span>
        <UserPlusIcon />
      </span>
      Button With Icon
    </SquareButton>
  ),
};