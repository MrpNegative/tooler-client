import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { auth } from "../../../Authentication/firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);

  const addProduct = (e) => {
    e.preventDefault();

    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      minimum: e.target.minimum.value,
      available: e.target.available.value,
      img: e.target.img.value,
    };
    console.log(product);

    fetch("https://frozen-mesa-63268.herokuapp.com/tools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("your review added");
          e.target.reset();
        } else {
          toast.error("something went wrong. Please try again letter");
        }
      });
  };

  // name, price, description, minimum, available, img
  return (
    <div>
      <h1 className="text-4xl text-center font-bold uppercase my-10">
        Post A Review
      </h1>
      <form
        onSubmit={addProduct}
        className="grid md:w-[500px] w-72 mx-auto my-3 gap-4"
      >
        <input
          required
          type="text"
          placeholder="Name"
          name="name"
          className="input input-bordered input-accent w-full "
        />
        <textarea
          required
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered input-accent h-24 "
        />
        <input
          required
          type="number"
          placeholder="Price"
          name="price"
          step="0.01"
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="number"
          min="0"
          placeholder="Minimum Quantity"
          name="minimum"
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="number"
          min="0"
          placeholder="Available"
          name="available"
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="text"
          placeholder="Img URL"
          name="img"
          className="input input-bordered input-accent w-full "
        />

        <input type="submit" value="Post review" className="btn" />
      </form>
    </div>
  );
};

export default AddProduct;
