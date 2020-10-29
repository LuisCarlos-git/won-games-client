import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import { AddShoppingCart } from 'styled-icons/material-outlined';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium button size by default', () => {
    renderWithTheme(<Button>By now</Button>);

    expect(screen.getByRole('button', { name: /by now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    });
  });

  it('should render  when small size is passed', () => {
    renderWithTheme(<Button size="small">By now</Button>);

    expect(screen.getByRole('button', { name: /by now/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    });
  });

  it('should render  when large size is passed', () => {
    renderWithTheme(<Button size="large">By now</Button>);

    expect(screen.getByRole('button', { name: /by now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    });
  });

  it('should render  when full width is passed', () => {
    renderWithTheme(<Button fullWidth>By now</Button>);

    expect(screen.getByRole('button', { name: /by now/i })).toHaveStyle({
      width: '100%'
    });
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>By now</Button>
    );

    expect(screen.getByText(/by now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
