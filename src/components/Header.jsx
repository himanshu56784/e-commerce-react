import React, { useContext } from 'react'
import { SideBarContext } from '../contexts/SideBarContext'
import logo from '../img/logo.svg'
import {BsCartCheck} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'
const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { cart } = useContext(CartContext);
  return (
    <header className='bg-white'>
      <div className='flex justify-between items-center mx-10 md:mx-[80px] xl:mx-[160px] py-6'>

        <div className='hover:cursor-pointer'>  
          <img className='w-10 h-10' src={logo} alt="logo" />
      </div>
      <div onClick={() =>  setIsOpen(!isOpen)} className='relative'>
          <BsCartCheck className='text-3xl cursor-pointer flex relative' />
          <div className={ cart.length === 0 ? 'hidden' :'bg-red-600 w-5 h-5 text-xs text-white flex absolute -bottom-2 -right-4 justify-center items-center rounded-full'} >{ cart.length }</div>
      </div>
      </div>
    </header>
  )
}

export default Header