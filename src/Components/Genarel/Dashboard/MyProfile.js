import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../Authentication/firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    return (
        <div className='md:w-[600px] my-10 mx-auto'>
            <div class="card card-side bg-base-100 shadow-xl">
            <div className=' max-h-96 lg:w-56'>
            <img className='rounded-lg mx-auto my-10' src={user.photoURL} alt="Movie"/>
            <Link to='/updateprofile'> <h1 className='text-center bg-base-300 p-4 rounded-2xl w-36 mx-auto font-bold uppercase'>edit profile</h1></Link>
            </div>


  <div class="card-body">
    <h2 class="card-title">Name: {user.displayName}</h2>
    <p> Email:  {user.email}</p>
    <p> Email:  {user.email}</p>
    <p> Email:  {user.email}</p>
    <p> Email:  {user.email}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProfile;