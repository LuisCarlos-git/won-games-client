import { gql, useQuery } from '@apollo/client';
import Home from 'templates/Home';
import { HomeTemplateProps } from 'templates/Home';

import bannersMock from 'components/BannerSlider/mock';
import sliderMock from 'components/GamerCardSlider/mock';
import HighlightMock from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query GetGames {
      games {
        name
      }
    }
  `);

  return <Home {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: sliderMock,
      mostPopularHighlight: HighlightMock,
      mostPopularGames: sliderMock,
      upcommingGames: sliderMock,
      upcommingMoreGames: sliderMock,
      upcommingHighligth: HighlightMock,
      freeGames: sliderMock,
      freeHighligth: HighlightMock
    }
  };
}
