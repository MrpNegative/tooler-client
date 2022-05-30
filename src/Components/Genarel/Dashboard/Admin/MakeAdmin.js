import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../../Authentication/firebase.init";
import Loading from "../../Shared/Loading";

const MakeAdmin = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { data, isLoading, refetch } = useQuery("makeAdmin", () =>
    fetch(`https://frozen-mesa-63268.herokuapp.com/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (data?.scam) {
    signOut(auth);
    return window.location.reload();
  }

  // make admin
  const makeAdmin = (cEmail) => {
      console.log(cEmail);
    axios.put(`https://frozen-mesa-63268.herokuapp.com/users/role/${cEmail}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        console.log(response);
        const { data } = response;
      });
  };

  const deleteUser = dEmail =>{
      console.log(dEmail);
    axios.delete(`https://frozen-mesa-63268.herokuapp.com/users/delete/${dEmail}`)
    .then((response) => {
      console.log(response);
      const { data } = response;
    });
  }

  return (
    <div>
      <div>
        <h1 className="text-5xl uppercase font-bold text-center my-7">
          Make Admin
        </h1>
        <div className="overflow-x-auto lg:px-10 md:px-5 px1">
          <table className="table text-center table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => (
                <tr key={user._id}>
                  <th>[user.index]</th>
                  <td>{user.email}</td>
                  <td>
                    {
                        user.role ? 'Admin' : <button
                        onClick={() => makeAdmin(user.email)}
                        className="btn btn-sm"
                      >
                        Make Admin
                      </button>
                    }
                  </td>
                  <td><button onClick={()=>{deleteUser(user.email)}} className="btn btn-sm">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
