import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from 'styled-icons/material-outlined';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  },
  component: Button
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;
Default.args = {
  children: 'By now'
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  size: 'small',
  children: 'By now',
  icon: <AddShoppingCart />
};
