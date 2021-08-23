import Divider from 'components/Divider';
import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';
import * as S from './styles';
import CartList, { CartListProps } from 'components/CartList';
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';
import Empty from 'components/Empty';
import React from 'react';

export type CartProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items = [],
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({});
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>
        <Divider />
        <S.Content>
          {items.length ? (
            <React.Fragment>
              <CartList items={items} total={total} />
              <PaymentOptions cards={cards} handlePayment={handlePayment} />
            </React.Fragment>
          ) : (
            <Empty
              title="Your cart is empty"
              description="go back to the store"
            />
          )}
        </S.Content>
      </Container>
      <Showcase
        title="You may like this games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;
