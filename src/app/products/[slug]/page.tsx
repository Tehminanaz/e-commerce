"use client"
import React from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
import Image from "next/image";
import AddToCart from "../add-cart";
import Header from "@/app/components/Header";
import NewCeramics from "@/app/components/NewCeramics";
import Features from "@/app/components/Features";
import NewsletterSignup from "@/app/components/NewsletterSignup";
import AboutFooter from "@/app/components/AboutFooter";



// Define the Product type
type products = {
  name: string;
  price: string;
  description: string;
  features: string[];
  dimensions: { height: string; width: string; depth: string };
  img: string;
  rating: { rate: number; count: number };
};
// Sample products data (for demonstration purposes, should be fetched dynamically)
const products = [
  {id:1,
   slug: "the-dandy-chair",
   name: "The Dandy Chair",
   price: "£250",
   img: "/photo1.png",
   description:
   "A timeless design, with premium materials features as one of our most popular and iconic pieces.",
   features: [
   "Premium material",
   "Handmade upholstery",
   "Quality timeless classic",
   ],
   dimensions: { height: "100cm", width: "75cm", depth: "50cm" },
   rating: { rate: 4.5, count: 100 } // Add a rating field
  },

  {id:2,
   slug: "rustic-vase-set",
   name: "Rustic Vase Set",
   price: "£155",
   img: "/photo2.png",
   description:
      "A charming set of vases with a rustic finish, perfect for any home.",
   features: ["Rustic finish", "Handmade craftsmanship"],
   dimensions: { height: "30cm", width: "15cm", depth: "15cm" },
   rating: { rate: 4.5, count: 100 } // Add a rating field
  },

  {id:3,
   slug: "the-silky-vase",
   name: "The Silky Vase",
   price: "£125",
   img: "/photo3.png",
   description:
      "A sleek and elegant vase that enhances the beauty of any flower arrangement.",
   features: ["Sleek design", "High-quality ceramic"],
   dimensions: { height: "40cm", width: "20cm", depth: "20cm" },
   rating: { rate: 4.5, count: 100 } // Add a rating field
  },

  {id:4,
   slug: "the-lucy-lamp",
   name: "The Lucy Lamp", 
   price: "£399", 
   img: "/photo4.png",
   description:
      "An exquisite lamp that provides warm light and elevates the aesthetics of your room.",
    features: ["Warm light", "Modern design", "Durable build"],
    dimensions: { height: "60cm", width: "30cm", depth: "30cm" },
    rating: { rate: 4.5, count: 100 } // Add a rating field
  },
];

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="space-y-8 px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl font-semibold text-red-600">Product not found</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => router.push("/products")}
        >
          Go Back to Products
        </button>
      </div>
    );
  }

    return (
      <div className="">
        <Header/>
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12 mt-28 ml-28">
              <Image
                src={product.img}
                alt={product.name}
                width={600}
                height={400}
                className="object-cover"
              />
      
              <div className="lg:w-1/2">
                <h1 className="text-17xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-700 text-17xl">{product.price}</p>
                <p className=" text-5xl text-gray-700 mb-6 mt-3">Description: <br></br>{product.description}</p>
                <h2 className="text-5xl font-semibold mb-2">Features:</h2>
                <ul className="list-disc pl-5 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 text-5xl">
                      {feature}
                    </li>
                  ))}
                </ul>
                <h2 className="text-5xl font-semibold mb-2">Dimensions:</h2>
                <p>Height: {product.dimensions.height}</p>
                <p>Width: {product.dimensions.width}</p>
                <p>Depth: {product.dimensions.depth}</p>
      
                <AddToCart product={{
                 id: product.id,
                 title: product.name,
                 price: parseFloat(product.price.replace("£", "")), // Removing '£' sign and converting to number
                 description: product.description,
                 category: "Home Decor", // Add relevant category if missing
                 image: product.img,
                 rating: product.rating // Make sure `product.rating` exists
                 }} />
              </div>
            </div>
            <NewCeramics/>
            <Features/>
            <NewsletterSignup/>
            <AboutFooter/>
          </div>
  );
};

export default ProductPage;
