import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { auth } from '../../../Authentication/firebase.init';
import Loading from '../../Shared/Loading';

const ManageProduct = () => {
    const { data, isLoading, refetch } = useQuery("AllProducts", () =>
    fetch(`http://localhost:5000/tools`, {
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
  const ShipOrder = () => {
      console.log('dd');
  }
  const deleteOrder = () => {
      console.log('dd');
  }
    return (
        <div>
            <h1 className='text-4xl uppercase text-center font-bold'>manage all products</h1>
            <div className="overflow-x-auto lg:px-10 md:px-5 px1">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Available</th>
              <th>Min Order</th>
              <th>Add Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((tool, i) => (
              <tr key={tool._id}>
                <th>{i+ 1}</th>
                <td>{tool.name}</td>
                <td>{tool.price} </td>
                <td>
                  {tool.available}
                </td>
                <td>{tool.minimum}</td>
                <td>
                  {tool.status ? 'Shiped' : tool.paid ? <button onClick={()=>{ShipOrder(tool._id)}} className="btn btn-xs">Ship Now</button> : 'Not Paid' }
                  
                </td>
                <td>
                  {tool.paid ? (
                    "Can not delete"
                  ) : (
                    <button onClick={()=>{deleteOrder(tool._id)}} className="btn btn-xs">Delete</button>
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

export default ManageProduct;