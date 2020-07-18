import React, {useState} from "react";
// import Realm from "realm-web";

export default function UserLogin(userInfo){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    console.log(username, password);
  }

  return(
    <div>
      <h1>Welcome to the Realm.</h1>
      <h2>Logged in with user id: {userInfo.id}</h2>
      {/* get user login information */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input 
            type="text"
            value={username} 
            id="username" 
            placeholder="Username" 
            onChange={event => setUsername(event.target.value)}/>
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