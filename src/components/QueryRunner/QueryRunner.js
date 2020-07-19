// React
import React from "react";
// Apollo GraphQL hook
import { useQuery } from "@apollo/react-hooks";
// GraphQL
import gql from "graphql-tag";

const allBurritos = gql`
  query allBurritos {
    burritos {
      name
      rating
    }
  }
`;

export default function QueryRunner() {
  const { loading, error, data } = useQuery(allBurritos);

  console.log(data);

  return (
    <div>
      <h2>Let's Get Some Data!</h2>
      {loading && <div>loading</div>}
      {error && <div>{`encountered an error: ${error}`}</div>}
      {data && <div>{`successfully queried ${data.length} burritos.`}</div>}
      <div>
        {"loading" ||
          data.map(function (burrito) {
            return <p>{burrito.name}</p>;
          })}
      </div>
    </div>
  );
}
