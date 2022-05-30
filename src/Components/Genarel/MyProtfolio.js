import React from "react";
import { Link } from "react-router-dom";

const MyProtfolio = () => {
  return (
    <div>
      <div className="md:w-[600px] my-10 mx-auto">
          <h1 className="text-center text-3xl font-bold uppercase" >My Portfolio</h1>
        <div class="card card-side bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-2xl font-bold">Name: Md Rashidul Islam Fuhad</h2>
            <h2 class="card-title">Email: fuhad208506@gmail.com</h2>
            <h2 class="card-title">Educational Background: Inter 2nd Year student (Commerce)</h2>
            <div>
                <h1 className="card-title">List of Skills </h1>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React Js</li>
                <li>Expr</li>
                <li>MonjoDb</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
            </div>
            <h1 className="card-title">Project Links</h1>
            <p>https://vsensai0.web.app/</p>
            <p>https://techhouse-91edb.web.app/</p>
            <p> https://game-analytics.netlify.app/</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
