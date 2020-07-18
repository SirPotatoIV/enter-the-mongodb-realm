import React from 'react';
import * as RealmWeb from 'realm-web';

import UserLogin from "./components/UserLogin/UserLogin";

import './App.css';

const realmId = process.env.REACT_APP_REALM_ID;
const app = new RealmWeb.App({id: realmId});
console.log(app);

// console.log(app);

function App() {
  return (
    <div className="App">
      <UserLogin />
    </div>
  );
}

export default App;
