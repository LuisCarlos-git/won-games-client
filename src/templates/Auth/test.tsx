import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Auth from '.';

describe('<Auth />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Auth  />)
  });
});
