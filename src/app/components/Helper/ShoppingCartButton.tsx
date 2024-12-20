'use client';

import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';
import { RooteState } from '../../../../store/store';
import { Sheet, SheetContent, SheetTrigger} from '../../../components/ui/sheet'
import CartSlidebar from '../Helper/CartSlidebar';

const ShoppingCartButton = () => {

  const items = useSelector((state:RooteState) => state.cart.items);
     const totalQuantity = items.reduce((total, items) => total + items.quantity, 0);
  return (
    <Sheet>
      <SheetTrigger>
    <div className='relative'>
         <span className='absolute -top-4 -right-2 w-5 h-5 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full z-50'>{totalQuantity}</span>
         {/* <ShoppingBagIcon size={26} className="md:size-26" cursor={"Pointer"}/> */}
         <button aria-label="Cart" className="text-gray-600 hover:text-customPurple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-6-9v9"
                  />
                </svg>
              </button>
    </div>
    </SheetTrigger>
    <SheetContent className="overflow-auto h-full">
      <CartSlidebar items={items} />
    </SheetContent>
    </Sheet>
  )
}

export default ShoppingCartButton