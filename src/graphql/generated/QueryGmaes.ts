/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGmaes
// ====================================================

export interface QueryGmaes_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGmaes_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGmaes_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryGmaes_games_cover | null;
  developers: QueryGmaes_games_developers[];
  price: number;
}

export interface QueryGmaes {
  games: QueryGmaes_games[];
}

export interface QueryGmaesVariables {
  limit: number;
}
