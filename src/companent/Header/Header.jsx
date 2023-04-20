import React from 'react';
import {Link} from'react-router-dom'
const Header = () => {
    return (
        <div className='flex gap-2 justify-center mt-3'>
            <Link to='/' className='py-2 px-7 bg-orange-400 text-white text-2xl font-medium rounded-md'>Home</Link>
            <Link to='register' className='py-2 px-7 bg-orange-400 text-white text-2xl font-medium rounded-md'>Register</Link>
            <Link to='login' className='py-2 px-7 bg-orange-400 text-white text-2xl font-medium rounded-md'>Login</Link>
            <Link to='logout' className='py-2 px-7 bg-orange-400 text-white text-2xl font-medium rounded-md'>Log Out</Link>
        </div>
    );
};

export default Header;