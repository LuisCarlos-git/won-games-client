import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Showcase from '.';

import HighlightMock from 'components/Highlight/mock';
import GamerCardSliderMock from 'components/GamerCardSlider/mock';

describe('<Showcase />', () => {
  it('should render the showcase whithin title', () => {
    renderWithTheme(<Showcase title="title" />);

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
  });

  it('should render the showcase whithin hightlight', () => {
    renderWithTheme(<Showcase highlight={HighlightMock} />);

    expect(
      screen.getByRole('heading', { name: /Read dead is back!/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /by now/i })).toBeInTheDocument();
  });

  it('should render the showcase whithin geme slide', () => {
    const { container } = renderWithTheme(
      <Showcase games={GamerCardSliderMock} />
    );

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });
});
