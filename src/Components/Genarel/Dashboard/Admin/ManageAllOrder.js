import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { auth } from '../../../Authentication/firebase.init';
import Loading from '../../Shared/Loading';

const ManageAllOrder = () => {
    const [user] = useAuthState(auth);
  const email = user?.email;
  const { data, isLoading, refetch } = useQuery("allorder", () =>
    fetch(`http://localhost:5000/order`, {
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

  // delete user 
  const deleteOrder = id =>{

    console.log(id);
    const procide = window.confirm('are You Sure')
    if(procide){
      axios.delete(`http://localhost:5000/order/${id}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((response) => {
      console.log(response);
      const { data } = response;
      refetch()
    });
    }

  }
  const ShipOrder = id =>{

    console.log(id);
    const procide = window.confirm('are You Sure')
    if(procide){

        fetch(`http://localhost:5000/order/shiped/${id}`, {
          method: 'PUT',
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        
        })
              .then(res=>res.json())
              .then(data => {
                if(data.acknowledged){
                  toast.success('Successfully Admin Created')
                  refetch()
                }
                else{
                  toast('Something Went wrong try again')
                }
        
              });
    }

  }
    return (
        <div>
      <h1 className="text-5xl uppercase font-bold text-center my-5">
       Manage All Order
      </h1>
      <div className="overflow-x-auto lg:px-10 md:px-5 px1">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>User</th>
              <th>Ship product</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order, i) => (
              <tr key={order._id}>
                <th>{i+ 1}</th>
                <td>{order.toolName}</td>
                <td>{order.quantity} </td>
                <td>
                  {(parseInt(order.quantity) * parseFloat(order.price)).toFixed(
                    2
                  )}
                </td>
                <td>{order.email}</td>
                <td>
                  {order.status ? 'Shiped' : order.paid ? <button onClick={()=>{ShipOrder(order._id)}} className="btn btn-xs">Ship Now</button> : 'Not Paid' }
                  
                </td>
                <td>
                  {order.paid ? (
                    "Can not delete"
                  ) : (
                    <button onClick={()=>{deleteOrder(order._id)}} className="btn btn-xs">Delete</button>
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

export default ManageAllOrder;