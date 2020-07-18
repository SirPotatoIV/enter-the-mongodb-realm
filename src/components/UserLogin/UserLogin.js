import React, {useState} from "react";
// import Realm from "realm-web";

export default function UserLogin(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const realmCreditials = props.realmCreditials;
  const realmApp = props.app;

  async function handleSubmit(event){
    event.preventDefault();
    const credentials = realmCreditials.emailPassword(email, password)
    try{
      const user = await realmApp.logIn(credentials);
      console.log(user)
    } catch(err){
      console.log(err);
    }
    console.log(email, password);
  }

  return(
    <div>
      <h1>Welcome to the Realm.</h1>
      <h2>Logged in with user id: "NEED TO ADD USER INFO HERE"</h2>
      {/* get user login information */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input 
            type="email"
            value={email} 
            id="email" 
            placeholder="E-mail" 
            onChange={event => setEmail(event.target.value)}/>
        </label>
        <label htmlFor="password">
          <input 
            type="password"
            value={password} 
            id="password" 
            placeholder="Password" 
            onChange={event => setPassword(event.target.value)}/>
        </label>
        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}