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
            Optimizing application performance is key for developers who are
            mindful of keeping a users experience positive to keep them on an
            app and engaged
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
            Optimizing application performance is key for developers who are
            mindful of keeping a user’s experience positive to keep them on an
            app and engaged
          </p>
        </article>
        <hr />
        <article className="my-10">
          <h1 className="text-2xl font-bold">
            How does prototypical inheritance work?
          </h1>
          <p className="mt-3">
          The Prototypal Inheritance is a feature in javascript witch used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
          </p>
        </article>
        <hr />
        <article className="my-10">
          <h1 className="text-2xl  font-bold">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h1>
          <p>
            Optimizing application performance is key for developers who are
            mindful of keeping a user’s experience positive to keep them on an
            app and engaged
          </p>
        </article>
        <hr />
        <article className="my-10">
          <h1 className="text-2xl  font-bold">
            {" "}
            What is a unit test? Why should write unit tests?
          </h1>
          <p>
            Optimizing application performance is key for developers who are
            mindful of keeping a user's experience positive to keep them on an
            app and engaged
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
