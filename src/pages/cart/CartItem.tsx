import { IProduct } from '@/components/products/type';
import React from 'react'
import { ProductContainer, ImgCard, NameCard, PriceCard, InfoBox, Increment, Decrement, Qty ,QtyBox,Remove, InfoItem} from './cart.styles'



const CartItem: React.FC<IProduct> = ({ name, image, price, quantity }: IProduct) => {

  return (
    <ProductContainer>    
        <ImgCard src={image} alt={name} />

      <InfoBox>
        <InfoItem>        
          <NameCard>{name}</NameCard>
          <PriceCard>${price}</PriceCard>
          <div>{quantity}</div>
        </InfoItem>
        <Remove> Remove </Remove>
      </InfoBox>
      {/* <QtyBox>
        <Decrement> - </Decrement>
        <Qty>0</Qty>
        <Increment> + </Increment>
      </QtyBox> */}
    </ProductContainer>
  )
}

export default CartItem;