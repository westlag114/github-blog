import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
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

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
