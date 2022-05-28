import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../../Authentication/firebase.init";
import Loading from "../../Shared/Loading";

const MakeAdmin = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { data, isLoading, refetch } = useQuery("myorder", () =>
    fetch(`http://localhost:5000/users`, {
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
  return (
    <div>
      <div>
        <h1 className="text-5xl uppercase font-bold text-center my-5">
          MY Order
        </h1>
        <div className="overflow-x-auto lg:px-10 md:px-5 px1">
          <table className="table table-zebra w-full">
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
                  <th>1</th>
                  <td>{user.email}</td>
                  
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
