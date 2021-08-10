import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import GameDetails from '.';

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDetails  />)
  });
});
