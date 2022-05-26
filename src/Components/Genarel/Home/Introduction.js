import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineIdcard } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaHospitalUser } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="lg:text-5xl text-4xl font-bold uppercase">Introduction</h1>
      <div className="grid justify-items-center my-7 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div class="card w-72 bg-base-100 shadow-xl">
          <div class=" p-5 flex">
            <h1 className="text-6xl">
              <GoLocation />
            </h1>
            <div class="card-actions pl-5 justify-start">
              <h2 className="font-bold text-xl">Country/ Region:</h2>
              <p>Guandogng, China</p>
            </div>
          </div>
        </div>
        <div class="card w-72 bg-base-100 shadow-xl">
          <div class=" p-5 flex">
            <h1 className="text-6xl">
              <AiOutlineIdcard />
            </h1>
            <div class="card-actions pl-5 justify-start">
              <h2 className="font-bold text-xl">Business Type</h2>
              <p>Manufacturer</p>
            </div>
          </div>
        </div>
        <div class="card w-72 bg-base-100 shadow-xl">
          <div class=" p-5 flex">
            <h1 className="text-6xl">
              <BsCalendarDate />
            </h1>
            <div class="card-actions pl-5 justify-start">
              <h2 className="font-bold text-xl">Year Established</h2>
              <p>2019</p>
            </div>
          </div>
        </div>
        <div class="card w-72 bg-base-100 shadow-xl">
          <div class=" p-5 flex">
            <h1 className="text-6xl">
              <BsBoxSeam />
            </h1>
            <div class="card-actions pl-5 justify-start">
              <h2 className="font-bold text-xl">Main Products:</h2>
              <p>Hand Tools</p>
            </div>
          </div>
        </div>
        <div class="card w-72 bg-base-100 shadow-xl">
          <div class=" p-5 flex">
            <h1 className="text-6xl">
              <AiOutlineCreditCard />
            </h1>
            <div class="card-actions pl-5 justify-start">
              <h2 className="font-bold text-xl">Payment Type</h2>
              <p>Card (L/C coming...)</p>
            </div>
          </div>
        </div>
        <div class="card w-72 bg-base-100 shadow-xl">
          <div class=" p-5 flex">
            <h1 className="text-6xl">
              <FaHospitalUser />
            </h1>
            <div class="card-actions pl-5 justify-start">
              <h2 className="font-bold text-xl">Main Markets:</h2>
              <p>Asia, Western Europe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
