import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Profile from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}));

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />;
  }
}));

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem Ipsum</Profile>);

    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument();
  });
});