import React, { useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'
import {BsArrowDownCircle } from 'react-icons/bs'

import CartItem from './CartItem'
import { SideBarContext } from '../contexts/SideBarContext'
import {CartContext} from '../contexts/CartContext' 
const SideBar = () => {
  const { isOpen, handleClose} = useContext(SideBarContext);
  const {cart, clearCart , total } = useContext(CartContext);
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-opacity-95 bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] scroll-m-3`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shoping Bag ({cart.length})</div>
        <div className='cursor-pointer w-8 h-8 flex items-center justify-center' onClick={() => handleClose()}>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 mt-1 overflow-y-auto overflow-x-hidden border-b h-[64%]' >
        {
          cart.map((item) => <CartItem item={item} key={item.id} /> )
        }
      </div>
      <div className='flex justify-start flex-col gap-y-2'>

      <div className='flex justify-between mt-3 px-5 items-center'>
          
          <div className='text-lg underline'>total : <span>${total}</span></div>
        
          <div className='p-2 cursor-pointer hover:text-[#e5383b] hover:scale-150 transition-all duration-300' onClick={() => clearCart()} >
            <AiFillDelete className='text-2xl'/>
          </div>
        
        </div>

        <div className='flex justify-center items-start bg-[#6096BA] hover:bg-opacity-95 rounded-lg'>
          <button className='text-white py-2 w-full'>View Cart</button>
        </div>
        
        <div className='flex justify-around items-center bg-[#274C77] hover:bg-opacity-95 rounded-lg cursor-pointer'>
          <div className='flex items-center justify-center gap-x-2 '>
          <button className='text-white py-2'>Order Now</button>
          <BsArrowDownCircle className='text-2xl text-blue-400 animate-bounce opacity-95'/>
          </div>
        </div>
      
      </div>
      <div>

      </div>
    </div>
  )
}

export default SideBar