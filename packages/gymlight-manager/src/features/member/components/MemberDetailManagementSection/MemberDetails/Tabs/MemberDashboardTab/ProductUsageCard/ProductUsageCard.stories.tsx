import { Meta, StoryObj } from '@storybook/react';
import ProductUsageCard from './ProductUsageCard';

const meta: Meta<typeof ProductUsageCard> = {
  component: ProductUsageCard,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProductUsageCard>;

export const Default: Story = {};
