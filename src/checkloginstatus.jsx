import { useState } from "react";
import Login from './login/Login.jsx'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Startup from "./components/Startup.jsx";
import { useUser } from "./context/UserContext.jsx";

export default function CheckLoginStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
    const { setUser } = useUser();

    const handleLoginSuccess = (user) => {
        setUser(user);
        setLoggedIn(true);
    };
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