/* eslint-disable @typescript-eslint/no-empty-function */
import { Story, Meta } from '@storybook/react/types-6-0';
import PaymentOptions, { PaymentOptionsProps } from '.';

import props from './mock';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions
} as Meta;

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ maxWidth: '40rem' }}>
    <PaymentOptions {...args} />
  </div>
);

Default.args = {
  cards: props,
  handlePayment: () => {}
};
