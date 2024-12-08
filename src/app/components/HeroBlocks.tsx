import type { NextPage } from 'next';
import Image from "next/image";



const HeroBlocks:NextPage = () => {
  	return (
    		<div className="w-full grid lg:grid-cols-2 md:grid-rows-1 sm:grid-flow-row relative left-[100px] bg-white h-[704px] overflow-hidden shrink-0 text-left text-lg text-white font-body-medium  ">
      			<div className="absolute top-[60px] left-[80px] bg-dark-primary w-[1280px] h-[584px] overflow-hidden hidden sm:flex lg:block">
                <div className="absolute top-[443px] left-[60px] leading-[150%]">
                <p className="m-0">A new era in eco-friendly furniture with Avelon, the French luxury retail brand</p>
                <p className="m-0">{`with nice fonts, tasteful colors and a beautiful way to display things digitally `}</p>
                <p className="m-0">using modern web technologies.</p>
            </div>
            <Image
            className="absolute top-[0px] left-[760px] w-[520px] h-[584px] overflow-hidden object-cover hidden lg:block"
             width={520}
             height={584}
             alt=""
             src="/Rightimage.png"
            />
           <div className="absolute top-[60px] left-[60px] flex flex-col items-start justify-start gap-[41px] text-13xl font-headings-h2">
           <div className="w-[513px] relative leading-[140%] inline-block">The furniture brand for the future, with timeless designs</div>
           <div className="bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-base font-body-medium">
      <div className="relative leading-[150%]">View collection</div>
    </div>
  </div>
</div>


				{/* Mobile screen */}
                   
				<div className="w-full relative bg-dark-primary h-[502px] overflow-hidden shrink-0 text-left text-13xl text-white font-headings-h2 block lg:hidden md:hidden">
  
                <div className="absolute top-[40px] left-[24px] leading-[140%] inline-block w-[342px]">
                   The furniture brand for the future, with timeless designs
                </div>
                <div className="absolute top-[255px] left-[24px] flex flex-col items-start justify-start gap-8 text-lg font-body-medium">
                <div className="w-[342px] relative leading-[150%] inline-block">
                <p className="m-0">A new era in eco-friendly furniture with Avelon, the French luxury retail brand</p>
                <p className="m-0">{`with nice fonts, tasteful colors and a beautiful way to display things digitally `}</p>
                <p className="m-0">using modern web technologies.</p>
                </div>
               <div className="w-[342px] bg-whitesmoke overflow-hidden flex flex-row items-center justify-center py-4 px-8 box-border text-base">
               <div className="relative leading-[150%]">View collection</div>
              </div>
           </div>
        </div>


    		</div>
		    	
		);
};

export default HeroBlocks;
