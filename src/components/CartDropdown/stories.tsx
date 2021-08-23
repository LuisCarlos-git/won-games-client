import { Story, Meta } from '@storybook/react/types-6-0';
import CartDropdown, { CartDropdownProps } from '.';
import cartListMock from '../CartList/mock';

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<CartDropdownProps> = (args) => (
  <div
    style={{
      maxWidth: '98%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'flex-end'
    }}
  >
    <CartDropdown {...args} />
  </div>
);

Default.args = {
  cartItems: cartListMock,
  total: '$ 340,00'
};
