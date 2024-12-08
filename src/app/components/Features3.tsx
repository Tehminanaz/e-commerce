import type { NextPage } from 'next';
import Image from "next/image";



const Features:NextPage = () => {
  	return (
    		<div className="w-full left-[100px] relative h-[603px] text-left text-[24px] text-darkslateblue font-clash-display">
				<div className='hidden sm:flex lg:block'>
      			<Image className="absolute top-[0px] left-[0px] w-[720px] h-[603px] overflow-hidden object-cover" width={720} height={603} alt="" src="/Photo5.png" />
      			<div className="absolute top-[0px] left-[720px] bg-white w-[720px] h-[603px] overflow-hidden">
        				<div className="absolute top-[72px] left-[84px] flex flex-col items-start justify-start gap-[25px]">
          					<div className="relative leading-[140%]">
            						<p className="m-0">Our service isnt just personal, its actually</p>
            						<p className="m-0">hyper personally exquisite</p>
          					</div>
          					<div className="w-[536px] relative text-base font-body-medium text-slategray inline-block">
            						<p className="m-0">{`When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. `}</p>
            						<p className="m-0">&nbsp;</p>
            						<p className="m-0">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          					</div>
        				</div>
      			</div>
      			<div className="absolute top-[493px] left-[804px] bg-light-grey overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-base font-body-medium">
        				<div className="relative leading-[150%]">Get in touch</div>
      			</div>
				  </div>

				{/* Mobile screen */}

				<div className="w-full relative bg-white h-[836px] overflow-hidden shrink-0 text-left text-xl text-darkslateblue font-headings-h4 block lg:hidden md:hidden">
<div className="absolute top-[406px] left-[24px] flex flex-col items-start justify-start gap-3">
<div className="w-[274px] relative leading-[140%] inline-block">
<p className="m-0">Our service isnt just personal, its actually</p>
<p className="m-0">hyper personally exquisite</p>
</div>
<div className="w-[342px] relative text-sm leading-[150%] font-body-medium text-slategray inline-block">
<p className="m-0">{`When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. `}</p>
<p className="m-0">&nbsp;</p>
<p className="m-0">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
</div>
</div>
<Image className="absolute top-[0px] left-[0px] w-[390px] h-[358px] overflow-hidden object-cover" width={390} height={358} alt="" src="/Photo5.png" />
<div className="absolute top-[718px] left-[24px] bg-light-grey w-[342px] overflow-hidden flex flex-row items-center justify-center py-4 px-8 box-border text-base font-body-medium">
<div className="relative leading-[150%]">Get in touch</div>
</div>
</div>
    		</div>);
};

export default Features;
