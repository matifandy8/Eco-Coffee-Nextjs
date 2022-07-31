import Footer from "./footer";
import Header from "./header";
import {
 Content
} from './layout.styles';


type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Content>
      <Header />
      {children}
      <Footer />
    </Content>
  );
};

export default Layout;