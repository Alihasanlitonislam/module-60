import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const{singInUser, user} = useContext(AuthContext)
    console.log(user);
    const hendelLoginform = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        singInUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
            form.reset()
        })
        .catch( error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                   </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendelLoginform} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' id='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' id='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <Link to='/register' className='text-blue-600 hover:border-b-2 w-fit border-blue-600'>New To Auth Master ? Please Register</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;