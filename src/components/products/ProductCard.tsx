import { addToCart } from '@/redux/cart.slice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductContainer, ButtonCard, NameCard ,PriceCard,InfoBox, ImgCard} from './Products.styles'
import Image from 'next/image'



const ProductCard: React.FC<any> = ({ productItem}:any) => {

  const dispatch = useDispatch();


  return (
    <ProductContainer>
      <ImgCard>
      <Image src={productItem.image} alt={productItem.name} width={280} height={280}/>
      </ImgCard>
      
        <InfoBox>
          <NameCard>{productItem.name}</NameCard>
        <PriceCard>${productItem.price}</PriceCard>
        </InfoBox>
        <ButtonCard onClick={() => dispatch(addToCart(productItem))}> Add to cart </ButtonCard>
    </ProductContainer>
  )
}

export default ProductCard;