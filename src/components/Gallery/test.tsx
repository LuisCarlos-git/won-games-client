import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Gallery from '.';

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery  />)
  });
});
