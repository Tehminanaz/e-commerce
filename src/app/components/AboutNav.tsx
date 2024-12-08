import type { NextPage } from 'next';
import Image from "next/image";
import Link from 'next/link';



const TopNav:NextPage = () => {
  	return (
    		<div className="w-full relative bg-white h-[134px] overflow-hidden shrink-0 text-center text-base text-slategray font-satoshi">
				<div className='relative left-[50px] hidden sm:flex lg:block '>
      			<Link href="/" className="absolute top-[21px] left-[28px] text-[24px] font-clash-display text-gray no-underline">Avion</Link>
      			<div className="absolute top-[24px] left-[1047px] flex flex-row items-start justify-start gap-8 px-52">
        				<Link href="/" className="relative no-underline">About us</Link>
        				<Link href="/contact" className="relative no-underline">Contact</Link>
        				<Link href="/about" className="relative no-underline">Blog</Link>
      			</div>
      			<div className="absolute top-[30px] left-[1309px] flex flex-row items-start justify-start gap-4 px-52">
        				<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Search.png" />
        				<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Shopping--cart.png" />
        				<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/User--avatar.png" />
      			</div>
      			<div className="absolute w-full top-[70px] right-[0%] left-[0%] bg-light-grey h-16">
        				<div className="absolute top-[20px] left-[400px] flex flex-row items-start justify-start gap-11">
          					<Link className="relative no-underline" href="/products">All products</Link>
          					<Link className="relative no-underline" href="/products">Plant pots</Link>
          					<Link className="relative no-underline" href="/products">Ceramics</Link>
          					<Link className="relative no-underline" href="/products">Tables</Link>
          					<Link className="relative no-underline" href="/products">Chairs</Link>
          					<Link className="relative no-underline" href="/products">Crockery</Link>
          					<Link className="relative no-underline" href="/products">Tableware</Link>
          					<Link className="relative no-underline" href="/products">Cutlery</Link>
        				</div>
      			</div>
			 </div>

			 {/* Mobile screen */}

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

export default TopNav;
