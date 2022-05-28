import React from 'react';

const ContactUs = () => {
    return (
    <div>
        <h1 className="text-4xl text-center font-bold uppercase my-10">Contact Us</h1>
      <form
        className="grid md:w-[500px] w-72 mx-auto my-3 gap-4"
      >
        <input
          required
          type="text"
          placeholder="Your Name"
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="input input-bordered input-accent w-full "
        />
        <input
          required
          type="email"
          placeholder="Subject"
          className="input input-bordered input-accent w-full "
        />
        <textarea
          required
          type="text"
          placeholder="Details"
          min='100'
          name="review"
          className="input input-bordered input-accent h-24 w-full "
        />
        <input
          type="submit"
          value="Send"
          className="btn"
        />
      </form>

        </div>
    );
};

export default ContactUs;