// Execute GraphQL Operation: https://docs.mongodb.com/realm/graphql/execute/
// React
import React from "react";
// Apollo GraphQL hook
// Apollo documentation for this hook: https://www.apollographql.com/docs/react/data/queries/
import { useQuery } from "@apollo/react-hooks";
// GraphQL
import gql from "graphql-tag";

const GET_BURRITOS = gql(`
  query GetBurritos {
    burritos {
      _id
      name
      rating
    }
  }
`);

export default function QueryRunner() {
  const { loading, error, data } = useQuery(GET_BURRITOS);

  if (loading) {
    return "Loading...";
  }
  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <div>
      <h2>My Favorite Burritos</h2>
      {data.burritos.map((burrito) => (
        <p key={burrito._id}>{burrito.name}</p>
      ))}
    </div>
  );
}
