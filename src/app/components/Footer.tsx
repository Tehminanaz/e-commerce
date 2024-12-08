import type { NextPage } from 'next';
import Image from "next/image";



const Footer:NextPage = () => {
  	return (
    		<div className="w-full relative bg-dark-primary h-[380px] overflow-hidden shrink-0 text-left text-sm text-white font-body-medium mt-12">
				<div className='relative left-[100px] hidden sm:flex lg:block'>
      			<div className="absolute top-[58px] left-[82px] flex flex-col items-start justify-start gap-3">
        				<div className="relative text-base font-clash-display">Menu</div>
        				<div className="relative">New arrivals</div>
        				<div className="relative">Best sellers</div>
        				<div className="relative">Recently viewed</div>
        				<div className="relative">Popular this week</div>
        				<div className="relative">All products</div>
      			</div>
      			<div className="absolute top-[58px] left-[299px] flex flex-col items-start justify-start gap-3">
        				<div className="relative text-base font-clash-display">Categories</div>
        				<div className="relative">Crockery</div>
        				<div className="relative">Furniture</div>
        				<div className="relative">Homeware</div>
        				<div className="relative">Plant pots</div>
        				<div className="relative">Chairs</div>
        				<div className="relative">Crockery</div>
      			</div>
      			<div className="absolute top-[336px] left-[80px]">Copyright 2022 Avion LTD</div>
      			<div className="absolute top-[58px] left-[516px] flex flex-col items-start justify-start gap-3">
        				<div className="relative text-base font-clash-display">Our company</div>
        				<div className="relative">About us</div>
        				<div className="relative">Vacancies</div>
        				<div className="relative">Contact us</div>
        				<div className="relative">Privacy</div>
        				<div className="relative">Returns policy</div>
      			</div>
      			<div className="absolute top-[58px] left-[730px] text-base font-clash-display">Join our mailing list</div>
      			<div className="absolute top-[311.5px] left-[79.5px] border-primary border-t-[1px] border-solid box-border w-[1278px] h-px" />
      			<div className="absolute top-[334px] left-[1093px] flex flex-row items-start justify-start gap-6">
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="Logo--linkedin.svg" />
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="Logo--facebook.svg" />
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="Logo--instagram.svg" />
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="Logo--skype.svg" />
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="Logo--twitter.svg" />
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="Logo--pinterest.svg" />
      			</div>
      			<div className="absolute top-[94px] left-[730px] w-[627px] flex flex-row items-start justify-start text-base">
        				<div className="self-stretch flex-1 relative bg-gray overflow-hidden">
          					<div className="absolute top-[17px] left-[32px]">your@email.com</div>
        				</div>
        				<div className="bg-white overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-dark-primary">
          					<div className="relative leading-[150%]">Sign up</div>
        				</div>
      			</div>
			  </div>

			  {/* Mobile screen */}

			  <div className="w-full relative bg-dark-primary h-[668px] overflow-hidden shrink-0 text-left text-sm text-white font-body-medium lg:hidden md:hidden">
               <div className="absolute top-[40px] left-[205px] flex flex-col items-start justify-start gap-3">
               <div className="relative text-base font-clash-display">Menu</div>
               <div className="relative">New arrivals</div>
               <div className="relative">Best sellers</div>
               <div className="relative">Recently viewed</div>
               <div className="relative">Popular this week</div>
               <div className="relative">All products</div>
              </div>
              <div className="absolute top-[40px] left-[25px] flex flex-col items-start justify-start gap-3">
              <div className="relative text-base font-clash-display">Categories</div>
              <div className="relative">Crockery</div>
              <div className="relative">Furniture</div>
              <div className="relative">Homeware</div>
<div className="relative">Plant pots</div>
<div className="relative">Chairs</div>
<div className="relative">Crockery</div>
</div>
<div className="absolute top-[286px] left-[24px] flex flex-col items-start justify-start gap-3">
<div className="relative text-base font-clash-display">Our company</div>
<div className="relative">About us</div>
<div className="relative">Vacancies</div>
<div className="relative">Contact us</div>
<div className="relative">Privacy</div>
<div className="relative">Returns policy</div>
</div>
<div className="absolute top-[501px] left-[24px] flex flex-col items-start justify-start text-base font-clash-display">
<div className="relative">Join our mailing list</div>
</div>
<div className="absolute top-[608.5px] left-[23.5px] border-primary border-t-[1px] border-solid box-border w-[343px] h-px" />
<div className="absolute top-[629px] left-[113px]">Copyright 2022 Avion LTD</div>
<div className="absolute top-[537px] left-[24px] w-[342px] flex flex-row items-start justify-start text-base">
<div className="self-stretch flex-1 relative bg-gray overflow-hidden">
<div className="absolute top-[17px] left-[32px]">your@email.com</div>
</div>
<div className="bg-white overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-dark-primary">
<div className="relative leading-[150%]">Sign up</div>
</div>
</div>
</div>
    		</div>);
};

export default Footer;
