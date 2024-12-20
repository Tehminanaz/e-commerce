'use client'

import React from 'react'
import { useSelector } from 'react-redux';
import { RooteState } from '../../../store/store';
import Image from 'next/image';
import Link from 'next/link'
import { Button } from '@/components/ui/button';
// import { useUser } from '@clerk/nextjs';

const Cart = () => {
    // Get our cart items
    const items = useSelector((state:RooteState) => state.cart.items);
    // Catculating Total Quantity
     const totalQuantity = items.reduce((total, items) => total + items.quantity, 0);
    //  Calculate the total price

    const totalprice = items.reduce((total, item) => total+item.price*item.quantity,0).toFixed(2);

    // calculate  vet (15%)

    const vat = (+totalprice * 0.15).toFixed(2);
    // total price with vat
    const totalpricewithvat = (+totalprice + +vat).toFixed(2);

    // Get authenticate usser
    // const {user} = useUser();

  return (
    // Get our items
    <div className='mt-8 min-h[60vh]'>
      {/* Chack if the cart is ampty */}
      {items.length==0 && (
        <div className='flex items-center w-full h-[80vh] flex-col justify-center '>
            <Image
            src="/images/cart.svg"
            alt='cart'
            width={400}
            height={400}
            className='object-center mx-auto'
            />
            <h1 className='mt-8 text-2xl font-semibold'>Your Cart is empty</h1>
            <Link href='/' className='mt-4 '>
            <Button>
                Shop Now
            </Button>
            </Link>
        </div>
      ) }

      {/* if cart item exist */}
      {items.length>0 && (
        <div className='md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12 '>
            {/* Cart items*/}
            <div className='rounded-lg shadow-md overflow-hidden xl:cols-span-4 '>
                <h1 className='p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700 items-center'>Your Cart ({totalQuantity}items)</h1>
                {items.map((items) => {
                    return <div key={items.id}>
                        <div className='flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 space-x-10'>
                            <div>
                                <Image 
                                src={items.image} 
                                alt={items.title} 
                                width={180}
                                height={180}
                                />
                            </div>
                            <div>
                                <h1 className='md:text-xl text-base font-bold text-black'>{items.title}</h1>
                                <h1 className='md:text-lg text-sm font-semibold'>Category : {items.category}</h1>
                                <h1 className='md:text-2xl text:lg font-bold text-blue-500 '>${items.price}</h1>
                                <h1 className='md:text-lg text-sm font-semibold '>Quaintity : {items.quantity}</h1>
                                <div className='flex items-center mt-4 space-x-2'>
                                    {/* Add more button */}
                                    <Button>
                                        Add More
                                    </Button>
                                    {/* Remove button */}
                                    <Button variant={"destructive"}>
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            {/* Cart Summary */}
            <div className='xl:col-span-2'>
                <div className='bg-indigo-950 sticky top-[25vh] p-6 rounded-lg'>
                    <h1 className='text-center mt-8 mb-8 text-white text-3xl font-semibold'>Summary</h1>
                    <div className='w-full h-[1.2px] bg-white bg-opacity-20 '></div>
                    <div className='flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between'>
                        <span>Subtotal</span>
                        <span>${totalprice}</span>
                    </div>
                    <div className='flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between'>
                        <span>Subtotal</span>
                        <span>${totalprice}</span>
                    </div>
                    <div className='flex  mb-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className='w-full h-[1.2px] bg-white bg-opacity-20 '></div>
                    <div className='flex  mt-6 mb-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                        <span>Total</span>
                        <span>${totalpricewithvat}</span>
                    </div>
                    {/* {!user && (
                        <Link href='/sign-in'>
                            <Button className='bg-orange-500 w-full '>Sing in to checkout</Button>
                        </Link>
                    )}
                    {
                        user && (
                        //    paypal button
                        <Button className='w-full bg-orange-500 '>Paypal</Button>
                        )
                        
                    } */}
                </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default Cart