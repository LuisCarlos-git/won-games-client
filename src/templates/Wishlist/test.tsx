import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import Wishlist, { WishlistProps } from '.';

import gamesMock from 'components/GamerCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props: WishlistProps = {
  games: gamesMock,
  highlight: highlightMock,
  recommendedGames: gamesMock
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="showcase" />;
  }
}));

describe('<Whishlist />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(screen.getByTestId('showcase')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
  });

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist recommendedGames={gamesMock} highlight={highlightMock} />
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument();
  });
});
