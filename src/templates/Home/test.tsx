import '../../../.jest/match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GamerCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock
};

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="showcase"></div>;
    }
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="bannerSlider"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should render banner and showcase', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getAllByTestId('showcase')).toHaveLength(5);

    expect(screen.getByTestId('bannerSlider')).toBeInTheDocument();
  });
});
