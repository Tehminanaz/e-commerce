"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const productsData = [
  { id: 1, name: "Dandy Chair", category: "plant-pots", img: "/Large.png", price: "£250" },
  { id: 2, name: "Elegant Chair", category: "chairs", img: "/Large.png", price: "£250" },
  { id: 3, name: "Rustic Vase Set", category: "ceramics", img: "/photo4.png", price: "£155" },
  { id: 4, name: "Silky Vase", category: "ceramics", img: "/photo3.png", price: "£125" },
  { id: 5, name: "Wooden Table", category: "tables", img: "/table.png", price: "£200" },
  { id: 6, name: "Modern Table", category: "tables", img: "/table.png", price: "£280" },
  { id: 7, name: "Stylish Vase", category: "ceramics", img: "/photo3.png", price: "£200" },
  { id: 8, name: "Classic Chair", category: "chairs", img: "/Large.png", price: "£230" },
  { id: 9, name: "Antique Vase", category: "ceramics", img: "/photo4.png", price: "£180" },
  { id: 10, name: "Round Plant Pot", category: "plant-pots", img: "/Large.png", price: "£220" },
  { id: 11, name: "Chair Set", category: "chairs", img: "/Large.png", price: "£250" },
  { id: 12, name: "Tall Vase", category: "ceramics", img: "/photo3.png", price: "£160" },
  { id: 13, name: "Small Table", category: "tables", img: "/table.png", price: "£215" },
];

const PAGE_SIZE = 9; // Maximum products to show per page

const CategoryPage = () => {
  const params = useParams();
  const { slug } = params; // Category slug
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on category
  const filteredProducts = productsData.filter(
    (product) => product.category === slug
  );

  // Pagination Logic
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedProducts = filteredProducts.slice(
    0,
    startIndex + PAGE_SIZE
  );

  const handleViewMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="py-16 px-5 mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-8 text-center capitalize">
        {slug} Collection
      </h2>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <Link href={`/products/${product.id}`}>
                  <button className="mt-4 px-4 py-2  bg-slategray-100 text-white rounded hover:bg-dark-primary">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found in this category.</p>
      )}

      {/* View More Button */}
      {paginatedProducts.length < filteredProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-6 py-3 bg-slategray-100 text-white font-semibold rounded hover:bg-dark-primary"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoryPage;
