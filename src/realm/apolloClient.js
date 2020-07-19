// https://docs.mongodb.com/realm/graphql/connect/
// -- I decided to split up the Apollo creation file a little bit
// -- I create the ApolloClient here and the Realm App
// -- I will create the ApolloProvider in App.js

// Apollo
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from "apollo-link-context";
// Realm
import * as RealmWeb from "realm-web";

// Realm app creation
const APP_ID = process.env.REACT_APP_REALM_ID;
const app = new RealmWeb.App({
  id: APP_ID,
  baseUrl: "https://realm.mongodb.com",
});

// Add an Authorization header with a valid user access token to all GraphQL requests
const authorizationHeaderLink = setContext(async (_, { headers }) => {
  if (app.currentUser) {
    //Refreshing custom data also refreshes the access token
    await app.currentUser.refreshCustomData();
  } else {
    // If no user is logged in, log in an anonymous user
    await app.logIn(RealmWeb.Credentials.anonymous());
  }
  // Get a valid access toekn for the current user
  const { accessToken } = app.currentUser;
  console.log("currentUser", accessToken, app.currentUser);

  // Set the Authorization header, presevering any other headers (the spread operator does this)
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
});

// Construct a new Apollo HttpLink that connects to your app's GraphQL endpoint
const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;
const httpLink = new HttpLink({ uri: graphql_url });

// Create Apollo Client
const client = new ApolloClient({
  link: authorizationHeaderLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// exporting variables
export { app, client };
