import React from 'react';
import SingleProfile from './SingleProfile';

const SuggestionProfiles = () => {

    const suggestedProfiles = [
        {
            _id: '1',
            profileImg: "https://fastly.picsum.photos/id/88/200/200.jpg?hmac=7_fl_u460sA-SBPikcqpeADpHOtrqhLVlh3rhHUX5tk",
            userName: "Kaiser Tanvir",
            email: "kaisertv@gmail.com"
        },
        {
            _id: '2',
            profileImg: "https://fastly.picsum.photos/id/88/200/200.jpg?hmac=7_fl_u460sA-SBPikcqpeADpHOtrqhLVlh3rhHUX5tk",
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
        <div className='bg-whiterounded-xl rounded-xl overflow-hidden bg-[#ffffff]  p-5 mt-5 '>
            <div>
                <h3 className='text-lg text-black'>People you may know</h3>

                {/* maping profiles;  */}
                <div className='mt-3'>
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