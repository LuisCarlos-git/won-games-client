import Games, { GamesProps } from 'templates/Games';
import exploreMock from 'components/ExploreSidebar/mock';
import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGmaes, QueryGmaesVariables } from 'graphql/generated/QueryGmaes';
import { formatPrice } from 'utils/formatPrice';

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGmaes, QueryGmaesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  });

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: game.cover
          ? `http://localhost:1337${game.cover?.url}`
          : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
        price: game.price
      })),
      exploreFields: exploreMock
    }
  };
}
