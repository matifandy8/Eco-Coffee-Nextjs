import { useAuth } from '@/context/auth';
import Link from 'next/link';
import {
  HeaderContainer,
  Logo,
  ImgIcon,
  Line,
  IconsLink,
  CartCount,
} from './header.styles';

const Header: React.FC = () => {
  const { getUser, logout } = useAuth();
  const  name  = getUser();
  console.log(getUser())

  return (
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
  );
};

export default Header;
