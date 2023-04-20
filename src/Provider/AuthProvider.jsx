
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase-2';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    // create user with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sing in with email and password
    const singInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    // sing out in web pag
    const logOut = ()=>{
        return signOut(auth)
    }
    const userAuth = {
        user,
        createUser,
        singInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={userAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;