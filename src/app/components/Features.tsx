import type { NextPage } from 'next';
import Image from "next/image";



const Features:NextPage = () => {
  	return (
    		<div className="w-full left-[100px] relative bg-white h-[355px] text-left text-xl text-dark-primary font-headings-h4">
				<div className='hidden sm:flex lg:block'>
      			<div className="absolute top-[60px] left-[529px] text-5xl leading-[140%]">What makes our brand different</div>
      			<div className="absolute top-[145px] left-[86px] flex flex-col items-start justify-start gap-4">
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Delivery.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">Next day as standard</div>
          					<div className="w-[270px] relative text-base leading-[150%] font-body-medium inline-block">
            						<p className="m-0">Order before 3pm and get your order</p>
            						<p className="m-0">the next day as standard</p>
          					</div>
        				</div>
      			</div>
      			<div className="absolute top-[145px] left-[1065px] flex flex-col items-start justify-start gap-[13px]">
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Sprout.png" />
        				<div className="flex flex-col items-start justify-start gap-[11px]">
          					<div className="w-[196px] relative leading-[140%] inline-block">Recycled packaging</div>
          					<div className="w-[265px] relative text-base leading-[150%] font-body-medium inline-block">We use 100% recycled packaging to ensure our footprint is manageable</div>
        				</div>
      			</div>
      			<div className="absolute top-[145px] left-[739px] flex flex-col items-start justify-start gap-4">
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Purchase.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="w-[196px] relative leading-[140%] inline-block">Unbeatable prices</div>
          					<div className="w-[235px] relative text-base leading-[150%] font-body-medium inline-block">For our materials and quality you wont find better prices anywhere</div>
        				</div>
      			</div>
      			<div className="absolute top-[145px] left-[415px] flex flex-col items-start justify-start gap-4">
        				<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Checkmark--outline.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">Made by true artisans</div>
          					<div className="w-[266px] relative text-base leading-[150%] font-body-medium inline-block">
            						<p className="m-0">Handmade crafted goods made with</p>
            						<p className="m-0">real passion and craftmanship</p>
          					</div>
        				</div>
      			</div>
				</div>

				{/* Mobile screen */}

				<div className="w-full relative bg-white h-[1000px] overflow-hidden shrink-0 text-left text-base text-dark-primary font-headings-h5 -mt-36 ">
<div>					
<div className="absolute top-[48px] left-[24px] text-xl leading-[140%] inline-block w-[274px]">What makes our brand different</div>
<div className="absolute top-[140px] left-[24px] flex flex-col items-start justify-start gap-4">
<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Delivery.png" />
<div className="flex flex-col items-start justify-start gap-3">
<div className="relative leading-[140%]">Next day as standard</div>
<div className="w-[342px] relative text-sm leading-[150%] font-body-small inline-block">Order before 3pm and get your order the next day as standard</div>
</div>
</div>
<div className="absolute top-[292px] left-[24px] flex flex-col items-start justify-start gap-4">
<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Checkmark--outline.png" />
<div className="flex flex-col items-start justify-start gap-3">
<div className="relative leading-[140%]">Made by true artisans</div>
<div className="w-[342px] relative text-sm leading-[150%] font-body-small inline-block">Handmade crafted goods made with real passion and craftmanship</div>
</div>
</div>
<div className="absolute top-[444px] left-[24px] flex flex-col items-start justify-start gap-4">
<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Purchase.png" />
<div className="flex flex-col items-start justify-start gap-3">
<div className="w-[196px] relative leading-[140%] inline-block">Unbeatable prices</div>
<div className="w-[342px] relative text-sm leading-[150%] font-body-small inline-block">For our materials and quality you wont find better prices anywhere</div>
</div>
</div>
<div className="absolute top-[596px] left-[24px] flex flex-col items-start justify-start gap-4">
<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Sprout.png" />
<div className="flex flex-col items-start justify-start gap-3">
<div className="w-[196px] relative leading-[140%] inline-block">Recycled packaging</div>
<div className="w-[340px] relative text-sm leading-[150%] font-body-small inline-block">We use 100% recycled packaging to ensure our footprint is manageable</div>
</div>
</div>
</div>
</div>

{/* Mobile screen */}

<div className="w-full relative bg-white h-[757px] overflow-hidden shrink-0 text-left text-base text-dark-primary font-headings-h5 block lg:hidden md:hidden">
<div className="absolute top-[48px] left-[24px] text-xl leading-[140%] inline-block w-[274px]">What makes our brand different</div>
<div className="absolute top-[140px] left-[24px] flex flex-col items-start justify-start gap-4">
<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Delivery.png" />
<div className="flex flex-col items-start justify-start gap-3">
<div className="relative leading-[140%]">Next day as standard</div>
<div className="w-[342px] relative text-sm leading-[150%] font-body-small inline-block">Order before 3pm and get your order the next day as standard</div>
</div>
</div>
<div className="absolute top-[292px] left-[24px] flex flex-col items-start justify-start gap-4">
<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Checkmark--outline.png" />
<div className="flex flex-col items-start justify-start gap-3">
<div className="relative leading-[140%]">Made by true artisans</div>
<div className="w-[342px] relative text-sm leading-[150%] font-body-small inline-block">Handmade crafted goods made with real passion and craftmanship</div>
</div>
</div>
<div className="absolute top-[444px] left-[24px] flex flex-col items-start justify-start gap-4">
<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Purchase.png" />
<div className="flex flex-col items-start justify-start gap-3">
<div className="w-[196px] relative leading-[140%] inline-block">Unbeatable prices</div>
<div className="w-[342px] relative text-sm leading-[150%] font-body-small inline-block">For our materials and quality you wont find better prices anywhere</div>
</div>
</div>
<div className="absolute top-[596px] left-[24px] flex flex-col items-start justify-start gap-4">
<Image className="w-6 relative h-6 overflow-hidden shrink-0" width={24} height={24} alt="" src="/Sprout.png" />
<div className="flex flex-col items-start justify-start gap-3">
<div className="w-[196px] relative leading-[140%] inline-block">Recycled packaging</div>
<div className="w-[340px] relative text-sm leading-[150%] font-body-small inline-block">We use 100% recycled packaging to ensure our footprint is manageable</div>
</div>
</div>
</div>
    		</div>);
};

export default Features;
