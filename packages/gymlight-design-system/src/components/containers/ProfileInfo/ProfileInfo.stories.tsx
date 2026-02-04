import { Meta, StoryObj } from '@storybook/react';
import ProfileInfo from './ProfileInfo';

/**
 * ### 개요
 *
 *
 */

const meta: Meta<typeof ProfileInfo> = {
  title: 'components/Containers/ProfileInfo',
  component: ProfileInfo,
  argTypes: {
    name: {
      control: 'text',
    },
    role: {
      control: 'select',
      options: [
        '관리자',
        '매니저',
        '팀장 트레이너',
        '트레이너',
        '전지점 FC',
        'FC',
        '전 지점 인포',
        '인포',
      ],
    },
    branch: {
      control: 'select',
      options: ['서강대점', '명지대점', '연희/연세대점', '구산/연신내점', '테스트점'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileInfo>;

export const Default: Story = {
  args: {
    name: '홍길동',
    role: '매니저',
  },
};

export const Admin: Story = {
  args: {
    ...Default.args,
    name: '사용자',
    role: '관리자',
  },
};

export const Guest: Story = {
  args: {
    ...Default.args,
    name: '사용자',
  },
};

export const Trainer: Story = {
  args: {
    ...Default.args,
    role: '트레이너',
  },
};
