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
    <div className='mt-8 container mx-auto w-10/12 rounded-lg'>
      <Title title="Favoriler" />
      <div className='grid grid-cols-8 gap-px rounded-lg overflow-hidden '>
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