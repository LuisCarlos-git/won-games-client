import Wishlist, { WishlistProps } from 'templates/Wishlist';
import gamesMock from 'components/GamerCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function WhishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />;
}

export function getStaticProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      highlight: highlightMock,
      games: gamesMock
    }
  };
}
