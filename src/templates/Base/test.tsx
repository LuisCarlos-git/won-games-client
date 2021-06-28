import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Base from '.';

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="menu"></div>;
    }
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="footer"></div>;
    }
  };
});

describe('<Base />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(
      <Base>
        <h1>teste</h1>
      </Base>
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /teste/i })).toBeInTheDocument();
  });
});
