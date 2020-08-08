import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/user";

const Top = () => {
  const { loading, error, data } = useQuery(GET_USER, { variables: {} });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error</p>;

  return <p>{data.viewer.login}</p>;
};

export default Top;
