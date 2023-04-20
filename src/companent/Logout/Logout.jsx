import React, { useState } from 'react';
import app from '../../firebase';
import { getAuth, signOut } from 'firebase/auth';

const Logout = () => {

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const logoutHendelSubmit = (event) => {
        event.preventDefault()
        const auth = getAuth(app)
        setError('')
        setSuccess('')
        signOut(auth)
            .then(() => {
                setSuccess('success the logOut ')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    return (
        <div className='w-[50%] mx-auto  my-4 border p-4 border-dashed rounded-b-md'>
            <form onSubmit={logoutHendelSubmit}>
                <label>Email :</label>
                <input className='w-[50%] mb-2' type="email" name='email' id='email' placeholder='your email' required /> <br />
                <input className='w-[50%] bg-orange-600 text-white rounded-md' type="submit" value='Submit' />
            </form>
            <p className='text-green-600 text-xl my-2'>{success}</p>
            <p className='text-orange-600 text-xl my-2'>{error}</p>
        </div>
    );
};

export default Logout;