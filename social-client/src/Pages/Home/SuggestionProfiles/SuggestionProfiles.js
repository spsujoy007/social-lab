import React from 'react';
import SingleProfile from './SingleProfile';

const SuggestionProfiles = () => {

    const suggestedProfiles = [
        {
            _id: '1',
            profileImg: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
            userName: "Kaiser Tanvir",
            email: "kaisertv@gmail.com"
        },
        {
            _id: '2',
            profileImg: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
            userName: "Foysal",
            email: "foysal@gmail.com"
        },
        {
            _id: '3',
            profileImg: "https://fastly.picsum.photos/id/88/200/200.jpg?hmac=7_fl_u460sA-SBPikcqpeADpHOtrqhLVlh3rhHUX5tk",
            userName: "Asadullah al Galib",
            email: "galib@gmail.com"
        }
    ]

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