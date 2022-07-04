import React from 'react'
import { ProductContainer,ImgCard, LinkCard, NameCard } from './Products.styles'

const ProductCard: React.FC = () => {
  return (
    <ProductContainer>
        <ImgCard src="https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Latte.jpg.webp?itok=bVdCHhYt" alt="image" />
        <NameCard>Name</NameCard>
        <LinkCard href="">More info <span>-&gt;</span> </LinkCard>
    </ProductContainer>
  )
}

export default ProductCard;