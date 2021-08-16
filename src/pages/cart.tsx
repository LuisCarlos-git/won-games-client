import Cart, { CartProps } from 'templates/Cart';

import itemsMock from 'components/CartList/mock';
import PaymentOptionsMock from 'components/PaymentOptions/mock';
import gamesMock from 'components/GamerCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      cards: PaymentOptionsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: itemsMock,
      total: '$430,00'
    }
  };
}
