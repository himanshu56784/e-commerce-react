import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io'
import { TbArrowBigDownFilled } from 'react-icons/tb';
import { TbArrowBigUpFilled } from 'react-icons/tb';
import { CartContext } from '../contexts/CartContext';
const Cartitem = ({item}) => {
  const { id, title, image, price, amount } = item;

  const calculateFinalPrice = (price, amount) => {
    return parseFloat(price * amount).toFixed(2);
  }
  const {removeFromCart,decreaseQuantity,increaseQuantity} = useContext(CartContext)

  return (
    <div className='flex justify-start border-r-neutral-500 shadow-xl'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        
        <Link to={`product/${id}`}>
          <img className='max-w-[80px]' src={image} alt="image_" />
        </Link>
        <div className='flex flex-col w-full'>

        <div className='w-full flex justify-between items-center'>
     
          <div>
            <Link to={`product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primery hover:underline'>
              {title}
           </Link>
          </div>
          
            <div className='cursor-pointer mr-1' onClick={() => removeFromCart(id)}>
            <IoMdClose className='text-2xl hover:text-red-800'/>
          </div>

          </div>
          <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center border-stone-500 shadow-md'>
              <div className='cursor-pointer' onClick={() => increaseQuantity(id)}>
              <TbArrowBigUpFilled className='hover:text-sky-500'/>
              </div>
              <div className='mx-5'>
              {`${amount}`}
              </div>
              <div className='cursor-pointer' onClick={() => decreaseQuantity(id)}>
              <TbArrowBigDownFilled className='hover:text-red-600'/>
              </div>
          </div>
          <div className='font-light'>
              {`${price}`}
          </div>
          <div className='font-semibold'>
              {`${calculateFinalPrice(price,amount)}`}
          </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Cartitem