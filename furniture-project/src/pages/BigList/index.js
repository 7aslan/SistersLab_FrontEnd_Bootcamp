import React from 'react'
import ProductCard from '../ProductCard'


const BigList = ({productList, addToCart}) => {

  return (
    <div>
      {productList.map((product)=>(
        <ProductCard key={product.id} {...product} addToCart={addToCart}/>
      ))}


    </div>
  )
}

export default BigList