import type { NextPage } from 'next';
import Image from "next/image";



const Features:NextPage = () => {
  	return (
      <section className='w-full bg-white h-auto overflow-hidden shrink-0 text-base text-dark-primary lg:text-center lg:items-center font-headings-h5 py-12 px-12 lg:py-40 lg:px-44'>
       <div className="w-full bg-white h-auto overflow-hidden shrink-0 text-base text-dark-primary lg:text-center lg:items-center font-headings-h5 max-w-[1350px] ">
          <div className="flex flex-col items-left lg:items-center lg:text-center ">
             <div className="text-5xl font-headings-h3 leading-[140%] w-auto mb-12">
                What makes our brand different
         </div>
  </div>
  
  <div className="grid grid-cols-1 items-start lg:grid-cols-4 gap-12  lg:justify-items-start">
    {/* First Feature */}
    <div className=" items-start gap-4">
      <Image
        className="w-6 h-6 overflow-hidden shrink-0 "
        width={24}
        height={24}
        alt=""
        src="/Delivery.png"
      />
      <div className=" flex-col gap-3">
        <div className="leading-[140%] ">Next day as standard</div>
        <p className="w-auto text-lg leading-[150%] font-body-small max-w-prose">
          Order before 3pm and get your order the next day as standard
        </p>
      </div>
    </div>

    {/* Second Feature */}
    <div className="items-start gap-4">
      <Image
        className="w-6 h-6 overflow-hidden shrink-0"
        width={24}
        height={24}
        alt=""
        src="/Checkmark--outline.png"
      />
      <div className="flex flex-col gap-3">
        <div className="leading-[140%]">Made by true artisans</div>
        <p className="w-auto text-lg leading-[150%] font-body-small max-w-prose">
          Handmade crafted goods made with real passion and craftmanship
        </p>
      </div>
    </div>

    {/* Third Feature */}
    <div className=" items-start gap-4">
      <Image
        className="w-6 h-6 overflow-hidden shrink-0"
        width={24}
        height={24}
        alt=""
        src="/Purchase.png"
      />
      <div className="flex flex-col gap-3">
        <div className="w-[196px] leading-[140%]">
          Unbeatable prices
        </div>
        <p className="w-auto text-lg leading-[150%] font-body-small max-w-prose">
          For our materials and quality you wont find better prices anywhere
        </p>
      </div>
    </div>

    {/* Fourth Feature */}
    <div className="items-start gap-4">
      <Image
        className="w-6 h-6 overflow-hidden shrink-0"
        width={24}
        height={24}
        alt=""
        src="/Sprout.png"
      />
      <div className="flex flex-col gap-3">
        <div className="w-[196px] leading-[140%]">
          Recycled packaging
        </div>
        <p className="w-auto text-lg leading-[150%] font-body-small max-w-prose">
          We use 100% recycled packaging to ensure our footprint is manageable
        </p>
      </div>
    </div>
  </div>
</div>
</section>

      );
};

export default Features;
