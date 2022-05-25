import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="hero  min-h-screen bg-base-200 h-screen">
        <div class="hero-content flex-col  lg:flex-row-reverse">
          <div className=" flex-1 ">
          <img  className="lg:max-w-md md:w-96 mx-auto"
            src="https://i.ibb.co/TTp6LK3/Untitled-600-1.png" alt=""
          />
          </div>
          <div className="flex-1">
            <h1 class="text-5xl font-bold">TOOLER OUR MISSION IS TO DELIVER THE BEST THING TO YOU</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
