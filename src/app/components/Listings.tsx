import type { NextPage } from 'next';
import Image from "next/image";



const Listings:NextPage = () => {
  	return (
    		<div className="w-full right-[50px] relative bg-white h-[761px] text-left text-xl text-dark-primary font-headings-h4 ">
				<div className='hidden sm:flex lg:block'>
      			<div className="absolute top-[80px] left-[235px] text-[32px]">New ceramics</div>
      			<div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
        				<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Dandy chair</div>
          					<div className="relative text-lg leading-[150%] font-body-medium">£250</div>
        				</div>
      			</div>
      			<div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_-_315px)] flex flex-col items-start justify-start gap-6">
        				<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo1.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">Rustic Vase Set</div>
          					<div className="relative text-lg leading-[150%] font-body-medium">£155</div>
        				</div>
      			</div>
      			<div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
        				<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo2.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Silky Vase</div>
          					<div className="relative text-lg leading-[150%] font-body-medium">£125</div>
        				</div>
      			</div>
      			<div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
        				<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo3.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Lucy Lamp</div>
          					<div className="relative text-lg leading-[150%] font-body-medium">£399</div>
        				</div>
      			</div>
      			<div className="absolute top-[649px] left-[635px] bg-light-grey overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-base font-body-medium">
        				<div className="relative leading-[150%]">View collection</div>
      			</div>
				</div>


				{/* Mobile screen */}

				<div className="w-full relative bg-white h-[811px] overflow-hidden shrink-0 text-left text-xl text-dark-primary font-headings-h4 lg:hidden md:hidden">
<div className="absolute top-[48px] left-[80px] ">New ceramics</div>
<div className="absolute top-[calc(50%_-_313.5px)] left-[calc(50%_+_8px)] w-[163px] h-72 flex flex-col items-start justify-start gap-6">
<Image className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" width={163} height={201} alt="" src="/Photo.png" />
<div className="flex flex-col items-start justify-start gap-2">
<div className="relative leading-[140%]">The Lucy Lamp</div>
<div className="relative text-lg leading-[150%] font-body-large">£399</div>
</div>
</div>
<div className="absolute top-[calc(50%_-_313.5px)] left-[calc(50%_-_171px)] w-[163px] h-72 flex flex-col items-start justify-start gap-6">
<Image className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" width={163} height={201} alt="" src="/Photo.png" />
<div className="flex flex-col items-start justify-start gap-2">
<div className="relative leading-[140%]">Rustic Vase Set</div>
<div className="relative text-lg leading-[150%] font-body-large">£155</div>
</div>
</div>
<div className="absolute top-[717px] left-[24px] bg-light-grey w-[342px] overflow-hidden flex flex-row items-center justify-center py-4 px-8 box-border text-base font-body-large">
<div className="relative leading-[150%]">View collection</div>
</div>
<div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_171px)] w-[163px] h-72 flex flex-col items-start justify-start gap-6">
<Image className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" width={163} height={201} alt="" src="/Photo.png" />
<div className="flex flex-col items-start justify-start gap-2">
<div className="relative leading-[140%]">The Silky Vase</div>
<div className="relative text-lg leading-[150%] font-body-large">£125</div>
</div>
</div>
<div className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_8px)] w-[163px] h-72 flex flex-col items-start justify-start gap-6">
<Image className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" width={163} height={201} alt="" src="/Photo.png" />
<div className="flex flex-col items-start justify-start gap-2">
<div className="relative leading-[140%]">The Dandy chair</div>
<div className="relative text-lg leading-[150%] font-body-large">£250</div>
</div>
</div>
</div>
    		</div>);
};

export default Listings;
