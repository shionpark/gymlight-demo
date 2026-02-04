import type { Meta, StoryObj } from '@storybook/react';
import PhoneInput from './PhoneInput';
declare const meta: Meta<typeof PhoneInput>;
export default meta;
type Story = StoryObj<typeof PhoneInput>;
export declare const Default: Story;
export declare const WithErrorMessage: Story;
export declare const WideInput: Story;
export declare const WithPreselectedNumber: Story;
