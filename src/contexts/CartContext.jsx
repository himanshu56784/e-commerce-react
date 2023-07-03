import React, { createContext, useEffect, useState } from 'react'
import Loader from '../components/Loader';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    <Loader />
    const totalCal = cart.reduce((acum, currItem) => {
      return acum + currItem.price * currItem.amount;
    },0 );
    setTotal(parseFloat(totalCal).toFixed(3));
    <Loader />
  });

  const increaseQuantity = (id) => {
    const newCartItems = cart.map((item) => {
      if (item.id === id) return { ...item, amount: item.amount + 1 };
      return item;
    });
    setCart(newCartItems);
  }
  
  const addToCart = (product, id,amount) => {
  if(amount)product = { ...product, amount: 1 };

  let cartItem = cart.find((item) => item.id === id);
  if (cartItem) {
    increaseQuantity(id);
  } else {
    setCart((oldCart) => [...oldCart, product]);
  }
  }

  
  const decreaseQuantity = (id) => {
  setCart((old) =>
    old.map((item) => {
      if (item.id === id) {
        if (item.amount === 1) {
          removeFromCart(item.id);
          return null; 
        } else {
          return { ...item, amount: item.amount - 1 };
        }
      }
      return item;
    }).filter(Boolean)
  );
};


  const removeFromCart = (id) => {
      setCart((old) => old.filter( item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }
  
  return (
    <CartContext.Provider value={{cart,addToCart,setCart,clearCart,removeFromCart,decreaseQuantity,increaseQuantity,total}}>{children}</CartContext.Provider> 
  )
}

export default CartProvider