"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    slug: "the-dandy-chair",
    name: "The Dandy Chair",
    img: "/Large.png",
    price: "£250",
  },
  {
    id: 2,
    slug: "rustic-vase-set",
    name: "Rustic Vase Set",
    img: "/photo1.png",
    price: "£155",
  },
  {
    id: 3,
    slug: "the-silky-vase",
    name: "The Silky Vase",
    img: "/photo2.png",
    price: "£125",
  },

];

const PopularProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-16 px-5 mx-auto mt-16 mb-16 max-w-[1440px]">
      <h2 className=" font-headings-h1 lg:text-17xl mb-12 text-start text-dark-primary ">
        Our Popular Products
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-8 items-stretch px-4 md:px-0">
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/products/${product.slug}`}>
        
            <div className="bg-white shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
              <Image
                src={product.img}
                alt={product.name}
                width={index === 0 ? 630 : 305}
                height={375}
                className="object-cover w-full h-[375px]"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/products">
          <button className="px-6 py-2 text-dark-primary  bg-gray-50 hover:bg-dark-primary hover:text-white transition-colors duration-300">
            View Collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
