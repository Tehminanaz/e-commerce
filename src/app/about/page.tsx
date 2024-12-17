import type { NextPage } from 'next';
import Image from "next/image";
import Link from 'next/link';
import AboutNav from '../components/AboutNav';
import AboutFooter from '../components/AboutFooter';

const About: NextPage = () => {
  return (
    <div className="">
      {/* Delivery Notification */}
      <div className="w-full bg-dark-primary flex flex-row items-center justify-between py-2 px-4 text-sm text-white font-body-medium">
        <div className="flex flex-row items-center gap-2">
          <Image
            className="w-4 h-4"
            width={16}
            height={16}
            alt=""
            src="/Delivery.svg"
          />
          <span className="flex-1">Free delivery on all orders over £50 with code easter checkout</span>
        </div>
        <Image
          className="w-6 h-6"
          width={24}
          height={24}
          alt=""
          src="/Close.svg"
        />
      </div>

      {/* Header */}
       <div className='mx-auto mt-16 mb-8 bg-light-grey w-full max-w-[1440px]'>
        
      <AboutNav/>
       </div>
      {/* <div className="w-full relative bg-white py-4 px-6 flex items-center justify-between text-gray">
        <div className="text-[24px]">Avion</div>
        <Image
          className="w-4 h-4"
          width={16}
          height={16}
          alt=""
          src="/Menu.svg"
        />
      </div> */}
     
     <div className='py-16 px-5 mx-auto mt-16 mb-8 bg-light-grey w-full max-w-[1440px]'>
      {/* Main Content Section */}
      <div className="bg-white flex flex-col items-center justify-start py-8 px-6 text-13xl">
        <div className="text-center max-w-[90%] leading-[140%]">
          A brand built on the love of craftsmanship, quality, and outstanding customer service.
        </div>
        <div className="bg-light-grey py-4 px-8 mt-6 rounded-md text-base font-body-medium">
          View our products
        </div>
      </div>


      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4 py-16 px-4 md:px-20 text-[32px] text-white">
  {/* Left Section */}
  <div className="bg-dark-primary h-auto flex flex-col justify-between p-8">
    <div className="space-y-3">
      <div className="text-[32px]">It started with a small idea</div>
      <div className="text-[18px] font-body-medium text-white">
        A global brand with local beginnings, our story began in a small studio in South London in early 2014.
      </div>
    </div>
    <div className="mt-8 bg-whitesmoke py-4 px-8 text-base font-body-medium text-white">
      View collection
    </div>
  </div>

  {/* Right Section */}
  <div className="h-auto">
    <Image 
      className="w-full h-full object-cover" 
      width={630} 
      height={478} 
      alt="" 
      src="/Image Block.png" 
    />
  </div>
</div>


      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <Image
          className="w-full object-cover"
          width={400}
          height={300}
          alt=""
          src="/baner.png"
        />
         <div>
          <h2 className="text-2xl lg:text-5xl font-headings-h1 text-dark-primary mt-12 mb-3">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-base text-slategray-100 mb-4 leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-base text-slategray-100 mb-6 leading-relaxed">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <Link href="/about">
            <button className="px-6 py-2 text-primary bg-light-grey  hover:bg-primary hover:text-white">
              Get in touch
            </button>
          </Link>
        </div>

      </div>

      {/* Services Section */}
      <div className="bg-white py-24 px-20 mt-14 mb-14">
        <h3 className="text-center mb-10 text-xl font-semibold">
          What makes our brand different
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Next day as standard", text: "Order before 3pm and get your order the next day as standard.", icon: "Delivery.svg" },
            { title: "Made by true artisans", text: "Handmade crafted goods made with real passion and craftsmanship.", icon: "Checkmark--outline.svg" },
            { title: "Unbeatable prices", text: "For our materials and quality, you won’t find better prices anywhere.", icon: "Purchase.svg" },
            { title: "Recycled packaging", text: "We use 100% recycled materials to ensure our footprint is more manageable.", icon: "Sprout.svg" },
          ].map((item, idx) => (
            <div key={idx} className="bg-light-grey p-6 rounded-md flex flex-col items-start gap-4">
              <Image className="w-6 h-6" width={24} height={24} alt="" src={item.icon} />
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-light-grey grid place-items-center h-auto text-center py-8 px-4">
        {/* Main Container */}
        <div className="bg-white w-full max-w-5xl h-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Heading Section */}
         <div className="col-span-full flex flex-col items-center space-y-4">
           <div className="text-2xl md:text-4xl font-bold leading-[140%]">
            Join the club and get the benefits
           </div>
        <div className="text-sm md:text-base font-body-medium leading-[150%]">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </div>
    </div>

    {/* Input Section */}
    <div className="col-span-full flex flex-col md:flex-row items-center md:justify-center gap-4">
      <div className="flex-1 bg-light-grey p-4 rounded-md text-sm md:text-base text-gray-400">
        your@email.com
      </div>
      <button className="bg-dark-primary text-white py-2 px-8 rounded-md">
        Sign up
      </button>
    </div>
  </div>
</div>

      {/* Footer */}
      {/* <footer className="bg-dark-primary text-white py-8 px-6 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Our company</h3>
            <ul>
              {["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"].map((item, idx) => (
                <li key={idx} className="mt-2">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Social links</h3>
            <div className="flex gap-4 mt-2">
              {["Logo--linkedin.svg", "Logo--facebook.svg", "Logo--instagram.svg"].map((src, idx) => (
                <Image key={idx} className="w-6 h-6" width={24} height={24} alt="" src={src} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">Copyright 2022 Avion LTD</div>
      </footer> */}
      </div>

      <AboutFooter/>
    </div>
  );
};

export default About;
