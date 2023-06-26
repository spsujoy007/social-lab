import React from 'react';
import SingleProfile from './SingleProfile';
import { useQuery } from 'react-query';
import LoaderAnimation from '../../../Components/LoaderAnimation';

const SuggestionProfiles = () => {
    // const {user} = useContext(AuthContext);
    // const userData = UseUserData()

    const {data: suggestedProfiles = [], isLoading, refetch} = useQuery({
        queryKey: ["suggestedProfiles"],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/getAllUsers`)
            const data = await res.json()
            return data
        }
    })


    refetch()

    if(isLoading){
        return <LoaderAnimation></LoaderAnimation>
    }



    return (
        <div className='bg-whiterounded-xl rounded-xl overflow-hidden bg-[#ffffff81]  p-5 mt-5 '>
            <div>
                <h3 className='text-lg text-black'>People you may know</h3>

                {/* maping profiles;  */}
                <div className='mt-6'>
                    {
                        suggestedProfiles.map(profile => <SingleProfile
                            key={profile._id}
                            profile={profile}
                        ></SingleProfile>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SuggestionProfiles;