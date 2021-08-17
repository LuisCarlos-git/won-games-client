import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import cardsMock from 'components/PaymentOptions/mock';

import CardsList from '.';

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={cardsMock} />);

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      'https://github.com/Won-Games/client/blob/e5ad4622b684950a4fdb1c45c5b73e6715e73971/public/img/master-card.png?raw=true'
    );

    expect(screen.getByText(/4325/i)).toBeInTheDocument();
  });
});
