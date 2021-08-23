import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />);

    expect(screen.getByLabelText(/cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={25} />);

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText(/25/i)).toBeInTheDocument();
  });
});
