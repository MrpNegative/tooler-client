import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero  min-h-screen bg-base-200 lg:h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className=" flex-1 ">
          <img  className="lg:max-w-md md:w-96 mx-auto"
            src="https://i.ibb.co/64Wctbs/New-Project-1.png" alt=""
          />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold"><span className="text-red-600">Tooler </span> Assignment is not finish yet</h1>
            <button className="btn my-5 btn-primary"><Link to='/alltools'>All Tools</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};
// <span className="text-red-600">Tooler </span> We provide the best Hand Tools In a vary reasonable Price

export default Banner;
