// Realm Authentication: https://docs.mongodb.com/realm/web/authenticate/
// React form with hooks: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
// React
import React, { useState } from "react";
//Realm
import * as RealmWeb from "realm-web";
const realmCreditials = RealmWeb.Credentials;

// Creates React functional component
export default function UserLogin(props) {
  // create state with hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // this is the Realm app instance created in ../../realm/apolloClient
  // -- used to get the method needed to authenticate the user and store the the user
  const realmApp = props.app;

  // handle submission of login creditials and send to Realm to authorize
  async function handleSubmit(event) {
    event.preventDefault();
    const credentials = realmCreditials.emailPassword(email, password);
    try {
      console.log("login attempted");
      console.log(realmApp);
      // logs user into Realm app. Doesn't need to be stored to state. It will be on the App object
      await realmApp.logIn(credentials);
    } catch (err) {
      // need to add better error handling in the future. Realm tutorial has good example.
      console.log(err);
    }
  }

  // html "template"
  return (
    <div>
      <p>Current User: {realmApp.currentUser.email}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            type="email"
            value={email}
            id="email"
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            value={password}
            id="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}
