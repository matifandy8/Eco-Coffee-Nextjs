import { addToCart } from '@/redux/cart.slice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductContainer,ImgCard, ButtonCard, NameCard ,PriceCard,InfoBox} from './Products.styles'



const ProductCard: React.FC<any> = ({ productItem}:any) => {

  const dispatch = useDispatch();


  return (
    <ProductContainer>
        <ImgCard src={productItem.image} alt={productItem.name}/>
        <InfoBox>
          <NameCard>{productItem.name}</NameCard>
        <PriceCard>${productItem.price}</PriceCard>
        </InfoBox>
        <ButtonCard onClick={() => dispatch(addToCart(productItem))}> Add to cart </ButtonCard>
    </ProductContainer>
  )
}

export default ProductCard;