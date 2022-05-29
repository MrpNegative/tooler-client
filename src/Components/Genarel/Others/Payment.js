import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";

import { useParams } from "react-router-dom";
import { auth } from "../../Authentication/firebase.init";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  //   const email = user?.email;
  const { data, isLoading, refetch } = useQuery(["payment", id], () =>
    fetch(`http://localhost:5000/order/get/${id}`, {
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

  console.log(data);
  const { _id, email, price, quantity, toolName, name, address, phone } = data;
  return (
    <div className=" min-h-screen">
      <div class="card lg:max-w-lg my-10 mx-auto bg-base-100 shadow-xl">
        <h1 className="text-center text-3xl uppercase font-bold mt-5">order Details</h1>
        <div class="card-body">
          <h2 class="text-lg font-bold">OrderId: {_id}</h2>
          <p>User: {email}</p>
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
          <p>Quantity: {quantity}</p>
          <p>Total Price: {(price*quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
