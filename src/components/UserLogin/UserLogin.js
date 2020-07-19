import React, { useState } from "react";
import * as RealmWeb from "realm-web";

const realmCreditials = RealmWeb.Credentials;

export default function UserLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const realmApp = props.app;
  console.log(realmApp);

  async function handleSubmit(event) {
    event.preventDefault();
    const credentials = realmCreditials.emailPassword(email, password);
    try {
      const user = await realmApp.logIn(credentials);
      setCurrentUser(user);
      console.log(user);
      console.log(currentUser);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
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
