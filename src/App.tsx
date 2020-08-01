import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` },
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        viewer {
          login
        }
      }
    `,
  })
  .then((result) => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Apollo App</h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
