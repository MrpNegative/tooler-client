import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { auth } from "../../Authentication/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import toast from "react-hot-toast";

const Chackout = () => {
  const [user, uloading] = useAuthState(auth);
  const [disable, setDisable] = useState(false);
  const { id } = useParams();
  const { data, isLoading, refetch } = useQuery("order", () =>
    fetch(`http://localhost:5000/tools/${id}`).then((res) => res.json())
  );
  if (isLoading || uloading) {
    return <Loading></Loading>;
  }
  const { img, price, discription, name, minimum, available } = data;

  // handaleDisable
  const handaleDisable = () => {
    setDisable(false);
  };

  const placeOrder = (e) => {
    e.preventDefault();

    const order = {
      name: user?.displayName,
      email: user?.email,
      toolName: name,
      toolID: id,
      phone: e.target.phone.value,
      address: e.target.address.value,
      quantity: e.target.quantity.value,
      price: price,
      paid: false,
      status: false,
    };
    console.log(order);
    if (order?.quantity < minimum || order?.quantity > available) {
      setDisable(true);
      toast.error("check your quantity");
      return;
    }

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          const newAvailable = parseInt(available) - parseInt(order?.quantity);
          const brandNewAv = { newAvailable };
          console.log(newAvailable);
          axios
            .put(`http://localhost:5000/tools/${id}`, brandNewAv)
            .then((response) => {
              console.log(response);
              const { data } = response;
              if (data.acknowledged) {
                toast.success("order placed");
                refetch();
                e.target.reset();
              }
            });
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen mb-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-[500px] w-72">
            <img className="lg:p-10 lg:w-full md:w-96" src={img} alt="" />
          </div>
          <div className="md:w-[500px] min-w-72 md:p-10 p-3">
            <h1 className="font-bold text-4xl uppercase my-5 text-center">
              Order Detail
            </h1>
            <h2 className=" font-bold uppercase text-2xl">{name}</h2>
            <h2 className="font-bold my-2 text-2xl ">Price {price}$</h2>
            <h3 className="font-bold text-lg ">Min Order: {minimum}</h3>
            <h3 className="font-bold text-2xl my-2">
              {" "}
              {available > minimum ? (
                <>Available: {available}</>
              ) : (
                <span className="text-red-600">Out Of Stock</span>
              )}
            </h3>
            <h2 className="text-xl font-semibold">Name: {user?.displayName}</h2>
            <h2 className="text-xl font-semibold">Email: {user?.email}</h2>
            <form
              onChange={handaleDisable}
              onSubmit={placeOrder}
              className="grid my-3 gap-4"
            >
              
              <input
                required
                type="number"
                placeholder="Phone"
                name="phone"
                className="input input-bordered input-accent w-full "
              />
              <input
                required
                type="text"
                placeholder="Address"
                name="address"
                className="input input-bordered input-accent w-full "
              />
              <input
                required
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered input-accent w-full "
              />
              <input
                disabled={disable}
                type="submit"
                value="Place Order"
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chackout;
