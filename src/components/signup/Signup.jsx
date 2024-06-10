import React from "react";
import "./signup.css"
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="wrapper">
            <div className="form-box">
                <form action="">
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" />I agree to the terms and conditions</label>
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <Link to="/login">Log In</Link></p>
                    </div>

                </form>
                


            </div>
            
        </div>


    );
};

export default Signup;