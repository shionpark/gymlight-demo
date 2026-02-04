import { StoryObj, Meta } from '@storybook/react';
import LabeledContainer from './LabeledContainer';

/** ## LabeledContainer
 *
 * ### 개요
 *
 * label 컴포넌트를 묶어주는  컴포넌트
 *
 * ### 사용처
 *
 * - 컴포넌트에 라벨을 붙여주는 모든곳
 *
 * ### 사용팁
 *
 * flex-container입니다.
 * labelRatio와 label과 content의 너비 비율을 조정 할 수 있습니다.
 *
 *
 */
const meta: Meta<typeof LabeledContainer> = {
  title: 'components/Containers/LabeledContainer',
  component: LabeledContainer,
  argTypes: {
    labelRatio: {
      description: '라벨 영역의 width 비율<br>  default: 1',
      control: 'number',
    },
    contentRatio: {
      description: '라벨링된 컴포넌트의 width 비율 <br>  default: 1',
      control: 'number',
    },
    size: {
      description: '라벨 영역의 높이를 정합니다.',
      options: ['small', 'normal', 'large'],
      control: { type: 'radio' },
    },
    labelAlign: {
      control: { type: 'select' },
    },
    vertical: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export default meta;

type Story = StoryObj<typeof LabeledContainer>;

export const Default: Story = {
  args: {
    id: 'default',
    labelText: '라벨',
    labelRatio: 1,
    contentRatio: 3,
    children: 'children 컴포넌트',
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    id: 'vertical',
    vertical: true,
  },
};
