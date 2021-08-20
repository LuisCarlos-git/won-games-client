import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Explore from '.';

describe('<Explore />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Explore  />)
  });
});
