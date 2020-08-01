import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query {
    viewer {
      login
    }
  }
`;
const Top = () => {
  const { loading, error, data } = useQuery(GET_USER, { variables: {} });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error</p>;

  return <p>{data.viewer.login}</p>;
};

export default Top;
