import React from "react";
import { useGetloginUserQuery } from "../../generated/graphql-client-api";

const Top = () => {
  const { data, loading, error } = useGetloginUserQuery();

  if (loading || !data) return <p>Loading ...</p>;
  if (error) return <p>error</p>;

  return (
    <div>
      <p>{data.viewer.login}</p>
      <p>{data.viewer.twitterUsername}</p>
    </div>
  );
};

export default Top;
