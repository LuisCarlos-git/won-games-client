import { Story, Meta } from '@storybook/react/types-6-0';
import CartList, { CartListProps } from '.';

import mockItems from './mock';

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
);

export const hasButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
);

export const NoItems: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
);
