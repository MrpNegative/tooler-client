import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../Authentication/firebase.init";

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const updateProfile = (e) =>{
        e.preventDefault()
        const email = user.email;

        const details = {
            address: e.target.address.value,
            phone: e.target.phone.value,
            facebook: e.target.facebook.value,
            img: e.target.img.value
        }
        console.log(details);
            console.log(email);
          axios.put(`http://localhost:5000/users/update/${email}`, details )
            .then((response) => {
              console.log(response);
              const { data } = response;
            });
    }
  return (
    <div className="md:w-[600px] shadow-md rounded-lg bg-base-200 my-10 mx-auto">
        <h1 className="text-4xl font-bold  uppercase text-center  mt-5">update profile</h1>
      <div class="card-body">
        <h2 class="card-title">Name: {user.displayName}</h2>
        <h2 class="card-title">Email: {user.email}</h2>
        <form
        onSubmit={updateProfile}
        className="grid md:w-[500px] w-72 mx-auto my-3 gap-4"
      >
        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="text"
          placeholder="Phone"
          name="phone"
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="text"
          placeholder="Facebook Link"
          name="facebook"
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="text"
          name="img"
          placeholder="Rating out of 5"
          className="input input-bordered input-accent w-full "
        />
        <input
          type="submit"
          value="Post review"
          className="btn"
        />
      </form>
       
      </div>
    </div>
  );
};

export default UpdateProfile;
