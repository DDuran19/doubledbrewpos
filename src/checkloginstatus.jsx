import { useState } from "react";
import Login from './login/Login.jsx'
import Pos_app from './pos/Pos_app.jsx';

export default function CheckLoginStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLoginSuccess = () => {
        console.log("Check Login Status returned True")
      setLoggedIn(true);
    };
  
    return (
      <>
        <div className="">
          {loggedIn ? (
            <Pos_app />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
        </div>
      </>
    );
  }