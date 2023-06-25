import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Header'

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;