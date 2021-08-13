import { Story, Meta } from '@storybook/react/types-6-0';
import GameItem, { GameItemProps } from '.';
import props from './mock';

export default {
  title: 'GameItem',
  component: GameItem
} as Meta;

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />;
export const WithPayment: Story<GameItemProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameItem {...args} />
  </div>
);

Default.args = props;
WithPayment.args = {
  ...props,
  paymentInfo: {
    flag: 'mastercard',
    img:
      'https://github.com/Won-Games/client/blob/e5ad4622b684950a4fdb1c45c5b73e6715e73971/public/img/master-card.png?raw=true',
    cardNumber: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  },
  downloadLink: 'http://www.link.com'
};
