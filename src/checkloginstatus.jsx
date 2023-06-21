import { useState } from "react";
import Login from './login/Login.jsx'
import Pos_app from './pos/Pos_app.jsx';

export default function CheckLoginStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState();
  
    const handleLoginSuccess = (user) => {
        setUser(user)
        setLoggedIn(true);
    };
  
    return (
      <>
        <div className="">
          {loggedIn ? (
            <Pos_app user ={user}/>
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
        </div>
      </>
    );
  }