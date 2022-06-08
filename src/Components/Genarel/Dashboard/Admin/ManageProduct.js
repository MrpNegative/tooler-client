import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { auth } from '../../../Authentication/firebase.init';
import Loading from '../../Shared/Loading';

const ManageProduct = () => {
    const { data, isLoading, refetch } = useQuery("AllProducts", () =>
    fetch(`https://frozen-mesa-63268.herokuapp.com/tools`, {
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

  const deleteProduct = id =>{
  const proced = window.confirm("are You sure you want to delete?")
  if(proced){
    axios.delete(`https://frozen-mesa-63268.herokuapp.com/tools/delete/${id}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  .then((response) => {
    console.log(response);
    const { data } = response;
    if(data.acknowledged){
      toast.success('user Deleted')
      refetch()
    }
    else{
      toast('somthing Went wrong try again')
    }
  });
  }
}
const updateStock = (id, available, event) =>{
  event.preventDefault()
    console.log(id, available);
}
    return (
        <div>
            <h1 className='text-4xl my-8 uppercase text-center font-bold'>manage all products</h1>
            <div className="overflow-x-auto lg:px-10 md:px-5 px1">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Available</th>
              <th>Min Order</th>
              {/* <th className='text-center'>Add Stock</th> */}
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
                {/* <td className='text-center'>
                  <form onSubmit={()=>{updateStock(tool._id ,tool.available)}}>
                  <input type="number" min='0' className='w-20 input input-bordered input-accent px-1 h-8 rounded-lg mr-2' />
                  <input type='submit' value='Update' className='btn btn-sm '/>
                  </form>
                </td> */}
                <td>
                  
                    <button onClick={()=>{deleteProduct(tool._id)}} className="btn btn-xs">Delete</button>
 
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