import type { NextPage } from 'next';



const EmailSignUp:NextPage = () => {
  	return (
    		<div className="w-full left-[100px] relative bg-light-grey h-[481px] text-center text-17xl text-dark-primary font-headings-h1 mt-28">
      			<div className="absolute top-[52px] left-[93px] bg-white w-[1273px] h-[364px] overflow-hidden hidden sm:flex lg:block">
        				<div className="absolute top-[68px] left-[351px] flex flex-col items-center justify-start gap-4">
          					<div className="w-[571px] relative leading-[140%] inline-block">Join the club and get the benefits</div>
          					<div className="w-[470px] relative text-base leading-[150%] font-body-medium inline-block">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</div>
        				</div>
        				<div className="absolute top-[254px] left-[400px] w-[472px] flex flex-row items-start justify-start text-left text-base font-body-medium">
          					<div className="self-stretch flex-1 relative bg-light-grey overflow-hidden">
            						<div className="absolute top-[17px] left-[32px] opacity-[0.2]">your@email.com</div>
          					</div>
          					<div className="bg-dark-primary overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-white">
            						<div className="relative leading-[150%]">Sign up</div>
          					</div>
        				</div>
      			</div>
                    
					{/* Mobile screen */}
				  <div className="w-full relative bg-white h-[292px] overflow-hidden shrink-0 text-left text-xl text-dark-primary font-headings-h4 lg:hidden md:hidden">
                  <div className="absolute top-[48px] left-[24px] flex flex-col items-start justify-start gap-4">
                  <div className="w-[329px] relative leading-[140%] inline-block">Join the club and get the benefits</div>
                  <div className="w-[329px] relative text-sm leading-[150%] font-body-medium inline-block">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</div>
                    </div>
                  <div className="absolute top-[198px] left-[24px] bg-light-grey w-[342px] flex flex-row items-start justify-start text-base font-body-medium">
                   <div className="self-stretch flex-1 relative bg-light-grey overflow-hidden">
                  <div className="absolute top-[17px] left-[32px] opacity-[0.2]">your@email.com</div>
                  </div>
                  <div className="bg-dark-primary overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-white">
                  <div className="relative leading-[150%]">Sign up</div>
                   </div>
                   </div>
                   </div>
    		</div>
		       
			   
		);
};

export default EmailSignUp;
