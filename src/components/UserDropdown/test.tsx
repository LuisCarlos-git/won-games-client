import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helper';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="luis carlos" />);

    userEvent.click(screen.getByText(/luis carlos/i));

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });

  it('should render the username is correctly', () => {
    renderWithTheme(<UserDropdown username="Luis Carlos" />);

    expect(screen.getByText(/Luis Carlos/i)).toBeInTheDocument();
  });
});
