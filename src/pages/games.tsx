import Games, { GamesProps } from 'templates/Games';
import gamesMock from 'components/GamerCardSlider/mock';
import exploreMock from 'components/ExploreSidebar/mock';

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      exploreFields: exploreMock
    }
  };
}
