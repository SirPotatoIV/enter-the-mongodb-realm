// React
import React, { useEffect } from "react";
// Apollo GraphQL hook
import { useQuery } from "@apollo/react-hooks";
// GraphQL
import gql from "graphql-tag";

const allBurritos = gql`
  query allBurritos {
    burritos(query: {}) {
      name
      rating
    }
  }
`;

export default function QueryRunner() {
  const { loading, error, data } = useQuery(allBurritos) || "loading";
  console.log(data);

  return (
    <div>
      <h2>Let's Get Some Data!</h2>
      {loading && <div>loading</div>}
      {error && <div>{`encountered an error: ${error}`}</div>}
      {data && <div>{`successfully queried ${data.length} burritos.`}</div>}
    </div>
  );
}
