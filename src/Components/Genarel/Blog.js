import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mx-auto p-5 my-5 rounded-xl bg-base-200 lg:w-[700px] md:w-[500px] w-full">
          <h1 className="text-3xl font-bold uppercase text-center ">blog</h1>
          <hr />
        <article className="mb-10 mt-3">
          <h1 className="text-2xl  font-bold">
            How will you improve the performance of a React Application
          </h1>
          <p>
          When a user enters the website, he only sees the things on the home page, he doesn't need anything else. But if we load all the code then it takes a lot of time . So the solution is to load the code according to the user's demand or to get good performeance. When a user enter the webside the home page will load first then if the user change route the data will load.
          </p>
        </article>
        <hr />
        <article className="my-10">
          <h1 className="text-2xl  font-bold">
            {" "}
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p>
          At one time states were lined up globally for state management but React 16 came up with a thing called context api, through which states can be shared between any child component except a global state. Without drilling any kind of props. It has made state management much easier.
          </p>
        </article>
        <hr />
        <article className="my-10">
          <h1 className="text-2xl font-bold">
            How does prototypical inheritance work?
          </h1>
          <p className="mt-3">
          Prototype is a very important topic of java script. Because java script runs through many hidden features. For example, the name of a function is name and there is an object inside that function. Now if I give name.toString () then who does the work of this toString. This is what prototype inheritance does. But prototype inheritance is, suppose there are 2 functions, they have 2 types of values, now I want to make 2 connections. To do this, they need to be connected through a call method and put into a prototype. ex: man.prototype. Then you have to do it this way to create a new object. new.prototype = Object.create (Man.prototype)
          </p>
        </article>
        <hr />
        <article className="my-10">
          <h1 className="text-2xl  font-bold">
          Why you do not set the state directly in React.
          </h1>
          <p>
          If we set the state directly then we have no control over that state. And if you use it elsewhere, the same data will remain which is not correct. So we can put data in setState without directly replacing the state. Then I can use it in different places and if necessary I can also set new data.
          </p>
        </article>
        <hr />
        <article className="my-10">
          <h1 className="text-2xl  font-bold">
            {" "}
            What is a unit test? Why should write unit tests?
          </h1>
          <p>
          Unit testing means Defects are captured in very early phase Build gives the quality of the build as well Build Means whatever version is comming for tedting, a part of application. Where the code is reusable, it should be tested more so that it can be reused by making slight changes if needed in any project ahead.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
