import { useState } from "react";
import Login from './login/Login.jsx'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Startup from "./components/Startup.jsx";

export default function CheckLoginStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState();

    const handleLoginSuccess = (user) => {
        setUser(user)
        setLoggedIn(true);
    };
    console.log(user)
    return (
        <>
            <div className="">
                {loggedIn ? (<>
                    <Startup/>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                    </>
                ) : (
                    <Login onLoginSuccess={handleLoginSuccess} />
                )}
            </div>
        </>
    );
}