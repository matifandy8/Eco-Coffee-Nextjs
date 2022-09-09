import React from 'react'
import { ProductContainer,ImgCard, ButtonCard, NameCard ,PriceCard,InfoBox} from './Products.styles'
import { IProduct } from './type';



const ProductCard: React.FC<IProduct> = ({ name, image, price}:IProduct) => {
  return (
    <ProductContainer>
        <ImgCard src={image} alt={name}/>
        <InfoBox>
          <NameCard>{name}</NameCard>
        <PriceCard>${price}</PriceCard>
        </InfoBox>
        <ButtonCard > Buy </ButtonCard>
    </ProductContainer>
  )
}

export default ProductCard;