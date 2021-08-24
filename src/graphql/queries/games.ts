import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
  query QueryGmaes($limit: Int!) {
    games(limit: $limit) {
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`;

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      name
      short_description
      description
      price
      rating
      platforms {
        name
      }
      release_date
      categories {
        name
      }
      publisher {
        name
      }
      developers {
        name
      }
      cover {
        src: url
      }
      gallery {
        src: url
        label: alternativeText
      }
    }
  }
`;
