import React, { useContext } from 'react'
import { BsPlus,BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';


const Product = ({product}) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);

  
  return (
    <div className='border rounded-xl shadow-md bg-white hover:shadow-2xl' >
      
      <div className='border border-b-2 rounded-xl h-[300px] mb-4 bg-white relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
          </div>
        </div>

      <div className='absolute top-0 -right-11 group-hover:right-0 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button onClick={() => addToCart(product,id,true)}>
          <div className='flex justify-center items-center bg-red-500 text-white w-12 h-12'>
            <BsPlus className='text-3xl'/>
          </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
            <BsEyeFill />
          </Link>
      </div>
      </div>
      <div>

        <div className='pl-2'>
          <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className='font-semibold mb-1'>{title}</h2>
          </Link>
          <div className='font-semibold mb-2'>
            ${price}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product