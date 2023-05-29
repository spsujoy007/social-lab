import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

const {getAuth} = 'firebase/auth'
export const AuthContext = createContext()
// const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('sujoy')


    const authValue = {
        user
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