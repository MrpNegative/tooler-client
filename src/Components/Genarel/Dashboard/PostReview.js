import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { auth } from "../../Authentication/firebase.init";

const PostReview = () => {
    const [user] = useAuthState(auth)
    const handelReview = e =>{
        e.preventDefault();

    const review = {
      name: user?.displayName,
      email: user?.email,
      rating: e.target.rating.value,
      review: e.target.review.value,
    };
    console.log(review);

    fetch("https://frozen-mesa-63268.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {console.log(data);
    if(data?.acknowledged){
        toast.success('your review added')
        e.target.reset()
    }
    else{
        toast.error('something went wrong. Please try again letter')
    }
})
    }
  return (
    <div>
        <h1 className="text-4xl text-center font-bold uppercase my-10">Post A Review</h1>
      <form
        // onChange={handaleDisable}
        onSubmit={handelReview}
        className="grid md:w-[500px] w-72 mx-auto my-3 gap-4"
      >
        <input
          required
          type="text"
          placeholder="Your Name"
          value={`${user?.displayName}`}
          disabled
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={`${user?.email}`}
          disabled
          className="input input-bordered input-accent w-full "
        />
        <textarea
          required
          type="text"
          placeholder="Your Review"
          name="review"
          className="input input-bordered input-accent h-24 w-full "
        />
        <input
          required
          type="number"
          name="rating"

          placeholder="Rating out of 5"
          max='5'
          min='0'
          className="input input-bordered input-accent w-full "
        />
        <input
          type="submit"
          value="Post review"
          className="btn"
        />
      </form>
    </div>
  );
};

export default PostReview;
