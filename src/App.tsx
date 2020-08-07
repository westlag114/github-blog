import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";
import Top from "./pages/top";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Top />
    </ApolloProvider>
  );
}

export default App;
