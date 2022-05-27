import React from "react";
import { Link } from "react-router-dom";

const ToolsCard = ({tool}) => {
    const {name, img, description, price, _id } = tool
    
  return (
    <div>
      <div class="card lg:max-w-96 h-[790px] w-72 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="text-2xl font-bold">
            {name}
          </h2>
          <p className="text-left">{description.slice(0, 150)}</p>
          <div class="">
            <p className="text-xl mb-1 font-semibold">Available: 900</p>
            <p className="text-lg font-semibold">Min Order: 50</p>
            <p className="font-bold my-2 text-2xl">Price: {price}</p>
          </div>
          <button className="btn bg-red-600 text-black hover:text-white"><Link to={`/checkout/${_id}`}>Buy Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
