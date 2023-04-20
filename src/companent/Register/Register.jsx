import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from '../../firebase';

const Register = () => {
    const [error, setError] = useState('')
    const [ success, setSuccess] = useState('')
    const hendelSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const auth = getAuth(app);
        setError('');
        setSuccess('');
        if(!/(?=.*[A-Z])/.test(password)){
            setError('please added at one the uppercatch letter')
        }
        else if(!/(?=.*[a-z])/.test(password)){
            setError('please added at one the lowercatch letter')
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('please added at the one number')
        }
        else if(password.length <=6){
            setError('please enter the minimam 6 digit')
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(resut => {
            const userInfo = resut.user;
            console.log(userInfo);
            setSuccess('success the information ')
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })

    }
    return (
        <div className="w-11/12 mx-auto">
            <h1 className='my-5 text-3xl text-orange-600'>Please Register Form</h1>
            <form onSubmit={hendelSubmit} className="w-[50%] mx-auto">
                <label className=" text-gray-700 font-bold pr-3 mt-2">
                    Name
                </label>
                <input
                    className="shadow mt-2 appearance-none border w-[89%] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                /> <br />
                <label className=" text-gray-700 font-bold pr-3 mt-2">
                    Email
                </label>
                <input
                    className="shadow mt-2 appearance-none border w-[89%] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                /> <br />
                <label className=" text-gray-700 font-bold pr-3 mt-2">
                    Password
                </label>
                <input
                    className="shadow mt-2 appearance-none w-[84%] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    id="password"
                    type="text"
                    placeholder="Password"
                />
                <br />
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value='Register' />
                <p className='my-3 text-green-400'>{success}</p>
                <p className='my-3 text-orange-600'>{error}</p>
            </form>
        </div>
    );
};

export default Register;