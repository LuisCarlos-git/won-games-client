import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import FormSignUp from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText(/e-mail/i)).toHaveAttribute(
      'type',
      'email'
    );
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute(
      'type',
      'password'
    );

    expect(screen.getByPlaceholderText('Confirm password')).toHaveAttribute(
      'type',
      'password'
    );

    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument();
  });

  it('should render sign up text and link', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument();
  });
});
