import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from './AuthProvider';

export const crudContext = createContext()

const DataProvider = ({children}) => {
    const [userData, setUserData] = useState({})

    const {user} = useContext(AuthContext)

    // create user and store data to the database 
    async function createUserForDB(getUserDetails) {
        if(getUserDetails){
        await fetch('http://localhost:5000/createuser', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(getUserDetails)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Account created')
            console.log(data)
        })
        }
    }



    // function GetUserData() {
        useEffect(() => {
            fetch(`http://localhost:5000/userdata?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                return data
            })
        }, [user?.email])
    // }



    //[*****************************************************************************************]
    const datasValue = {
        createUserForDB,
        userData,
    }
    //[*****************************************************************************************]

    return (
        <div>
            <crudContext.Provider value={datasValue}>
                {children}
            </crudContext.Provider>
        </div>
    );
};

export default DataProvider;