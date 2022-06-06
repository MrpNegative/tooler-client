import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { auth } from '../../Authentication/firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    
    const email = user.email
    const { data, isLoading, } = useQuery("myorder", () =>
    fetch(`http://localhost:5000/users/${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => 
      res.json())
  );
  console.log(data);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if(data?.scam){
    signOut(auth);
    return  window.location.reload();
  }
    return (
        <div className='md:w-[600px] w-full my-10 mx-auto'>
            <div class="card md:flex-row flex-col card-side bg-base-100 shadow-xl">
            <div className=' max-h-96 my-5 lg:w-56'>
            <img className='rounded-lg mx-auto my-10' src={user.photoURL} alt="Movie"/>
            <Link to='/dashboard/updateprofile'> <h1 className='text-center bg-base-300 p-4 rounded-2xl w-36 mx-auto font-bold uppercase'>edit profile</h1></Link>
            </div>


  <div class="card-body">
    <h2 class="card-title">Name: {user.displayName}</h2>
    <p> Email:  {user.email}</p>
    <p> Email:  {data?.address}</p>
    <p> Email:  {data?.phone}</p>
    <p> Email:  {data?.education}</p>
  </div>
</div>
        </div>
    );
};

export default MyProfile;