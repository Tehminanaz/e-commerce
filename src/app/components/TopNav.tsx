import type { NextPage } from 'next';
import Image from "next/image";
import Link from 'next/link';



const TopNavSet:NextPage = () => {
  	return (
    		<div className="w-full left-[100px] relative rounded-[5px] border-blueviolet h-[492px] overflow-hidden text-center text-5xl text-gray-100 font-clash-display -mb-80">
      			<div className="absolute top-[23px] left-[20px] bg-white w-[1440px] h-[132px] overflow-hidden items-center hidden sm:flex lg:block">
        				<Link href="/about" className="absolute top-[20px] left-[687px] no-underline ">Avion</Link>
        				<div className="absolute top-[90px] left-[382px] flex flex-row items-start justify-start gap-11 text-base text-slategray font-satoshi">
          					<div className="relative">Plant pots</div>
          					<div className="relative">Ceramics</div>
          					<div className="relative">Tables</div>
          					<div className="relative">Chairs</div>
          					<div className="relative">Crockery</div>
          					<div className="relative">Tableware</div>
          					<div className="relative">Cutlery</div>
        				</div>
        				<div className="absolute w-[96.32%] top-[69.5px] right-[1.77%] left-[1.91%] border-gray-200 border-t-[1px] border-solid box-border h-px" />
        				<Image className="absolute top-[26px] left-[1396px] w-4 h-4 overflow-hidden" width={16} height={16} alt="" src="/User--avatar.png" />
        				<Image className="absolute top-[26px] left-[1364px] w-4 h-4 overflow-hidden" width={16} height={16} alt="" src="/Shopping--cart.png" />
        				<Image className="absolute top-[26px] left-[28px] w-4 h-4 overflow-hidden" width={16} height={16} alt="" src="/Search.png" />
      			</div>


      			{/* <div className="absolute top-[203px] left-[20px] bg-white w-[1440px] h-20 overflow-hidden">
        				<div className="absolute top-[25px] left-[80px]">Avion</div>
        				<div className="absolute top-[29px] left-[297px] flex flex-row items-start justify-start gap-11 text-base text-slategray font-satoshi">
          					<div className="relative">Plant pots</div>
          					<div className="relative">Ceramics</div>
          					<div className="relative">Tables</div>
          					<div className="relative">Chairs</div>
          					<div className="relative">Crockery</div>
          					<div className="relative">Tableware</div>
          					<div className="relative">Cutlery</div>
        				</div>
        				<div className="absolute top-[30px] left-[1280px] flex flex-row items-start justify-start gap-4">
          					<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Search.png" />
          					<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Shopping--cart.png" />
          					<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/User--avatar.png" />
        				</div>
      			</div> */}
      			{/* <div className="absolute top-[338px] left-[20px] bg-white w-[1440px] h-[134px] overflow-hidden text-base text-slategray font-satoshi">
        				<div className="absolute top-[21px] left-[28px] text-5xl font-clash-display text-gray-100">Avion</div>
        				<div className="absolute top-[24px] left-[1047px] flex flex-row items-start justify-start gap-8">
          					<div className="relative">About us</div>
          					<div className="relative">Contact</div>
          					<div className="relative">Blog</div>
        				</div>
        				<div className="absolute top-[30px] left-[1309px] flex flex-row items-start justify-start gap-4">
          					<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Search.png" />
          					<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Shopping--cart.png" />
          					<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/User--avatar.png" />
        				</div>
        				<div className="absolute w-full top-[70px] right-[0%] left-[0%] bg-light-grey h-16">
          					<div className="absolute top-[20px] left-[318px] flex flex-row items-start justify-start gap-11">
            						<div className="relative">All products</div>
            						<div className="relative">Plant pots</div>
            						<div className="relative">Ceramics</div>
            						<div className="relative">Tables</div>
            						<div className="relative">Chairs</div>
            						<div className="relative">Crockery</div>
            						<div className="relative">Tableware</div>
            						<div className="relative">Cutlery</div>
          					</div>
        				</div>
      			</div> */}
                   {/* Mobile nav */}

			    <div className="w-full relative bg-white h-[70px] text-left text-[24px] text-gray font-clash-display block lg:hidden md:hidden">
                <div className="absolute top-[20px] left-[24px]">Avion</div>
                <div className="absolute top-[27px] left-[250px] flex flex-row items-center justify-start gap-5">
                <Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Search.png" />
                <Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Shopping--cart.png" />
                <Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/User--avatar.png" />
                <Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Menu.png" />
                </div>
                </div>

    		</div>);
};

export default TopNavSet;
