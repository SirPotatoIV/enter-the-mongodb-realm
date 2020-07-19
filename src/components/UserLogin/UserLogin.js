// Realm Authentication: https://docs.mongodb.com/realm/web/authenticate/
// React form with hooks: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
// React
import React, { useState } from "react";
//Realm
import * as RealmWeb from "realm-web";
const realmCreditials = RealmWeb.Credentials;

// Creates React functional component
export default function UserLogin(props) {
  // this is the Realm app instance created in ../../realm/apolloClient
  // -- used to get the method needed to authenticate the user and store the the user
  const app = props.app;
  // create state with hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("Please Login");
  //update if error occurs
  const error = "";

  // handle submission of login creditials and send to Realm to authorize
  async function handleSubmit(event) {
    event.preventDefault();
    const credentials = realmCreditials.emailPassword(email, password);
    try {
      console.log("login attempted");
      console.log(app);
      // logs user into Realm app. Doesn't need to be stored to state. It will be on the App object
      await app.logIn(credentials);
      setCurrentUser(app.currentUser.profile.email);
    } catch (err) {
      // need to add better error handling in the future. Realm tutorial has good example.
      console.log(err);
    }
  }

  const logOut = async function () {
    try {
      await app.currentUser.logOut();
      setCurrentUser("Please Log In");
    } catch (err) {
      console.log(`Error logging out: ${err}`);
    }
  };

  // html "template"
  return (
    <div>
      <p>Current User: {currentUser}</p>
      <p>{error}</p>
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
      <div>
        <button type="button" onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}
