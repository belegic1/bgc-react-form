import type { Meta, StoryObj } from '@storybook/react';

import FormInput from './FormInput';

const meta = {
  title: 'Component/FormInput',
  component: FormInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    name: "Username",
    type: "text",
  },
};
