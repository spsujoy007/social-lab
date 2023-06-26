import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from './AuthProvider';
import { useQueries, useQuery } from 'react-query';
import LoaderAnimation from '../Components/LoaderAnimation';

export const crudContext = createContext()

const DataProvider = ({children}) => {
    // const [callRefetch, setCallRefetch] = useState(false)
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
        })
        }
    }

    // const {data: getuserinfo = [], isLoading} = useQuery({
    //     queryKey: ['getuserinfo'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/userdata?email=${user?.email}`)
    //         const data = await res.json()
    //         return data
    //     },
    // })

    // if(isLoading){
    //     return <LoaderAnimation></LoaderAnimation>
    // }

    const datasValue = {
        createUserForDB,
        // getuserinfo
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