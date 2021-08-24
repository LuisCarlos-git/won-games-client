import Games, { GamesProps } from 'templates/Games';
import exploreMock from 'components/ExploreSidebar/mock';
import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES } from 'graphql/queries/games';

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  });

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game: any) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
        price: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
      })),
      exploreFields: exploreMock
    }
  };
}
