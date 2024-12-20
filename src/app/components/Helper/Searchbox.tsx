import { Dialog } from '@radix-ui/react-dialog'
import React from 'react'
import { DialogContent, DialogTrigger } from '../../../components/ui/dialog'
import {  SearchIcon } from 'lucide-react'

const SearchBox = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <SearchIcon size={26} className="md:size-26" cursor={"Pointer"}/>
        </DialogTrigger>
        <DialogContent>
            <form>
                <input type='text' placeholder='search product' className='block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none' />
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default SearchBox
