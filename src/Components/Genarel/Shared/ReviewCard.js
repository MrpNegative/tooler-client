import React from "react";

const ReviewCard = ({ oneReview }) => {
  const { name, review, rating } = oneReview;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Client Name: {name}</h2>
          <div>
            <h1>Review:</h1>
          </div>
          <p>{review}</p>
          <div className="card-actions justify-end">
            <span className="btn-disabled text-white btn">
              Rating: {rating}/5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
