import React from 'react'
import Image from "next/image";

const AboutEmail = () => {
  return (
    <div>
        <div className="relative w-full h-[444px] bg-light-grey text-center text-white font-headings-h2">
  {/* Background Image */}
  <div
    className="absolute inset-0 w-full h-full bg-[url('/Large2.png')] bg-cover bg-no-repeat bg-center"
  ></div>

  {/* Content Section */}
  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-start gap-8">
    {/* Title and Subtitle */}
    <div className="flex flex-col items-center justify-start gap-3">
      <h2 className="relative text-3xl leading-[140%]">
        Join the club and get the benefits
      </h2>
      <p className="w-[470px] relative text-lg leading-[150%] font-body-medium">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop-up stores, and more.
      </p>
    </div>

    {/* Features */}
    <div className="flex flex-row items-start justify-center gap-9 text-base font-body-medium">
      {[
        { text: "Exclusive offers" },
        { text: "Free events" },
        { text: "Large discounts" },
      ].map((feature, idx) => (
        <div
          key={idx}
          className="flex flex-row items-center justify-start gap-2"
        >
          <Image
            className="w-4 h-4"
            width={16}
            height={16}
            alt=""
            src="/Checkmark--filled.svg"
          />
          <span className="leading-[150%]">{feature.text}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Email Subscription */}
  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-row items-center justify-start text-base text-dark-primary font-body-medium">
    <div className="relative w-[320px] h-12 bg-light-grey flex items-center px-4 opacity-70">
      <input
        type="email"
        placeholder="your@email.com"
        className="w-full bg-transparent outline-none text-dark-primary"
      />
    </div>
    <button className="bg-dark-primary flex items-center justify-center py-3 px-6 text-white">
      Sign up
    </button>
  </div>
</div>

    </div>
  )
}

export default AboutEmail