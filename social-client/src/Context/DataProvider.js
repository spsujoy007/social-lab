import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from './AuthProvider';
import { useQueries, useQuery } from 'react-query';

export const crudContext = createContext()

const DataProvider = ({children}) => {

    const {user} = useContext(AuthContext)

    // create user and store data to the database 
    async function createUserForDB(getUserDetails) {
        if(getUserDetails){
        await fetch('https://sociallab-be.vercel.app/createuser', {
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


    const {data: getuserinfo = [], refetch, isLoading} = useQuery({
        queryKey: ['getuserinfo'],
        queryFn: async () => {
            // const res = await fetch(`https://sociallab-be.vercel.app/userdata?email=${user?.email}`)
            const res = await fetch(`https://sociallab-be.vercel.app/userdata?email=sujoypaul728@gmail.com`)
            const data = await res.json()
            return data
        },
    })

    setInterval(() => {refetch()}, 2000)


    const {data: getAllPosts = []} = useQuery({
        queryKey: ['getAllPosts'],
        queryFn: async () => {
            // const res = await fetch(`https://sociallab-be.vercel.app/userdata?email=${user?.email}`)
            const res = await fetch(`https://sociallab-be.vercel.app/allposts`)
            const data = await res.json()
            return data
        },
    })


    



    //[*****************************************************************************************]
    const datasValue = {
        createUserForDB,
        getuserinfo,
        getAllPosts,
        refetch
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