import React from 'react'

const ProductCard = ({fields, addToCart}) => {
  let {name, price} = fields;
  price = price/10;

  const image = fields.image[0].url;




  return (
    <article>
      <button onClick={addToCart}>Add to Cart</button>
      <img
        src={image}
        alt={name}
      />

      <div>
        <div>
          <h4>{name}</h4>
          <p>${price}</p>
        </div>
      </div>

    </article>
  )
}

export default ProductCard