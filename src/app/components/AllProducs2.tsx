import type { NextPage } from 'next';
import Image from "next/image";
import MobileListing from './MobileListing';



const ProductsV3Desktop:NextPage = () => {
  	return (
    		<div className="relative left-[100px] bg-white w-full flex flex-col items-start justify-start text-left text-xl text-dark-primary font-headings-h4">
      			
      			<div className="w-[1440px] relative bg-white h-[223px] text-17xl">
        				<div className="absolute top-[80px] left-[575px] leading-[140%]">View all products</div>
        				<div className="absolute top-[154px] left-[80px] bg-white w-[1280px] h-16 text-base font-body-large">
          					<div className="absolute top-[calc(50%_-_24px)] left-[24px] h-12 flex flex-row items-start justify-start gap-3">
            						<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2">
              							<div className="relative leading-[150%]">Category</div>
              							<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
            						</div>
            						<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2">
              							<div className="relative leading-[150%]">Product type</div>
              							<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
            						</div>
            						<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2">
              							<div className="relative leading-[150%]">Price</div>
              							<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
            						</div>
            						<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2">
              							<div className="relative leading-[150%]">Brand</div>
              							<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
            						</div>
          					</div>
          					<div className="absolute top-[calc(50%_-_24px)] right-[24px] flex flex-row items-center justify-start gap-4 text-sm">
            						<div className="relative leading-[150%]">Sorting by:</div>
            						<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2 text-base">
              							<div className="relative leading-[150%]">Date added</div>
              							<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="w-[1440px] relative bg-white h-[510px]">
					<div className='hidden sm:flex lg:block'></div>
        				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Dandy chair</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£250</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_315px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo1.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">Rustic Vase Set</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£155</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo2.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Silky Vase</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£125</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo3.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Lucy Lamp</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£399</div>
          					</div>
        				</div>
      			</div>
      			<div className="w-[1440px] relative bg-white h-[510px]">
        				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo4.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Dandy chair</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£250</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_315px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo5.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">Rustic Vase Set</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£155</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Silky Vase</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£125</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo1.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Lucy Lamp</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£399</div>
          					</div>
        				</div>
      			</div>
      			<div className="w-[1440px] relative bg-white h-[634px]">
        				<div className="absolute top-[calc(50%_-_289px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo2.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Dandy chair</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£250</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_289px)] left-[calc(50%_-_315px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo3.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">Rustic Vase Set</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£155</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_289px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo4.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Silky Vase</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£125</div>
          					</div>
        				</div>
        				<div className="absolute top-[calc(50%_-_289px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
          					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Photo5.png" />
          					<div className="flex flex-col items-start justify-start gap-2">
            						<div className="relative leading-[140%]">The Lucy Lamp</div>
            						<div className="relative text-lg leading-[150%] font-body-large">£399</div>
          					</div>
        				</div>
        				<div className="absolute top-[538px] left-[635px] bg-light-grey overflow-hidden flex flex-row items-center justify-center py-4 px-8 text-base font-body-large">
          					<div className="relative leading-[150%]">View collection</div>
        				</div>
      			</div>
      			<div className="w-[1440px] relative bg-white h-[521px] text-base font-body-large">
        				<Image className="absolute top-[0px] left-[0px] w-[720px] h-[521px] overflow-hidden object-cover" width={720} height={521} alt="" src="/Photo5.png" />
        				<div className="absolute top-[71px] left-[792px] text-[32px] font-headings-h4 text-center">Join the club and get the benefits</div>
        				<div className="absolute top-[131px] left-[795px] leading-[150%] inline-block w-[470px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</div>
        				<div className="absolute top-[395px] left-[792px] w-[472px] flex flex-row items-start justify-start">
          					<div className="self-stretch flex-1 relative bg-light-grey overflow-hidden">
            						<div className="absolute top-[17px] left-[32px] opacity-[0.2]">your@email.com</div>
          					</div>
          					<div className="bg-dark-primary overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-white">
            						<div className="relative leading-[150%]">Sign up</div>
          					</div>
        				</div>
      			</div>
      			<div className=''>
				<MobileListing/>
				</div>
    		</div>);
};

export default ProductsV3Desktop;
