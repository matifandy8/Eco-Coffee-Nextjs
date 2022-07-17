import Link from "next/link";
import { HeaderContainer, Logo } from "./header.styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Eco-Coffee</Logo>
    </HeaderContainer>
  );
};

export default Header;