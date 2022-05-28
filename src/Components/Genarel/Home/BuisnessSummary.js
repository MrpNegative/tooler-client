import React from "react";
import CountUp from "react-countup";
import { BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const BuisnessSummary = () => {
  return (
    <div className="my-10 text-center">
        <h1 className="text-4xl text-center font-bold my-5">BUSINESS SUMMARY </h1>
      <div className="stats stats-vertical lg:stats-horizontal ">
        <div className="stat">
          <div className=" mx-auto text-8xl">
            <BiWorld />
          </div>
          <div className="stat-value">
            <CountUp end={29} />
          </div>
          <div className="text-xl font-bold">Available Countries</div>
        </div>

        <div className="stat">
          <div className=" mx-auto text-8xl">
            <FaUsers />
          </div>
          <div className="stat-value">
            <CountUp end={1293} />
          </div>
          <div className="text-xl font-bold">Our Happy Clients</div>
        </div>

        <div className="stat">
          <div className=" mx-auto text-8xl">
            <MdLocalShipping />
          </div>
          <div className="stat-value">
            <CountUp end={1890453} />
          </div>
          <div className="text-xl font-bold">Total Delivered</div>
        </div>
      </div>
    </div>
  );
};

export default BuisnessSummary;
