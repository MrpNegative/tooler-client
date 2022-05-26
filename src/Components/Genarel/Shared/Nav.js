import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../Authentication/firebase.init';

const Nav = () => {
  const [user] = useAuthState(auth)
  const NavItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Submenu</Link></li>
    <li><Link to="/">Submenu</Link></li>
    <li><Link to="/">Submenu</Link></li>
    <li><Link to="/" className="whitespace-nowrap">My Portfolio</Link></li>
    <li><Link to="/">Blog</Link></li>
    {user? <button className='btn' onClick={()=>{signOut(auth)}}>SignOut</button> : <li><Link to="/login" className='btn'>LogIn</Link></li>}
  </>
    console.log(user);
    return (
        <div className='container mx-auto'>
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {NavItems}
      </ul>
    </div>
    <Link to="/" class="btn btn-ghost normal-case text-xl">TOOLER</Link>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    {NavItems}

    </ul>
  </div>
</div>

        </div>
    );
};

export default Nav;