import React,{useContext} from 'react'
import {ProdcutContext} from '../contexts/ProdcutContext'
import Product from '../components/Product';
import Hero from '../components/Hero'
import Loader from '../components/Loader';
const Home = () => {
  const {products,loading} = useContext(ProdcutContext);

  const filterProducts = products.filter(item => item.category === "men's clothing" || item.category === "women's clothing")
  

  
  return (
    <div className='mx-0'>
      <Hero />
      {
        loading?<Loader />:null
      }
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {
            filterProducts.map( item => {
              return <Product product={item} key={item.id} />
            })
          }
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home