import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Header';

const Main = () => {

    const isHome = useLocation()

    return (
        <div>
            {
                isHome.pathname !== '/' && <Navbar></Navbar>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Main;