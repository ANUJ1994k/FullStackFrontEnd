import React, { useState } from 'react';
import axios from 'axios';

function Auth() {
    const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', formData);
            localStorage.setItem('token', res.data.token); // Token stored
            if (formData.rememberMe) {
                localStorage.setItem('user', JSON.stringify(res.data.user)); // Remember user
            }
            alert('Login successful');
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <label>
                <input type="checkbox" name="rememberMe" onChange={handleChange} /> Remember Me
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default Auth;
