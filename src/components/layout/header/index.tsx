import { cartTotalSelector } from '@/redux/selectors';
import { supabase } from '@/utils/supabaseClient';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  Logo,
  ImgIcon,
  Line,
  IconsLink,
  CartCount,
  LogoutBtn,
} from './header.styles';
import { useSession , signOut } from "next-auth/react";



const Header: React.FC = () => {
  const router = useRouter()
  const [session, setSession] = useState<any>(null);
  const total:number = useSelector(cartTotalSelector);
  const { data: sessionNext } = useSession();
  
  
  useEffect(() => {
    const supabaseSession = supabase.auth.session();
    setSession(supabaseSession);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const _handleLogOut = () => {
    supabase.auth.signOut();
    signOut();
    router.push('/')
    };

  return (
    <>
      {!session && !sessionNext ? (
        <HeaderContainer>
          <Logo>
            <Link href="/">
              <a>Eco-Coffee</a>
            </Link>
          </Logo>
          <IconsLink>
            <Link href="/auth/login">
              <a>
                <ImgIcon
                  src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg"
                  alt="account Icon"
                />
              </a>
            </Link>
            <Line></Line>
            <Link href="/cart">
              <a>
            <ImgIcon
              src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-11.jpg"
              alt="cart Icon"
            />
            </a>
            </Link>
            <Link href="/cart">
            <CartCount>{total}</CartCount>
            </Link>
          </IconsLink>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <Logo>
            <Link href="/">
              <a>Eco-Coffee</a>
            </Link>
          </Logo>
          <IconsLink>
          <Link href="/auth/profile">
              <a title="Profile">
                <ImgIcon
                  src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg"
                  alt="account Icon"
                />
              </a>
            </Link>
            <LogoutBtn title="Logout" onClick={_handleLogOut}><ImgIcon
                  src="https://icon-library.com/images/account-logout-xxl.png"
                  alt="logout Icon"
                  width={50}
                   height={50}
                /></LogoutBtn>
            <Line></Line>

            <Link href="/cart">
              <a title="Cart">
            <ImgIcon
              src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-11.jpg"
              alt="cart Icon"
            />
           </a>
            </Link>
            <CartCount>{total}</CartCount>

          </IconsLink>
        </HeaderContainer>
      )}
    </>
  )
}



export default Header;
