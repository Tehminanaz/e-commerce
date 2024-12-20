"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    slug: "the-dandy-chair",
    name: "The Dandy Chair",
    img: "/photo1.png",
    price: "£250",
  },
  {
    id: 2,
    slug: "rustic-vase-set",
    name: "Rustic Vase Set",
    img: "/photo2.png",
    price: "£155",
  },
  {
    id: 3,
    slug: "the-silky-vase",
    name: "The Silky Vase",
    img: "/photo3.png",
    price: "£125",
  },
  {
    id: 4,
    slug: "the-lucy-lamp",
    name: "The Lucy Lamp",
    img: "/photo4.png",
    price: "£399",
  },
];

const NewCeramics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-16 px-5 mx-auto mt-16 mb-8 bg-light-grey w-full max-w-[1440px]">
      <h2 className="text-17xl font-headings-h1 text-left mb-5 text-dark-primary">New Ceramics</h2>

      {/* Slider for Small Screens */}
      <div className="block sm:hidden relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.slug}
              className="min-w-full flex flex-col items-center justify-center"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={350}
                height={380}
                className="object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-body-medium text-lg mb-2 text-primary">
                  {product.name}
                </h3>
                <p className="text-slategray-100">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-primary text-white rounded-full p-3 z-10 shadow-md"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-primary text-white rounded-full p-3 z-10 shadow-md"
        >
          ▶
        </button>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <Link href={`/products/${product.slug}`}>
              <Image
                src={product.img}
                alt={product.name}
                width={350}
                height={380}
                className="object-cover no-underline"
              />
              <div className="p-4">
                <h3 className="font-body-medium text-lg mb-2 text-primary">
                  {product.name}
                </h3>
                <p className="text-slategray-200">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="./listing">
          <button className="px-6 py-2 text-dark-primary  bg-white hover:bg-dark-primary hover:text-white transition-colors duration-300">
            View Collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewCeramics;


