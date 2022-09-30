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


const Header: React.FC = () => {
  const router = useRouter()
  const [session, setSession] = useState<any>(null);
  const total = useSelector(cartTotalSelector);
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (total !== 0) {
      setChange(true);

      setTimeout(() => {
        setChange(false);
      }, 1000);
    }
  }, [total]);
  
  useEffect(() => {
    const supabaseSession = supabase.auth.session();
    setSession(supabaseSession);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const _handleLogOut = () => {
    supabase.auth.signOut();
    router.push('/')
    };

  return (
    <>
      {!session ? (
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
            <CartCount change={change}>{total}</CartCount>
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

            <Link href="/cart">
              <a>
            <ImgIcon
              src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-11.jpg"
              alt="cart Icon"
            />
           </a>
            </Link>
            <CartCount>0</CartCount>

          </IconsLink>
        </HeaderContainer>
      )}
    </>
  )
}



export default Header;
