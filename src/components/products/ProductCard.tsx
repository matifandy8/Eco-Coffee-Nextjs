import React from 'react'
import { ProductContainer,ImgCard, ButtonCard, NameCard ,PriceCard,InfoBox} from './Products.styles'

interface IProduct {
  image: string;
  name: string;
  price: number;
}



const ProductCard: React.FC<IProduct> = ({ name, image, price}:IProduct) => {
  return (
    <ProductContainer>
        <ImgCard src={image} alt="image" />
        <InfoBox>
          <NameCard>{name}</NameCard>
        <PriceCard>${price}</PriceCard>
        </InfoBox>
        <ButtonCard > Buy </ButtonCard>
    </ProductContainer>
  )
}

export default ProductCard;