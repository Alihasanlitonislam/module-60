import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user, logOut } = useContext(AuthContext)
    const hendelSingout = ()=>{
        logOut()
        .then(() =>{
            console.log('success the sing out in pag');
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <h1>this is home pag </h1>
            {
                user ? <>
                    <span>{user.email}</span>
                    <button onClick={hendelSingout} className="btn btn-xs">Sing Out</button>
                </> 
                : <Link to='/login' className="btn btn-xs">Login</Link>
            }
        </div>
    );
};

export default Home;