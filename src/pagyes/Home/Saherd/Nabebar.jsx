import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/AuthContext';

const Nabebar = () => {

  //for conditaion if user thaka then one worke start >
 const {user,signOutUser} = useContext(AuthContext);
   //for conditaion if user thaka then one worke end >
   const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      console.log('successful sign Out')
    })
    .catch(error =>{
      console.log('failed to sign out .say here. dont leve me alone')
    })
   }

  //make links for short start>
  const links = <>
    <li><a>Item 1</a></li>
    <li><a>Item 3</a></li>
  </>
  //make links for short end>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {/* if user have then one worke start */}
       {
        user ? <>
        <button onClick={handleSignOut} className="btn">Log Out</button>
        </> : <>
        <Link to="/register">Register</Link>
        <Link to="signIn">
         <button className="btn">Sign In</button>
        </Link>
        </>
       } 
        {/* if user have then one worke end */}
      </div>
    </div>
  );
};

export default Nabebar;