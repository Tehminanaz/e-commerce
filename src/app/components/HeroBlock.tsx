import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type HeroSectionProps = {};

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="bg-light-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col-reverse lg:flex-row items-center lg:items-stretch ">
        {/* Text Content */}
        <div className="flex-grow bg-dark-primary text-white p-6 lg:p-12 flex flex-col justify-center shadow-lg">
          <h1 className="text-17xl lg:text-13xl leading-tight mb-4 font-headings-h1 text-center lg:text-left">
            The furniture brand for the <br /> future, with timeless designs
          </h1>

          <div className="flex justify-center lg:justify-start sm:flex-col-reverse ">
            <Link href="/products">
              <button className="bg-slategray-200  text-white font-body-medium px-6 py-3 mt-5 font-medium hover:bg-violet-600 transition-all duration-300 ">
                View collection
              </button>
            </Link>
          </div>

          <p className="font-body-large text-slategray-100 pt-10 lg:pt-16 mt-10 lg:mt-16 text-center lg:text-left">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 sm:block">
          <Image
            src="/photo.png" // Replace with your Next.js image link
            alt="Chair Image"
            width={500}
            height={600}
            className="mx-auto lg:mx-0 shadow-lg hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
