import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import FormProfile from '.';

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />);

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument();
  });

  it('should render Inputs', () => {
    renderWithTheme(<FormProfile />);

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /e-mail/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your password/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/your new password/i)
    ).toBeInTheDocument();
  });

  it('should render button', () => {
    renderWithTheme(<FormProfile />);

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  });
});
