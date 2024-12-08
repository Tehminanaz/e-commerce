import type { NextPage } from 'next';
import Image from "next/image";



const Features:NextPage = () => {
  	return (
    		<div className="w-full left-[100px] relative h-[603px] text-left text-[24px] text-darkslateblue font-clash-display mt-15">
      			<div className="absolute top-[0px] left-[0px] bg-white w-[720px] h-[603px] overflow-hidden hidden sm:flex lg:block">
        				<div className="absolute top-[72px] left-[84px] flex flex-col items-start justify-start gap-[25px]">
          					<div className="relative leading-[140%]">
            						<p className="m-0">From a studio in London to a global brand with</p>
            						<p className="m-0">over 400 outlets</p>
          					</div>
          					<div className="w-[536px] relative text-base font-body-medium text-slategray inline-block">
            						<p className="m-0">{`When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. `}</p>
            						<p className="m-0">&nbsp;</p>
            						<p className="m-0">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          					</div>
        				</div>
        				<div className="absolute top-[493px] left-[84px] bg-light-grey overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-base font-body-medium">
          					<div className="relative leading-[150%]">Get in touch</div>
        				</div>
      			</div>
      			<Image className="absolute top-[0px] left-[720px] w-[720px] h-[603px] overflow-hidden object-cover" width={720} height={603} alt="" src="/baner.png" />

				{/* Mobile screen  */}

				<div className="w-full relative bg-white h-[828px] overflow-hidden shrink-0 text-left text-sm text-darkslateblue font-body-medium lg:hidden md:hidden bottom-64 mt-44 ">
<div className="absolute top-[144px] left-[24px] leading-[150%] text-slategray inline-block w-[342px]">
<p className="m-0">{`When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. `}</p>
<p className="m-0">&nbsp;</p>
<p className="m-0">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
</div>
<div className="absolute top-[48px] left-[24px] text-xl leading-[140%] font-headings-h4 inline-block w-[274px]">
<p className="m-0">From a studio in London to a global brand with</p>
<p className="m-0">over 400 outlets</p>
</div>
<Image className="absolute top-[470px] left-[0px] w-[390px] h-[358px] overflow-hidden object-cover" width={390} height={358} alt="" src="/baner.png" />
<div className="absolute top-[376px] left-[24px] bg-light-grey w-[342px] overflow-hidden flex flex-row items-center justify-center py-4 px-8 box-border text-base">
<div className="relative leading-[150%]">Get in touch</div>
</div>
</div>
    		</div>
			
		
		);
};

export default Features;
