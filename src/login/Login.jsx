import { useState } from "react";
import signIn from "./auth_signin_password.js";
import PropTypes from 'prop-types';

export default function Login({ onLoginSuccess }) {
    const [loading, setLoading] = useState(false);

    const handleLoginFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const loginSuccessful = await signIn(email, password);
            if (loginSuccessful) {
                onLoginSuccess(loginSuccessful);
            } else {
                window.alert("Invalid login. Please check your credentials.");
            }
        } catch (error) {
            window.alert("An error occurred during login. Please try again.");
        } finally {
            setLoading(false);
        }


    };

    return (
        <>
            <div className="loginContainer">
                <h2>Login</h2>
                <form id="loginForm" onSubmit={handleLoginFormSubmit} action="pos/pos_app.html" method="POST">
                    <div className="form-group">
                        <label htmlFor="username">Email Address</label>
                        <input type="text" id="username" placeholder="Enter your registered email address" required autoComplete="true" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required autoComplete="true"></input>
                    </div>
                    <div className="form-group">
                        <Button loading={loading} />
                    </div>
                </form>
            </div>
        </>
    );

}
function Button({ loading }) {
    return (
      <button type="submit" className={loading ? "disabled" : ""}>
        {loading ? "Logging in..." : "Login"}
      </button>
    );
  }
  

Login.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
}

Button.propTypes = {
    loading: PropTypes.bool.isRequired,
};