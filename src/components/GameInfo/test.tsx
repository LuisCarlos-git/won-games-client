import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import GameInfo from '.';
import props from './mock';

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />);

    const heading = screen.getByText(/game title/i);
    const price = screen.getByText(/\$150,00/i);
    const description = screen.getByText(/Game description/i);

    expect(heading).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    const buyButton = screen.getByRole('button', { name: /add to cart/i });
    const whishlistButton = screen.getByRole('button', { name: /whishlist/i });

    expect(buyButton).toBeInTheDocument();
    expect(whishlistButton).toBeInTheDocument();
  });
});
