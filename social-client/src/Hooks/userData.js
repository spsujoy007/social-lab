import React, { useContext } from 'react';
import LoaderAnimation from '../Components/LoaderAnimation';
import { useQuery } from 'react-query';
import { AuthContext } from '../Context/AuthProvider';

const UseUserData = () => {
    const {user} = useContext(AuthContext)
    const {data: getuserinfo = [], isLoading, refetch} = useQuery({
        queryKey: ['getuserinfo'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/userdata?email=${user?.email}`)
            const data = await res.json()
            console.log(data)
            return data
        },
    })

    if(isLoading){
        return <LoaderAnimation></LoaderAnimation>
    }
    return getuserinfo
};

export default UseUserData;