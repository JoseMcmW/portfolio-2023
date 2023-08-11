import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center 3xl:w-screen h-auto bg-gray opacity-100">
      <h1 className="text-7xl text-center font-bold font-title tracking-normal text-black opacity-100 pt-24">
        Let's talk about your next Project
      </h1>
      <div className="w-52 h-3 bg-red p-0 rounded-md opacity-100 mt-8"></div>
      <div className="w-1005 bg-white rounded-xl mt-16 shadow-lg mb-14">
        <form action="#" className="mt-14 mx-20">
          <div>
            <label
              htmlFor="name"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="Name"
              required
              className="w-853 h-20 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text-2xl pl-11"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="lastname"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Last Name
            </label>
            <input
              type="lastname"
              id="lastname"
              placeholder="Last Name"
              required
              className="w-853 h-20 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text-2xl pl-11"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="email"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@flowbite.com"
              required
              className="w-853 h-20 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text-2xl pl-11"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="subject"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              required
              className="w-853 h-20 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text-2xl pl-11"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="message"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Leave a comment..."
              className="w-853 h-auto pt-5 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text-2xl pl-11"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-52 h-20 bg-red rounded-lg opacity-100 text-2xl my-9 text-white"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
