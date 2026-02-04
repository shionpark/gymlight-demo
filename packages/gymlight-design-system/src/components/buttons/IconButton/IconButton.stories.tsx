import { Meta, StoryObj } from '@storybook/react';

import IconButton from './IconButton';

import {
  UserPlusIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

/**
 * ### 개요
 *
 * 아이콘을 클릭해 액션을 취하기 위한 버튼
 *
 * icon을 prop으로 받음
 *
 *
 *
 */

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: 'select',
      options: {
        None: null,
        UserPlusIcon: <UserPlusIcon />,
        FilterIcon: <AdjustmentsHorizontalIcon />,
        Logout: <ArrowRightStartOnRectangleIcon />,
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['normal', 'primary', 'icon-only', 'active'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'normal', 'large'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: <UserPlusIcon />,
    variant: 'normal',
    size: 'normal',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Variants: Story = {
  render: ({ size }) => (
    <div>
      <div>Primary</div>
      <IconButton icon={<UserPlusIcon />} variant="primary" size={size} />
      <br />
      <div>Default</div>
      <IconButton icon={<UserPlusIcon />} variant="normal" size={size} />
      <br />
      <div>Icon Only</div>
      <IconButton icon={<UserPlusIcon />} variant="icon-only" size={size} />
      <div>Active</div>
      <IconButton icon={<UserPlusIcon />} variant="active" size={size} />
    </div>
  ),
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Sizes: Story = {
  render: ({ variant }) => (
    <div>
      <div>Small</div>
      <IconButton icon={<UserPlusIcon />} variant={variant} size="small" />
      <br />
      <div>Medium</div>
      <IconButton icon={<UserPlusIcon />} variant={variant} size="normal" />
      <br />
      <div>Large</div>
      <IconButton icon={<UserPlusIcon />} variant={variant} size="large" />
    </div>
  ),
  argTypes: {
    size: {
      control: false,
    },
  },
};
