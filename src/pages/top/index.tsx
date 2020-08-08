import React from "react";
import { useGetloginUserQuery } from "../../generated/types.d";

const Top = () => {
  const { data, loading, error } = useGetloginUserQuery();

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error</p>;

  return <p>{data?.viewer.login}</p>;
};

export default Top;
