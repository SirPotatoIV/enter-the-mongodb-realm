// https://docs.mongodb.com/realm/graphql/connect/
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

console.log(app);

const currentUser = app.currentUser.profile.email;

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Welcome to the Realm.</h1>
        <p>Current User: {currentUser}</p>
        <UserLogin />
        <QueryRunner />
      </div>
    </ApolloProvider>
  );
}

export default App;
