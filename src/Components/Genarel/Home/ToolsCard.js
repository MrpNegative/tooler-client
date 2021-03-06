import React from "react";
import { Link } from "react-router-dom";

const ToolsCard = ({tool}) => {
    const {name, img, description, price, _id, minimum, available } = tool
    
  return (
    <div>
      <div className="card lg:max-w-96 h-[700px] w-72 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">
            {name}
          </h2>
          {description.length > 150 ? <p title={`${description}`} className="text-left">{description.slice(0, 100)}...</p> : <p>{description}</p> }
          <div className="">
            <p className="text-xl mb-1 font-semibold">Available: {available}</p>
            <p className="text-lg font-semibold">Min Order: {minimum}</p>
            <p className="font-bold my-2 text-2xl">Price: {price}</p>
          </div>
          <button className="btn bg-red-600 text-black hover:text-white"><Link to={`/checkout/${_id}`}>Buy Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
