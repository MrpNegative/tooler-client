import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { signOut } from "firebase/auth";
import { useQuery } from "react-query";

import { useParams } from "react-router-dom";
import { auth } from "../../Authentication/firebase.init";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51KxSshAhcvFtBaH3E0AMcK9eZZ7MXOb43TlBB6woqncNIxPQKH7PvfYdTBSRLD93J1Uu7yjDEbcjHUe5vSgX4x4E00qchzQQgb"
);
const Payment = () => {
  const { id } = useParams();

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

  const { _id, email, price, quantity, toolName, address, phone } = data;

  const totalPrice = parseFloat((price * quantity).toFixed(2));

  return (
    <div className=" min-h-screen">
      <div class="card lg:max-w-lg my-10 mx-auto bg-base-100 shadow-xl">
        <h1 className="text-center text-3xl uppercase font-bold mt-5">
          order Details
        </h1>
        <div class="card-body">
          <h2 class="text-lg font-bold">OrderId: {_id}</h2>
          <p>Tool Name: {toolName}</p>
          <p>User: {email}</p>
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
          <p>Quantity: {quantity}</p>
          <p>Total Price: {(price * quantity).toFixed(2)}</p>
        </div>
      </div>

      <div class="card md:w-96 w-72 my-10 mx-auto bg-black shadow-xl">
        <h1 className="text-center text-2xl uppercase font-bold mt-5">
          Make Payment
        </h1>
        <div class="card-body text-white">
          <Elements stripe={stripePromise}>
            <CheckoutForm orderData={data} totalPrice={totalPrice} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
