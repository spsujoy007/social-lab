import React from 'react';
import './Home.css'

const Trending = () => {
    return (
        <div className='rounded-xl commonShadow bg-white px-8 pt-8 pb-5 top-10 sticky'>
            <div>
                <h2 className='text-xl text-black font-bold'>Trend's for you</h2>

                {/* trend or popular hashtags here...  */}
                <div className='mt-6'>
                    <div className='mb-5'>
                        <h6 className='text-lg font-semibold text-[#313131]'>#lovebite</h6>
                        <p className='mt-2 '>10k shares</p>
                    </div>
                    <div className='mb-5'>
                        <h6 className='text-lg font-semibold text-[#313131]'>#tom&Jerry</h6>
                        <p className='mt-2 '>9.5k shares</p>
                    </div>
                    <div className='mb-5'>
                        <h6 className='text-lg font-semibold text-[#313131]'>#doramon</h6>
                        <p className='mt-2 '>9.4k shares</p>
                    </div>
                    <div className='mb-5'>
                        <h6 className='text-lg font-semibold text-[#313131]'>#Avengers</h6>
                        <p className='mt-2 '>9.4k shares</p>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Trending;