import type { NextPage } from 'next';
import Image from "next/image";

const ShoppingBasket: NextPage = () => {
  return (
    <div className="w-full bg-light-grey h-auto text-left text-sm text-dark-primary font-body-medium">
      {/* Header Section */}
      <div className="py-6 px-8 flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-headings-h3">Your shopping cart</h1>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-3 md:grid-cols-12 py-4 px-6 text-sm font-bold bg-gray-100">
        <div className="col-span-6 md:col-span-4">Product</div>
        <div className="col-span-3 md:col-span-4 text-center">Quantity</div>
        <div className="col-span-3 md:col-span-4 text-right">Total</div>
      </div>

      {/* Product Items */}
      <div className="grid grid-cols-3 md:grid-cols-12 py-4 px-6 items-center">
        {/* Product Details */}
        <div className="col-span-6 md:col-span-4 flex items-center gap-4">
          <Image
            className="w-[109px] h-[134px] object-cover"
            width={109}
            height={134}
            alt="Graystone Vase"
            src="Product Image.png"
          />
          <div>
            <p className="font-bold">Graystone Vase</p>
            <p className="text-xs">A timeless ceramic vase with a tri color grey glaze.</p>
          </div>
        </div>

        {/* Quantity */}
        <div className="col-span-3 md:col-span-4 flex justify-center">
          <div className="flex items-center border border-gray-300">
            <button className="px-2">-</button>
            <span className="px-4">1</span>
            <button className="px-2">+</button>
          </div>
        </div>

        {/* Total */}
        <div className="col-span-3 md:col-span-4 text-right">£85</div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-12 py-4 px-6 items-center">
        {/* Product Details */}
        <div className="col-span-6 md:col-span-4 flex items-center gap-4">
          <Image
            className="w-[109px] h-[134px] object-cover"
            width={109}
            height={134}
            alt="Basic White Vase"
            src="Product Image.png"
          />
          <div>
            <p className="font-bold">Basic White Vase</p>
            <p className="text-xs">Beautiful and simple this is one for the classics.</p>
          </div>
        </div>

        {/* Quantity */}
        <div className="col-span-3 md:col-span-4 flex justify-center">
          <div className="flex items-center border border-gray-300">
            <button className="px-2">-</button>
            <span className="px-4">1</span>
            <button className="px-2">+</button>
          </div>
        </div>

        {/* Total */}
        <div className="col-span-3 md:col-span-4 text-right">£125</div>
      </div>

      {/* Subtotal Section */}
      <div className="py-6 px-8 flex flex-col items-end">
        <div className="flex items-center gap-8">
          <span className="font-bold text-xl">Subtotal</span>
          <span className="text-2xl font-bold">£210</span>
        </div>
        <p className="text-sm text-gray-500">Taxes and shipping are calculated at checkout</p>
      </div>

      {/* Checkout Button */}
      <div className="flex justify-end px-8">
        <button className="bg-dark-primary text-white py-3 px-6">Go to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
