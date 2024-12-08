import React from 'react'
import Image from "next/image";

const Banner = () => {
  return (
    <div>
        <div className="w-[1850px] relative bg-dark-primary h-[41px] overflow-hidden shrink-0 text-white font-body-medium hidden sm:flex lg:block">
        				<Image className="absolute top-[8px] right-[16px] w-6 h-6 overflow-hidden" width={24} height={24} alt="" src="/Close.png" />
        				<div className="absolute top-[11px] left-[calc(50%_-_204px)] flex flex-row items-center justify-start gap-2">
          					<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Delivery.png" />
          					<div className="relative">Free delivery on all orders over £50 with code easter checkout</div>
        				</div>
      			</div>

				{/* Mobile screen */}
	

    </div>
  )
}

export default Banner