import { Meta, StoryObj } from '@storybook/react';
import ProfileInfo from './ProfileInfo';
/**
 * ### 개요
 *
 *
 */
declare const meta: Meta<typeof ProfileInfo>;
export default meta;
type Story = StoryObj<typeof ProfileInfo>;
export declare const Default: Story;
export declare const Admin: Story;
export declare const Guest: Story;
export declare const Trainer: Story;
