import React from 'react';
import { Link } from 'react-router-dom';
import webLogo from '../../assests/sitelogo.png'
import './Header.css'

const Navbar = () => {
    return (
      <div className="navbar  fixed z-10 navbarHead">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
          </ul>
        </div>

        <Link to={'/'} className="py-0 px-5 ml-20 normal-case text-xl text-primary">
          <img className='lg:w-12 w-10' src={webLogo} alt="" />
        </Link>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
        </ul>
      </div>
      <div className="navbar-end">

      </div>
    </div>
    );
};

export default Navbar;