import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewCeramics from "@/app/components/NewCeramics";
import NewsletterSignup from "@/app/components/NewsletterSignup";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";

// Sample products data
const products = [
  { id: 1, slug: "the-dandy-chair", name: "The Dandy Chair", price: "£250", img: "/photo.png" },
  { id: 2, slug: "rustic-vase-set", name: "Rustic Vase Set", price: "£155", img: "/photo1.png" },
  { id: 3, slug: "the-silky-vase", name: "The Silky Vase", price: "£125", img: "/photo2.png" },
  { id: 4, slug: "the-lucy-lamp", name: "The Lucy Lamp", price: "£399", img: "/photo3.png" },
];

const ProductsPage = () => {
  return (
    <section className="bg-white">
      <Header/>
    <div className="bg-white py-16 px-5 mx-auto mt-16 mb-16 max-w-[1440px]">
      <h1 className=" font-headings-h1 lg:text-17xl mb-12 text-start text-dark-primary">Our Products</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="space-y-4 text-center">
            <Link href={`/products/${product.slug}`}>
              <div className="relative w-full h-80">
                <Image src={product.img} alt={product.name} fill className="object-cover rounded-lg" />
              </div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
            </Link>
          </div>
        ))}
      </section>
      <div className="mt-20">
          <NewCeramics />
          <Features/>
          <NewsletterSignup />
          
        </div>
    </div>
    <Footer/>
    </section>
  );
};

export default ProductsPage;
