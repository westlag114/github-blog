import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetloginUser {
    viewer {
      login
      bio
      twitterUsername
    }
  }
`;
