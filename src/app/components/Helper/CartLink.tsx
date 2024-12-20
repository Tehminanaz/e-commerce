import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import Link from 'next/link'
import React from 'react'

const CartLink = () => {
  return (
    <div>
        <Link href='/cart'>
                <SheetClose className=''>
                <Button className='w-full mb-6 mt-6 text-white bg-dark-primary hover:bg-slategray-100'>View All Cart</Button>
                </SheetClose>
                </Link>
    </div>
  )
}

export default CartLink