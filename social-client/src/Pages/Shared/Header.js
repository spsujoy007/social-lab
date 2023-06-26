import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import webLogo from '../../assests/sitelogo.png'
import './Header.css'
import UseUserData from '../../Hooks/userData';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const {logOut} = useContext(AuthContext)
    const userData = UseUserData()
    const navigate = useNavigate()

    const handleLogOut = () => {
      logOut()
      .then(() => {
        try{
          navigate('/login')
        }
        finally{
          window.location.reload()
        }
      })
      .catch(e => console.error(e))
    }

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
      <div className="navbar-end md:mr-20">
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <button className=''>
              <img className=' w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-white' src={userData?.photoURL} alt="" />
            </button>
          </label>

          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
</div>
      </div>
    </div>
    );
};

export default Navbar;