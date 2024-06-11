import React from "react";
import "./signup.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const Signup = () => {

    //create the states for username emmail and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    // create function to handle register
    const handleRegister = async (e)=>{
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            console.log("User Registered Successfully")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="wrapper">
            <div className="form-box">
                <form action="" onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input
                         type="text" 
                         placeholder="Username"
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}
                         required
                        />
                    </div>
                    <div className="input-box">
                        <input
                         type="email" 
                         placeholder="Email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                        />
                    </div>
                    <div className="input-box">
                        <input
                         type="password" 
                         placeholder="Password" 
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         required
                        />
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