import { decrement, deleteCart, increament } from '@/redux/cart.slice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductContainer, ImgCard, NameCard, PriceCard, InfoBox, Increment, Decrement, Qty, QtyBox, Remove, InfoItem } from '../redux/cart.styles'



const CartItem: React.FC<any> = ({ productItem }: any) => {

  const dispatch = useDispatch();


  return (
    <ProductContainer>
      <ImgCard src={productItem.image} alt={productItem.name} />

      <InfoBox>
        <InfoItem>
          <NameCard>{productItem.name}</NameCard>
          <PriceCard>${productItem.price}</PriceCard>
          <QtyBox>
            <Decrement disabled={productItem.quantity === 1} onClick={() => dispatch(decrement(productItem.id))}> - </Decrement>
            <Qty>{productItem.quantity}</Qty>
            <Increment onClick={() => dispatch(increament(productItem.id))}> + </Increment>
          </QtyBox>
        </InfoItem>
        <Remove onClick={() => dispatch(deleteCart(productItem))}> Remove </Remove>
      </InfoBox>
    </ProductContainer>
  )
}

export default CartItem;