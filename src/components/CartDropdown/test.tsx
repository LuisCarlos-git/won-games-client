import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import cartListMock from '../CartList/mock';

import CartDropdown from '.';

const props = {
  cartItems: cartListMock,
  total: '$ 340,00'
};

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="cartlist" />;
  }
}));

jest.mock('components/CartIcon', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="carticon" />;
  }
}));

describe('<CartDropdown />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartDropdown {...props} />);

    expect(screen.getByTestId('cartlist')).toBeInTheDocument();
    expect(screen.getByTestId('carticon')).toBeInTheDocument();
  });
});
