import {FooterContainer, Link} from "./footer.styles"

const Footer: React.FC = () => {
  return (
    <FooterContainer >
      <span>© 2022 </span> 
        <Link href="https://github.com/matifandy8">Matias Fandiño</Link>
    </FooterContainer>
  );
};

export default Footer;