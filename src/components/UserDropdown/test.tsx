import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should render the links', () => {
    renderWithTheme(<UserDropdown />);

    expect(screen.getByText(/my profile/i)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });

  it('should render the username is correctly', () => {
    renderWithTheme(<UserDropdown username="Luis Carlos" />);

    expect(screen.getByText(/Luis Carlos/i)).toBeInTheDocument();
  });
});
