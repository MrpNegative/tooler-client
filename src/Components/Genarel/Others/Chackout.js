import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { auth } from '../../Authentication/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Chackout = () => {
  const [user, uloading] = useAuthState(auth)
  const { id } = useParams();
  const { data, isLoading, refetch } = useQuery("tool", () =>
    fetch(`http://localhost:5000/tools/${id}`).then((res) => res.json())
  );
  if (isLoading || uloading) {
    return <Loading></Loading>;
  }
  const { img, price, discription, name, minimum, available } = data;

  const placeOrder=(e)=>{
    e.preventDefault()
    const order = {
      name: user?.displayName,
      email: user?.email,
      toolName: name,
      toolID: id,
      phone: e.target.phone.value,
      address: e.target.address.value,
      quantity: e.target.quantity.value
    }
    console.log(order);

  }
  return (
    <div>
      <div class="hero min-h-screen mb-10 bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div className="md:w-[500px] w-72">
            <img className="lg:p-10 lg:w-full md:w-96" src={img} alt="" />
          </div>
          <div className="md:w-[500px] min-w-72 md:p-10 p-3">
            <h1 className="font-bold text-4xl uppercase">Order Detail</h1>
            <h2 className=" font-bold text-2xl">{name}</h2>
            <h2 className="font-bold my-2 text-2xl ">Price {price}$</h2>
            <h3 className="font-bold text-lg ">Min Order: {minimum}</h3>
            <h3 className="font-bold text-lg">Available: {available}</h3>
            <form onSubmit={placeOrder} className="grid my-3 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={`${user?.displayName}`}
                class="input input-bordered input-accent w-full "
              />
              <input
                type="email"
                placeholder="Email"
                value={`${user?.email}`}
                class="input input-bordered input-accent w-full "
              />
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                class="input input-bordered input-accent w-full "
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                class="input input-bordered input-accent w-full "
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                class="input input-bordered input-accent w-full "
              />
              <input type="submit" value="Place Order" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chackout;
