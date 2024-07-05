import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            await axios.post("http://localhost:4000/signup", {
                username, email, password
            });
            navigate('/', { state: { message: 'Account created successfully!' } });
            // alert("Signup successful!");

        } catch (e) {
            alert("Signup failed!");
            console.log(e);
        }
    }

    return (
        <>
            <div className="signup-container">
                <h1>Signup</h1>
                <form action="POST">
                    <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" id="usernameInput" /> <br /><br />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="emailInput" /> <br /><br />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="passwordInput" /> <br /><br />
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" id="confirmPasswordInput" /> <br />
                    <br />
                    <button onClick={submit}>Signup</button> <br /><br />
                    Already have an account? &nbsp;
                    <button><Link to="/login">Login</Link></button>
                </form>
            </div>
        </>
    );
}

export default Signup;