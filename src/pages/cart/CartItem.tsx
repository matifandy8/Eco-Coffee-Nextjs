import { IProduct } from '@/components/products/type';
import React from 'react'
import { ProductContainer, ImgCard, NameCard, PriceCard, InfoBox, Increment, Decrement, Qty ,QtyBox,Remove} from './cart.styles'



const CartItem: React.FC<IProduct> = ({ name, image, price }: IProduct) => {

  return (
    <ProductContainer>
      <InfoBox>
      <ImgCard src={image} alt={name} />
        <div>        
          <NameCard>{name}</NameCard>
          <PriceCard>${price}</PriceCard>
          <Remove> Remove </Remove>
        </div>
        
      </InfoBox>
      <QtyBox>
        <Decrement> - </Decrement>
        <Qty>0</Qty>
        <Increment> + </Increment>
      </QtyBox>
    </ProductContainer>
  )
}

export default CartItem;