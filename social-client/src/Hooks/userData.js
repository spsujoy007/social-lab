import React, { useContext } from 'react';
import LoaderAnimation from '../Components/LoaderAnimation';
import { useQuery } from 'react-query';
import { AuthContext } from '../Context/AuthProvider';

const UseUserData = () => {
    const {user, loading} = useContext(AuthContext)
    const {data: getuserinfo = {}, isLoading, refetch} = useQuery({
        queryKey: ['getuserinfo'],
        queryFn: async () => {
            // const res = await fetch(`http://localhost:5000/userdata?email=${user?.email}`)
            const res = await fetch(`http://localhost:5000/userdata/${user?.email}`)
            const data = await res.json()
            return data
        },
    })
    refetch()
    if(loading){
        refetch()
    }

    if(isLoading){
        return <LoaderAnimation></LoaderAnimation>
    }
    return getuserinfo
};

export default UseUserData;