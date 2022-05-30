import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ orderData, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [done, setDone] = useState("");

  console.log(totalPrice);
  const price = totalPrice;
  const {toolName, email } = orderData
  useEffect(() => { 
    if (price) {
      fetch("https://frozen-mesa-63268.herokuapp.com/create-payment-intent", {
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
      console.log(paymentIntent);
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
          disabled={!stripe || !clientSecret}
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
