// How to connect to the GraphQL SDK: https://docs.mongodb.com/realm/graphql/connect/
// React
import React from "react";
import "./App.css";
// Components
import UserLogin from "./components/UserLogin";
import QueryRunner from "./components/QueryRunner";
// Apollo and Realm
import { app, client } from "./realm/realmStartup";
// Apollo components
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Welcome to the Realm.</h1>
        <UserLogin app={app} />
        <QueryRunner />
      </div>
    </ApolloProvider>
  );
}

export default App;
