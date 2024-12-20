'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/cartSlice';
import { Product } from '../../../typing';
import { useToast } from '@/hooks/use-toast';


type Props = {
    product : Product;
}

const ProductCard = ({product} : Props) => {
    
      const num = Math.round(product.rating.rate)
       const ratingArry = new Array (num).fill(0);

       const {toast} = useToast()

       const dispatch = useDispatch();
       const addToCartHandler = (product: Product) =>{
          toast({
            description:"Item Added to cart",
            variant:'success',
          })
          dispatch(addItem(product));
       }
  return ( <div className='p-4'>
     <div className='w-[200px] h-[150px]'>
        <Image 
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className='w-[80%] h-[80%] object-contain'  />
     </div>
     {/* category */}
     <p className='mt-5 text-xs capitalize text-slate-300'>
        {product.category}
        </p>
        {/* title */}
        <Link href={`/product/product-details/${product.id}`}>
        <h1 className='text-lg cursor-pointer hover:text-blue-900 transition-all hover:uderline sm:w-full sm:truncate mt-2 text-slate-50 font-semibold'>
            {product.title}
        </h1>
        </Link>
        {/* Rating */}
        <div className='flex items-center'>
        {ratingArry.map(() => (
           <StarIcon
            key={Math.random() * 1000}
            size={16}
            fill="yellow"
            className="text-yellow-600"
             />
          ))}
        </div>
         <div className='flex mt-2 items-center space-x-2'>
              <p className='text-slate-50 text-base line-through font-semibold opacity-85'>{`${(product.price + 10).toFixed(2)}`}</p>
              <p className='text-white text-lg font-bold space-x-2 '>${product.price}</p>
         </div>
         {/* Button */}
         <div className='mt-4 items-center space-x-2 '>
            <Button onClick={() => {
                addToCartHandler(product)
            }} size={"icon"}>
                <ShoppingBag size={18}/>
            </Button>
            <Button size={"icon"} className='bg-red-600 '>
                   <Heart size={18}/>
            </Button>      
         </div>
  </div>
  )
}

export default ProductCard