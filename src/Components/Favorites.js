import React, { useEffect, useState } from 'react'
import Title from "../Components/ui/Title"
import productsData from "../api/products.json"
import ProductItem from './ui/ProductItem';
const Favorites = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData)
  }, [])
  return (
    <div className='mt-8 md:container md:w-10/12 mx-auto  rounded-lg'>

      <div className='ml-10 md:ml-0'>
        <Title title="Favoriler" />
      </div>
      <div className='grid grid-cols-3 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4 gap-px rounded-lg overflow-hidden '>
        {
          products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default Favorites