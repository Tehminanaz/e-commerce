import React from 'react'
import Image from "next/image";

const AllProducs = () => {
  return (
    <div>
        <div className="w-[1440px] relative h-[209px] overflow-hidden shrink-0 bg-[url('/Large2.png')] bg-cover bg-no-repeat bg-[top] text-17xl text-white">
//         				<div className="absolute top-[123px] left-[80px] leading-[140%]">All products</div>
//       			</div>
//       			<div className="w-[1440px] relative bg-white h-16 text-base font-body-medium">
//         				<div className="absolute top-[calc(50%_-_24px)] left-[24px] h-12 flex flex-row items-start justify-start gap-3">
//           					<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2">
//             						<div className="relative leading-[150%]">Category</div>
//             						<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
//           					</div>
//           					<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2">
//             						<div className="relative leading-[150%]">Product type</div>
//             						<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
//           					</div>
//           					<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2">
//             						<div className="relative leading-[150%]">Price</div>
//             						<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
//           					</div>
//           					<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2">
//             						<div className="relative leading-[150%]">Brand</div>
//             						<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_24px)] right-[24px] flex flex-row items-center justify-start gap-4 text-sm">
//           					<div className="relative leading-[150%]">Sorting by:</div>
//           					<div className="bg-white overflow-hidden flex flex-row items-center justify-start py-3 px-6 gap-2 text-base">
//             						<div className="relative leading-[150%]">Date added</div>
//             						<Image className="w-4 relative h-4 overflow-hidden shrink-0" width={16} height={16} alt="" src="/Caret--down.png" />
//           					</div>
//         				</div>
//       			</div>
//       			<div className="w-[1440px] relative bg-white h-[510px]">
//         				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Dandy chair</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£250</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_315px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">Rustic Vase Set</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£155</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Silky Vase</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£125</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Lucy Lamp</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£399</div>
//           					</div>
//         				</div>
//       			</div>
//       			<div className="w-[1440px] relative bg-white h-[510px]">
//         				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Dandy chair</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£250</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_315px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">Rustic Vase Set</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£155</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Silky Vase</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£125</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Lucy Lamp</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£399</div>
//           					</div>
//         				</div>
//       			</div>
//       			<div className="w-[1440px] relative bg-white h-[634px]">
//         				<div className="absolute top-[calc(50%_-_289px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Dandy chair</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£250</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_289px)] left-[calc(50%_-_315px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">Rustic Vase Set</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£155</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_289px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Silky Vase</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£125</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[calc(50%_-_289px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
//           					<Image className="w-[305px] relative h-[375px] object-cover" width={305} height={375} alt="" src="/Parent.png" />
//           					<div className="flex flex-col items-start justify-start gap-2">
//             						<div className="relative leading-[140%]">The Lucy Lamp</div>
//             						<div className="relative text-lg leading-[150%] font-body-medium">£399</div>
//           					</div>
//         				</div>
//         				<div className="absolute top-[538px] left-[635px] bg-light-grey overflow-hidden flex flex-row items-center justify-center py-4 px-8 text-base font-body-medium">
//           					<div className="relative leading-[150%]">View collection</div>
//         				</div>
//       			</div>
//       			
//     		</div>
   
  )
}

export default AllProducs