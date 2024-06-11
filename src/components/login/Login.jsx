import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async(e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            window.location.href = "/dashboard";
            toast.success("User Registered Successfuly", {position:"top-center",});

        } catch (error) {
            console.log(error.message);
            toast.success(error.message, {position:"top-center",});

        }
    };



    return (
        <div className="wrapper">
            <div className="form-box">
                <form action="" onSubmit={handleLogin}>
                    <h1>Log In</h1>
                    <div className="input-box">
                        <input
                         type="email" 
                         placeholder="Email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required/>
                    </div>
                    <div className="input-box">
                        <input
                         type="password"
                         placeholder="Password" 
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}

                         required/>
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