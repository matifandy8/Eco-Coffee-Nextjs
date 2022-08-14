import React from 'react'
import { ProductContainer,ImgCard, LinkCard, NameCard } from './Products.styles'

interface IProduct {
  image: string;
  name: string;
}



const ProductCard: React.FC<IProduct> = ({ name, image}:IProduct) => {
  return (
    <ProductContainer>
        <ImgCard src={image} alt="image" />
        <NameCard>{name}</NameCard>
        <LinkCard href="">More info <span>-&gt;</span> </LinkCard>
    </ProductContainer>
  )
}

export default ProductCard;