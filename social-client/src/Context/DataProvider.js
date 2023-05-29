import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const crudContext = createContext()

const DataProvider = ({children}) => {

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

    const datasValue = {
        createUserForDB
    }

    return (
        <div>
            <crudContext.Provider value={datasValue}>
                {children}
            </crudContext.Provider>
        </div>
    );
};

export default DataProvider;