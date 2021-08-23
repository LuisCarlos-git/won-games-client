import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import CartList, { CartListProps } from '.';
import gamesMock from './mock';

const props: CartListProps = {
  items: gamesMock,
  total: 'R$ 300,00'
};

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="card mock" />;
  }
}));

describe('<CartList />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CartList {...props} />);

    expect(screen.getAllByTestId('card mock')).toHaveLength(2);
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument();
  });

  it('should render the button', () => {
    renderWithTheme(<CartList {...props} hasButton />);

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  });
});
