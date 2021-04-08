import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/e-mail/i)).toHaveAttribute(
      'type',
      'email'
    );
    expect(screen.getByPlaceholderText(/password/i)).toHaveAttribute(
      'type',
      'password'
    );

    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument();
  });

  it('should render forgot link', () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /Forgot your password?/i })
    ).toBeInTheDocument();
  });

  it('should render sign up text and link', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/Don’t have an account\?/i)).toBeInTheDocument();
  });
});
