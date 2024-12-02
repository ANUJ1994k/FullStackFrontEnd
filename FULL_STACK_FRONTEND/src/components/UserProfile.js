import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/auth');
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.username}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
}

export default UserProfile;
