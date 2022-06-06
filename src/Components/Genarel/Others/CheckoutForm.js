import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ orderData, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [done, setDone] = useState("");

  console.log(totalPrice);
  const price = totalPrice;
  const {toolName, email, _id } = orderData
  useEffect(() => { 
    if (price) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            console.log(data);
            setClientSecret(data?.clientSecret);
          }
        });
    }
  }, [price]);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setDone('')
    const { paymentIntent, error: IError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: toolName,
            email: email
          },
        },
      }
    );
    if(IError){
      setCardError(IError.message)
    }
    else{
      setCardError('')
      setDone("Your payment is completed")
      console.log(paymentIntent.id);
      const transationId = paymentIntent.id

      axios.put(`http://localhost:5000/order/paid/${_id}`, {transationId},{
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        console.log(response);
        const { data } = response;
        if(data.acknowledged){
          toast.success('Payment done')

        }
        else{
          toast('somthing Went wrong try again')
        }
      });

    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#FFFFFF",
                "::placeholder": {
                  color: "#FFFFFF",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || done}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {done && <p className="text-white">{done}</p>}
    </div>
  );
};

export default CheckoutForm;
