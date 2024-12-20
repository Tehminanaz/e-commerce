'use client';

import { Button } from '@/components/ui/button'
import React from 'react'
import { addItem } from '../../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { Product } from '../../../typing';
import { useToast } from '@/hooks/use-toast';

const AddToCart = ({product}:{product:Product}) => {
  const dispatch=useDispatch()
  const {toast} = useToast()

  const addToCartHandler =(product: Product)=> {
    toast({
       description:"Item Add to the cart",
       variant: 'success',
    })
    dispatch(addItem(product));
  }
  return (
    <Button onClick={()=>{addToCartHandler(product)}} className='mt-6'>Add to card</Button>
  )
}

export default AddToCart