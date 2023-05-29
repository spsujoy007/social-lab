import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr'
import './ModalCommon.css'

const ModalCommon = ({children}) => {
    // console.log(visible)
    // const [showModal, setShowModal] = useState(visible)

    // const handleCloseModal = () => {
    //     const visible = false
    // }

    return (
        <div>
            <input type="checkbox" id="create_postModal" className="modal-toggle" />
            <div className="modal bg-[#ffffff81]">
                <div className="modal-box relative container ">
                    <label htmlFor="create_postModal" className="btn btn-sm btn-black btn-circle absolute right-2 top-2">✕</label>
                <div className=''>
                    {children}
                </div>
                </div>
            </div>
        </div>
        // <div className={`${showModal && showModal === true ? 'flex' : "hidden" } items-center md:w-[40vw] md:justify-center h-[50vh] absolute z-50 `}>
        //     <div className='fixed'>
        //     <div className=' bg-white md:min-w-[30vw] min-w-[90vw] relative shadow-xl rounded-xl min-h-[100px] px-5 py-6'>
        //         <div className='flex justify-end  '>
        //             <GrFormClose onClick={handleCloseModal} className='bg-primary text-white text-3xl rounded-full cursor-pointer'></GrFormClose>
        //         </div>
        //         {children}
        //     </div>
        //     </div>
        // </div>
    );
};

export default ModalCommon;