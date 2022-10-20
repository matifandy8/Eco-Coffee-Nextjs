import { cartTotalPriceSelector } from '@/redux/selectors';
import { getStripe } from '@/utils/getStripe';
import { postRequest } from '@/utils/postRequest';
import { supabase } from '@/utils/supabaseClient';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { CartContainer, Title, SubTotal, SubTotalTitle, SubTotalPrice, CheckoutButton } from "./cart.styles"
import CartItem from './CartItem';

const mItem = {
    name: 'Nike Airforce 1',
    image:
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 200,
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quia!',
    quantity: 1,
}

const Cart: React.FC = () => {
    const [item, setItem] = useState(mItem)

    const cart = useSelector((state: any) => state.cart)
    const [session, setSession] = useState<any>(null);
    const { data: sessionNext } = useSession();
    const [loading, setLoading] = useState(false)


    const totalPrice: number = useSelector(cartTotalPriceSelector);
    useEffect(() => {
        const supabaseSession = supabase.auth.session();
        setSession(supabaseSession);

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    const handleCheckout = () => {
        if (!session && !sessionNext) {
            alert("you not autenticated")
            // check if is user authenticated
        } else if (cart.length === 0) {
            // check if exist product to checkout
            alert("no product")
        } else {
            // go to checkout
            checkout()
        }
    };

    const checkout = async () => {
        setLoading(true)
        const response = await postRequest('/api/checkout-session', { item })
        if (response.statusCode === 500) {
            console.error(response.message)
            return
        }
        // Redirect to Checkout.
        const stripe = await getStripe()
        const { error } = await stripe!.redirectToCheckout({
            sessionId: response.id,
        })
        console.warn(error.message)
        setLoading(false)
    }

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
                            productItem={item}
                        />
                    ))
                }
                <SubTotal>
                    <SubTotalTitle>SubTotal</SubTotalTitle>
                    <SubTotalPrice>{totalPrice > 0 && <div>${totalPrice}</div>}</SubTotalPrice>
                </SubTotal>
                {loading ? (
                    <CheckoutButton
                    >
                        Processing...
                    </CheckoutButton>
                ) : (
                    <CheckoutButton
                        onClick={handleCheckout}
                    >
                        Checkout
                    </CheckoutButton>
                )}
            </CartContainer>
        </div>
    )
}

export default Cart;