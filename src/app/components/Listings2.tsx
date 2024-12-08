import type { NextPage } from 'next';
import Image from "next/image";



const Listings:NextPage = () => {
  	return (
    		<div className="w-full right-[50px] relative bg-white h-[744px] text-left text-xl text-dark-primary font-headings-h4">
      			<div className="absolute top-[64px] left-[235px] text-13xl leading-[140%]">Our popular products</div>
      			<div className="absolute top-[calc(50%_-_236px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
        				<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Dandy chair</div>
          					<div className="relative text-lg leading-[150%] font-body-large">£250</div>
        				</div>
      			</div>
      			<div className="absolute top-[calc(50%_-_236px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
        				<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo4.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Dandy chair</div>
          					<div className="relative text-lg leading-[150%] font-body-large">£250</div>
        				</div>
      			</div>
      			<div className="absolute top-[640px] left-[800px] bg-light-grey overflow-hidden flex flex-row items-center justify-center py-4 px-8 text-base font-body-large">
        				<div className="relative items-center leading-[150%]">View collection</div>
      			</div>
      			<div className="absolute top-[calc(50%_-_238px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
        				<Image className="w-[630px] relative h-[375px] overflow-hidden shrink-0 object-cover" width={630} height={375} alt="" src="/Large.png" />
        				<div className="flex flex-col items-start justify-start gap-2">
          					<div className="relative leading-[140%]">The Poplar suede sofa</div>
          					<div className="relative text-lg leading-[150%] font-body-large">£980</div>
        				</div>
      			</div>
    		</div>);
};

export default Listings;
