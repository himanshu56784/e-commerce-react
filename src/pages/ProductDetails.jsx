import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';
import { ProdcutContext } from '../contexts/ProdcutContext';
import { TbArrowBigDownFilled } from 'react-icons/tb';
import { TbArrowBigUpFilled } from 'react-icons/tb';
import { BsInstagram,BsTwitter, BsWhatsapp } from 'react-icons/bs'
import {AiFillFacebook } from 'react-icons/ai'
const ProductDetails = () => {
  window.scrollTo({top:0})
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProdcutContext);
  
  const findProductById = () => {
    let item = products.find(item => item.id === parseInt(id));
    return item;
  }

  const item = { ...findProductById(), amount: 1 };
  const [state, setState] = useState(item);
  const { category, price, image, title, amount } = state;
  
  const decreaseQuantity = () => { 
      return setState({ ...item, amount: amount - 1 });
  };
  const increaseQuantity = () => { 
      return setState({ ...item, amount: amount + 1 });
  };

  const size = ['S', 'M', 'L', 'XL', 'XXL','XXL'];
  return (
    <div className='flex justify-center gap-x-4 bg-opacity-10 my-5'>
      <div className='max-w-[410px] overflow-hidden rounded-xl shadow-2xl'>
        <img className='w-full h-full' src={image} alt="demo" />
      </div>
      <div className='info shadow-2xl flex flex-col gap-y-5 rounded-lg p-4 w-7/12 bg-white'>
        <div className='flex justify-start flex-col f border-b-2 border-stone-700 gap-y-1'>
          <h1 className='lg:text-[1.8em] font-[Source] font-extrabold text-slate-800 leading-6'>{title}</h1>
          <p className='font-semibold text-slate-500 text-sm pb-3 cursor-pointer hover:text-sky-900 '>{category}</p>
        </div>
        <div className='text-lg font-semibold text-stone-900'>
          <p>{ `$${price}` }</p>
        </div>

        <div>
          <p className='text-slate-700'> Please select a size. <span className='uppercase underline font-semibold'>Size Chart </span> </p>
        </div>

        <div className='flex flex-wrap gap-y-2 gap-x-4 hover:'>
          {
            size.map((sizes) => {
              return <div className='cursor-pointer bg-slate-300 border-2 border-stone-600 hover:border-sky-800 hover:bg-opacity-60 rounded-2xl'>
                <h1 className='px-4 py-1'>{ sizes }</h1>
                </div>
            })
          } 
        </div>

        <div>
          <p className='text-slate-700'>Size not available ? <span className='text-red-500 underline cursor-pointer'>Notify Me</span></p> 
        </div>

        <div className='flex gap-x-4'>
        <h3 className='font-semibold text-slate-500 text-sm  cursor-pointer hover:text-sky-900'>Qunatity :</h3>
        <div className='flex justify-between items-center border-stone-500 shadow-md w-fit'>
              <div className='cursor-pointer' onClick={()=> increaseQuantity()}>
              <TbArrowBigUpFilled className='hover:text-sky-500'/>
              </div>
              <div className='mx-5'>
              { amount }
              </div>
              <div className='cursor-pointer' onClick={()=> decreaseQuantity()}>
              <TbArrowBigDownFilled className='hover:text-red-600'/>
              </div>
          </div>
        </div>
        
        <div className='bg-[#274C77] w-fit rounded-2xl hover:bg-opacity-95' onClick={() => addToCart(state,state.id,false)} >
          <button className='text-white font-bold px-8 py-2 '>ADD TO CART</button>
        </div>

        <div className='flex justify-center items-center w-fit gap-x-4'>
          
          <p className='font-primary capitalize underline'>share</p>
          <div  className='flex justify-center gap-x-5 text-xl text-slate-700'>

          <BsWhatsapp className='cursor-pointer hover:scale-125 '/>
          <BsInstagram className='cursor-pointer hover:scale-125'/>
          <AiFillFacebook className='cursor-pointer hover:scale-125'/>
          <BsTwitter className='cursor-pointer hover:scale-125'/>
          </div>
          
          
        </div>

      </div>
    </div>
    
  )
}

export default ProductDetails