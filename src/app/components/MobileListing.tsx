import type { NextPage } from 'next';
import Image from "next/image";



const Listings:NextPage = () => {
  	return (
    		<div className="w-full relative bg-white h-[652px] overflow-hidden shrink-0 text-left text-xl text-dark-primary font-headings-h4">
      			<div className="absolute top-[calc(50%_-_298px)] left-[calc(50%_+_8px)] w-[163px] h-72 flex flex-col items-start justify-start gap-6">
        				<Image className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" width={163} height={201} alt="" src="/Produt.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Lucy Lamp</div>
          					<div className="relative text-lg leading-[150%] font-body-large">£399</div>
        				</div>
      			</div>
      			<div className="absolute top-[calc(50%_-_298px)] left-[calc(50%_-_171px)] w-[163px] h-72 flex flex-col items-start justify-start gap-6">
        				<Image className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" width={163} height={201} alt="" src="/Produt1.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">Rustic Vase Set</div>
          					<div className="relative text-lg leading-[150%] font-body-large">£155</div>
        				</div>
      			</div>
      			<div className="absolute top-[calc(50%_+_10px)] left-[calc(50%_-_171px)] w-[163px] h-72 flex flex-col items-start justify-start gap-6">
        				<Image className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" width={163} height={201} alt="" src="/Produt2.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Silky Vase</div>
          					<div className="relative text-lg leading-[150%] font-body-large">£125</div>
        				</div>
      			</div>
      			<div className="absolute top-[calc(50%_+_10px)] left-[calc(50%_+_8px)] w-[163px] h-72 flex flex-col items-start justify-start gap-6">
        				<Image className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" width={163} height={201} alt="" src="/Produt3.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Dandy chair</div>
          					<div className="relative text-lg leading-[150%] font-body-large">£250</div>
        				</div>
      			</div>
    		</div>);
};

export default Listings;
