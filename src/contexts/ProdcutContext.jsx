import React, { createContext, useState, useEffect } from 'react'

export const ProdcutContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchProduct = async () => {
            const resp = await fetch('https://fakestoreapi.com/products')
            const data = await resp.json();
            setProducts(data);
        setLoading(false);
    }
    fetchProduct(); 
    },[])
    return (
        <ProdcutContext.Provider value={{products,loading}}>{children}</ProdcutContext.Provider>
  )
}

export default ProductProvider