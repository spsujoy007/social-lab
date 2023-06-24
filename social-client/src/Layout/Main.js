import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Header'

const Main = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <div className=''>
                <Navbar></Navbar>
                <div className='pt-10'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;