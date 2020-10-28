import 'jest-styled-components';
import { screen } from '@testing-library/react';

import Logo from '.';

import { renderWithTheme } from 'utils/tests/helper';

describe('<Logo />', () => {
  it('should render a white rander by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render a normal size when color is default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('should render a large when size is passed', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('should render a bigger logo without text on mobile if isMobile true', () => {
    renderWithTheme(<Logo isMobile />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    );
  });
});
