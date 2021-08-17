import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Profile from '.';

describe('<Base />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Profile />);
  });
});
