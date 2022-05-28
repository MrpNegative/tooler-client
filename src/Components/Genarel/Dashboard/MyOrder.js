import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../Authentication/firebase.init";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { data, isLoading, refetch } = useQuery("myorder", () =>
    fetch(`http://localhost:5000/order/query?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => 
      res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  if(data?.scam){
    signOut(auth);
    return  window.location.reload();
  }
  return (
    <div>
      <h1 className="text-5xl uppercase font-bold text-center my-5">
        MY Order
      </h1>
      <div className="overflow-x-auto lg:px-10 md:px-5 px1">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Transaction Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order) => (
              <tr key={order._id}>
                <th>1</th>
                <td>{order.toolName}</td>
                <td>{order.quantity} </td>
                <td>
                  {(parseInt(order.quantity) * parseFloat(order.price)).toFixed(
                    2
                  )}
                </td>
                <td>{order.status ? "Shipped" : "Pending"}</td>
                <td>
                  {order.paid ? (
                    "TransactionId"
                  ) : (
                    <button className="btn btn-xs">Pay Now</button>
                  )}
                </td>
                <td>
                  {order.paid ? (
                    "Can not delete"
                  ) : (
                    <button className="btn btn-xs">Delete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
