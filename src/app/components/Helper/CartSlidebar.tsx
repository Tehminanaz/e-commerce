import React from 'react'
import { addItem, CartItem, removeItem } from '../../../../store/cartSlice'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'
import { Link } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { SheetClose } from '../../../components/ui/sheet'
import CartLink from './CartLink'

type props = {
    items:CartItem[]
}

const CartSlidebar = ({items}:props) => {

    const dispatch=useDispatch()

    const addToCartHandler =(item:CartItem)=>dispatch(addItem(item));
    const removeCartHandler = (id:number) => dispatch(removeItem({id}));

  return (
    <div className='mt-2.5 h-full mb-6 bg-whitesmoke text-slate-50'>
        {/* Heading */}
        <h1 className='text-center font-bold text-lg mb-6 text-black '>You Cart</h1>
        {/* if ther is no cart */}
        {items.length==0 && (
            <div className='flex items-center w-full h-[80vh] flex-col justify-center'>
                <Image
                src="/EmptyCart.png"
                alt='empty cart'
                width={200}
                height={200}
                className='object-cover mx-auto'
                />
                <h1 className='mt-8 text-2xl text-slate-400 font-semibold'>Your Cart is empty</h1>
            </div>
        )}

        {/* if ther is cart items */}

        {items.length>0 && (
            <div>
                {items?.map((item) => {
                    return <div key={item.id} className='pb-4 border-b-2 border-gray-300 border-opacity-60 p-4'>

                        {/* Cart item image  */}
                        <div>
                            <Image 
                            src={item?.image}
                            alt={item.title}
                            width={60}
                            height={60}
                            className='object-cover mb-4'
                            />
                        </div>
                        <div>
                            {/* title */}
                            <h1 className='text-sm text-blue-950 w-4/5 font-semibold truncate'>{item?.title}</h1>
                            {/* Price */}
                            <h1 className='text-base text-blue-950 font-bold'>${(item?.price * item?.quantity).toFixed(2)}</h1>
                            {/* Quentity */}
                            <h1 className='text-base font-bold mb-2 text-black '>Quantity:{item?.quantity}</h1>
                            {/* Two button one for add and one for remove */}
                            <div className='flex items-center space-x-4 '>
                                  <Button onClick={()=>{removeCartHandler(item.id)}} size={"sm"} variant={'destructive'}>Remove</Button>
                                  <Button onClick={()=>addToCartHandler(item)} size={"sm"}>Add</Button>
                            </div>
                        </div>
                    </div>
                })}

                <CartLink/>
            </div>
        )}
    </div>
  )
}

export default CartSlidebar