import { useAuth } from '@/context/auth';
import { supabase } from '@/utils/supabaseClient';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  HeaderContainer,
  Logo,
  ImgIcon,
  Line,
  IconsLink,
  CartCount,
  LogoutBtn,
} from './header.styles';


const Header: React.FC = () => {
  const { getUser, logout } = useAuth();
  const name = getUser();
  console.log(getUser())
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const supabaseSession = supabase.auth.session();
    console.log("supabaseSession", supabaseSession);
    setSession(supabaseSession);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const _handleLogOut = () => {
    supabase.auth.signOut();
  };

  return (
    <>
      {!session ? (
        <HeaderContainer>
          <Logo>
            <Link href="/">
              <a>Eco-Coffee</a>
            </Link>
            {/* <p>{name}</p> */}
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
            <ImgIcon
              src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-11.jpg"
              alt="cart Icon"
            />
            <CartCount>0</CartCount>
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
          <Link href="/auth/account">
              <a>
                <ImgIcon
                  src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg"
                  alt="account Icon"
                />
              </a>
            </Link>
            <LogoutBtn onClick={_handleLogOut}><ImgIcon
                  src="https://icon-library.com/images/account-logout-xxl.png"
                  alt="logout Icon"
                  width={50}
                   height={50}
                /></LogoutBtn>
            <Line></Line>
            <ImgIcon
              src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-11.jpg"
              alt="cart Icon"
            />
            <CartCount>0</CartCount>
          </IconsLink>
        </HeaderContainer>
      )}
    </>
  )
}



export default Header;
