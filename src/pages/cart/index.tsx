import { cartTotalPriceSelector } from '@/redux/selectors';
import Head from 'next/head';
import React from 'react'
import { useSelector } from 'react-redux';

import { CartContainer, Title, SubTotal, SubTotalTitle, SubTotalPrice, CheckoutButton } from "./cart.styles"
import CartItem from './CartItem';


const Cart: React.FC = () => {
    const cart = useSelector((state: any) => state.cart)
    const totalPrice: number = useSelector(cartTotalPriceSelector);


    return (
        <div>
            <Head>
                <title>Eco-Coffe - Cart</title>
            </Head>
            <CartContainer>
                <Title>Your Cart</Title>
                {cart.length === 0
                    ? <p>Your cart is empty</p>
                    : cart?.map((item: any) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))
                }
                <SubTotal>
                    <SubTotalTitle>SubTotal</SubTotalTitle>
                    <SubTotalPrice>{totalPrice > 0 && <div>${totalPrice}</div>}</SubTotalPrice>
                </SubTotal>
                <CheckoutButton>Checkout</CheckoutButton>
            </CartContainer>
        </div>
    )
}

export default Cart;