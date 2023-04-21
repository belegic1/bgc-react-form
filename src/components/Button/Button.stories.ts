import type { Meta, StoryObj } from '@storybook/react';

import  Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta =  {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    onClick: () => console.log("hello")
  },
};
export const Error: Story = {
  args: {
    children: 'Button',
    variant: 'error',
  },
};