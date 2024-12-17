import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrandStory: React.FC = () => {
  return (
    <section className="bg-light-grey py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Content */}
        <div>
          <h2 className="text-17xl font-headings-h1 text-dark-primary mb-6">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-slategray-100 mb-4 leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-slategray-100 mb-6 leading-relaxed">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <div className="py-4">
            <Link href="/about">
              <button className="px-6 py-3 text-dark-primary bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors">
                Get in touch
              </button>
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/brandstory.png"
            alt="Stylish interior with sofa and decor"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
