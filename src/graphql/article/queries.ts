import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticles {
    viewer {
      repository(name: "github-blog") {
        issues(first: 5) {
          nodes {
            title
            body
          }
        }
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle {
    viewer {
      repository(name: "github-blog") {
        issue(number: 3) {
          title
          body
        }
      }
    }
  }
`;
