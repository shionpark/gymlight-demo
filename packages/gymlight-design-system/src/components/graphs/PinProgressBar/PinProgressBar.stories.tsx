import { Meta, StoryObj } from '@storybook/react';
import PinProgressBar from './PinProgressBar';

import {
  FaceSmileIcon as DefaultIcon,
  UserGroupIcon as WalkinIcon,
  BanknotesIcon as IncentiveIcon,
} from '@heroicons/react/24/outline';

const meta: Meta<typeof PinProgressBar> = {
  component: PinProgressBar,
  title: 'Components/graphs/PinProgressBar',
  argTypes: {
    pinCells: {
      control: 'object',
      description: '특정 셀에 핀과 라벨을 표시하기 위한 배열',
      defaultValue: [
        { cellIndex: 10, label: '최소요구량', hasPin: true },
        { cellIndex: 30, label: '인센티브', hasPin: true },
        { cellIndex: 49, label: '워크인 혜택', hasPin: true },
      ],
    },
    colorCells: {
      control: 'object',
      description: '특정 셀의 배경 색상을 설정하기 위한 배열',
      defaultValue: [
        { cellIndex: 10, cellColor: 'red' },
        { cellIndex: 30, cellColor: 'green' },
        { cellIndex: 49, cellColor: 'orange' },
      ],
    },
    numeratorColor: {
      control: 'color',
      description: '분자를 표시하는 부분의 색깔',
      defaultValue: 'blue',
    },
    denominatorColor: {
      control: 'color',
      description: '분자를 제외한 부분의 색깔',
      defaultValue: 'lightgray',
    },
    numeratorNumber: {
      control: 'number',
      description: '분자 수',
      defaultValue: 30,
    },
    denominatorNumber: {
      control: 'number',
      description: '분모 수',
      defaultValue: 50,
    },
    barThikness: {
      control: 'number',
      description: '그래프의 두께, rem 단위',
      defaultValue: 1,
    },
  },
};

export default meta;

type StoryType = StoryObj<typeof PinProgressBar>;

export const Default: StoryType = {
  args: {
    pinCells: [
      { cellIndex: 39, label: '패널티', hasPin: true },
      { cellIndex: 49, label: '인센티브', hasPin: true },
      { cellIndex: 59, label: '워크인 혜택', hasPin: true },
    ],
    colorCells: [
      { cellIndex: 39, cellColor: 'red' },
      { cellIndex: 49, cellColor: 'green' },
      { cellIndex: 59, cellColor: 'orange' },
    ],
    numeratorNumber: 30,
    denominatorNumber: 60,
    numeratorColor: 'blue',
    denominatorColor: 'lightgray',
    barThikness: 1,
  },
};

export const WithCustomPinIcon: StoryType = {
  args: {
    pinCells: [
      { cellIndex: 39, label: '패널티', hasPin: true, PinIcon: DefaultIcon },
      { cellIndex: 49, label: '인센티브', hasPin: true, PinIcon: IncentiveIcon },
      { cellIndex: 59, label: '워크인 혜택', hasPin: true, PinIcon: WalkinIcon },
    ],
    colorCells: [
      { cellIndex: 39, cellColor: 'red' },
      { cellIndex: 49, cellColor: 'green' },
      { cellIndex: 59, cellColor: 'orange' },
    ],
    numeratorNumber: 30,
    denominatorNumber: 60,
    numeratorColor: 'blue',
    denominatorColor: 'lightgray',
    barThikness: 1,
  },
};
