import type { Meta, StoryObj } from '@storybook/react';

import TransparentButton from './TransparentButton';

const meta: Meta<typeof TransparentButton> = {
  title: 'Components/Layouts/TransparentButton',
  component: TransparentButton,
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof TransparentButton>;

export const Default: Story = {
  args: {
    children: 'Button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const CustomStyled: Story = {
  args: {
    children: 'Custom Styled Button',
    style: { color: 'red', fontSize: '20px' },
  },
};
