import React from 'react'
import ProductCard from './ProductCard'
import { ProductList, Title } from './Products.styles'

const ProductsScreen: React.FC = () => {
  return (
    <div>
       <Title>Products</Title>
        <ProductList>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </ProductList>
    </div>
  )
}

export default ProductsScreen