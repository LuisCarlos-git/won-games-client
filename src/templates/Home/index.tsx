import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import BannerSlider from 'components/BannerSlider';
import Showcase from 'components/Showcase';

import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighligth: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighligth: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      games={mostPopularGames}
      title="Most Popular"
      highlight={mostPopularHighlight}
    />

    <S.SectionUpcoming>
      <Showcase games={upcommingGames} title="Upcomming" />
      <Showcase games={upcommingMoreGames} highlight={upcommingHighligth} />
    </S.SectionUpcoming>

    <Showcase title="Free games" games={freeGames} highlight={freeHighligth} />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;
