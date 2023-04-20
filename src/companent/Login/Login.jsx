import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Login = () => {
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const loginHendelSubmit = (event)=>{
        event.preventDefault()
        const form = event.target;
        const emial = form.email.value;
        const password = form.password.value;
        const auth = getAuth(app)
        setSuccess('');
        setError('')
        signInWithEmailAndPassword(auth, emial, password)
        .then(result =>{
            const userResult = result.user;
            console.log(userResult);
            setSuccess('Success the login in email')
        })
        .catch(error =>{
            console.log(error.message);
            setSuccess('')
            setError(error.message)
        })
    }
    return (
        <div className='w-[50%] mx-auto  my-4 border p-4 border-dashed rounded-b-md'>
            <form className='relative' onSubmit={loginHendelSubmit}>
                <label>Email :</label>
                <input className='w-[50%] mb-2' type="email" name='email' id='email' placeholder='your email' required/> <br />
                <label>Password :</label>
                {
                    open? <input className='w-[50%] mb-2' type="text" name='password' id='password' placeholder='your password' required/>
                    : <input className='w-[50%] mb-2' type="password" name='password' id='password' placeholder='your password' required/>
                }
                <span onClick={()=> setOpen(!open)}>
                    {
                        open?<EyeIcon className=" absolute top-8 right-28 h-6 w-6 text-orange-500" />
                        :<EyeSlashIcon className=" absolute top-8 right-28 h-6 w-6 text-green-500" />
                    }
                </span>
                 <br />
                <input className='w-[50%] bg-orange-600 text-white rounded-md' type="submit" value='Submit' />
                <h1 className='text-xl text-orange-600 my-2'>pleach register the wedsite <Link to='/register' className='text-green-600 hover:border-b-2 border-green-600'>Register</Link></h1>
            </form>
            <p className='text-green-600 text-xl my-2'>{success}</p>
            <p className='text-orange-600 text-xl my-2'>{error}</p>
        </div>
    );
};

export default Login;