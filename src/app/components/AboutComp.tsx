import React from 'react'
import Image from "next/image";
import Banner from './Banner';
import AboutNav from './AboutNav';
import Features from './Features';
import Features2 from './Features2';
import Features3 from './Features3';



const About = () => {
  return (
    <div className='relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-sm text-dark-primary font-headings-h2'>
    <Banner/>

		<AboutNav/>

    <div className="w-full left-[160px] relative bg-white h-[246px] text-center text-[36px] text-darkslateblue font-clash-display hidden sm:flex lg:block">
      			<div className="absolute top-[67px] left-[367px] leading-[140%]">
        				<p className="m-0">A brand built on the love of craftmanship,</p>
        				<p className="m-0">quality and outstanding customer service</p>
      			</div>
    </div>

	<div className='block lg:hidden md:hidden'>
				<div className="relative left-[100px] bg-light-grey w-full flex flex-col items-start justify-start py-8 px-6 box-border text-center text-13xl text-dark-primary font-headings-h2 ">
<div className="h-[141px] flex flex-col items-start justify-between">
<div className="w-[342px] relative leading-[140%] inline-block">View all products</div>
<div className="self-stretch flex flex-row items-start justify-start gap-3 text-left text-base font-body-medium">
<div className="flex-1 bg-white overflow-hidden flex flex-row items-center justify-center py-4 pl-8 pr-6 gap-3">
<div className="relative leading-[150%]">Sorting</div>
<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="Caret--down.svg" />
</div>
<div className="flex-1 bg-white overflow-hidden flex flex-row items-center justify-center py-4 pl-8 pr-6 gap-3">
<div className="relative leading-[150%]">Filtering</div>
<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="Caret--down.svg" />
</div>
</div>
</div>
</div>
</div>

		<div className='mt-20'>
		<Features2/>	
		<Features3/>
    <div className="w-full left-[150px] relative bg-white h-[355px] text-left text-xl text-dark-primary font-headings-h4 top-20 ">
<div className="relative top-[60px] left-[529px] text-center text-5xl leading-[140%]">What makes our brand different</div>
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
</div>
<div className='block lg:hidden md:hidden items-center'>
<Features/>
</div>


    </div>
  )
}

export default About