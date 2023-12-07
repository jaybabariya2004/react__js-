import React from 'react'
import React, { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Simulating a login action (here, just checking if both fields are filled)
        if (username && password) {
            setIsLoggedIn(true);
            alert(`Logged in as ${username}`);
        } else {
            alert('Please fill in both username and password');
        }
    };

    const handleLogout = () => {
        // Simulating a logout action
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            {!isLoggedIn ? (
                <div>
                    <h1>Login Page</h1>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h1>Welcome, {username}!</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default LoginPage
