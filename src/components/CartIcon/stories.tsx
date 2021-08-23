import { Story, Meta } from '@storybook/react/types-6-0';
import CartIcon, { CartIconProps } from '.';

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    background: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<CartIconProps> = (args) => <CartIcon {...args} />;
export const WithBadge: Story<CartIconProps> = (args) => <CartIcon {...args} />;

WithBadge.args = {
  quantity: 12
};
