import type { Meta, StoryObj } from '@storybook/react';

import Form from "./Form"

const meta = {
  title: 'Component/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    initialValues: {
      email: 'example@alea.com',
      age: 30,
      name: 'John Doe',
      phone: {
        ext: '00387',
        number: '65/123-456',
      },
    },
    onSubmit: () => console.log('hello'),
    children: "Hello boys"
  },
};

