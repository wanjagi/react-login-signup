import React from "react";
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {
    return (
        <div className="wrapper">
            <div className="form-box">
                <form action="">
                    <h1>Log In</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Log in</button>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>

                </form>
                


            </div>
            
        </div>


    );
};

export default Login;