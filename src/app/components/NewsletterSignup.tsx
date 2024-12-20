import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="py-24 bg-light-grey text-center ">
      <div className="bg-white lg:py-14 lg:px-14">
      <h2 className="text-17xl font-headings-h1 mb-5 text-dark-primary">
        Join the club and get the benefits
      </h2>
      <p className="mb-10 text-base text-slategray-100">
        Sign up for our newsletter and receive exclusive offers on new <br></br> ranges, sales, pop-up stores, and more.
      </p>
      <form className="max-w-md mx-auto flex flex-col md:flex-row items-center">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-2 border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-gray-700"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-darkslateblue text-white  hover:bg-primary focus:ring-2 focus:ring-primary focus:outline-none"
        >
          Sign up
        </button>
      </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
