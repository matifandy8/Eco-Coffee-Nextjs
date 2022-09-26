import Head from 'next/head';
import React from 'react'

import { CartContainer, Title, SubTotal,SubTotalTitle,SubTotalPrice, CheckoutButton } from "./cart.styles"
import CartItem from './CartItem';


const Cart: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Eco-Coffe - Cart</title>
            </Head>
            <CartContainer>
                <Title>Your Cart</Title>        
                  <CartItem key="1" name="coffee" image="https://www.starbucks.co.th/stb-media/2020/08/Black-Matte-Mug-16-oz-600x600.png" price={200} />
                  <CartItem key="1" name="coffee" image="https://www.starbucks.co.th/stb-media/2020/08/Black-Matte-Mug-16-oz-600x600.png" price={200} />
                <SubTotal>
                    <SubTotalTitle>SubTotal</SubTotalTitle>
                    <SubTotalPrice>$ 0,00</SubTotalPrice>
                </SubTotal>
                <CheckoutButton>Checkout</CheckoutButton>
            </CartContainer>
        </div>
    )
}

export default Cart;