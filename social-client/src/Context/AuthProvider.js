import React, { createContext, useContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import LoaderAnimation from '../Components/LoaderAnimation';
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('sujoy')
    const [loading, setLoading] = useState(false)
    

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [])

    
    const authValue = {
        user,
        createUser,
        logOut,
        loginuser,
        loading,
        setLoading

    }

    return (
        <div>
            <AuthContext.Provider value={authValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;