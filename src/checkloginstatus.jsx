import { useState } from "react";
import Login from './login/Login.jsx'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

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
                {loggedIn ? (
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                ) : (
                    <Login onLoginSuccess={handleLoginSuccess} />
                )}
            </div>
        </>
    );
}