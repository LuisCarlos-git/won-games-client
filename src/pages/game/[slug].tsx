import { useRouter } from 'next/router';
import Game, { GameTemplateProps } from 'templates/Game';
import galleryMock from 'components/Gallery/mock';
import gamesMock from 'components/GamerCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import { QueryGmaes, QueryGmaesVariables } from 'graphql/generated/QueryGmaes';
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug';
import { GetStaticProps } from 'next';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGmaes, QueryGmaesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  });

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  });

  if (!data.games.length) return { notFound: true };

  const game = data.games[0];

  return {
    props: {
      revalidate: 60,
      cover: game.cover
        ? `http://localhost:1337${game.cover?.src}`
        : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      gameDetails: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcommingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recomendedGames: gamesMock
    }
  };
};
