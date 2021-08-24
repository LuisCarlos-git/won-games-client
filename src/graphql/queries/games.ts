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
