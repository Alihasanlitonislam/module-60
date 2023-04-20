import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <Link className="btn btn-ghost normal-case text-xl">Auth Master</Link>
            <Link to = '/'  className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to = 'register'  className="btn btn-ghost normal-case text-xl">Register</Link>
            <Link to = 'login'  className="btn btn-ghost normal-case text-xl">Login</Link>
        </div>
    );
};

export default Header;