import React from 'react'
import ProductItem from './ProductItem'

export default function ProductListView(props) {
  return (
    <div className="productContainer"> 
    
    {props.products2.map(product =><ProductItem name={product.name} image = {product.image} price={product.price} />)}
  </div>
  )
}
//filteredP