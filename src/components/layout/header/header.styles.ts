import styled from 'styled-components'

export const Logo = styled.h1`
  opacity: 1;
  background-color: rgba(16,58,50,1);
  padding: 0.75rem;
  width: 135px;
  margin-left: 10px;
  border-radius: 0.25rem;
  font-size: 20px;
  a{
      color: white;
      text-decoration: none;
  }
`;

export const HeaderContainer = styled.header`
  text-align: left;
  background: ${(props) => props.theme.colors.black};
  padding: 0.5rem 0rem;
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  justify-content: space-between;
`;
export const ImgIcon = styled.img`
  cursor: pointer;
  height: 25px;
  width: 25px;
  margin: 10px;
  &:hover{
    opacity: 0.5;
  }
`;
export const Line = styled.div`
  background-color: white;
  height: 25px;
  width: 2px;
  margin-top: 10px;
`;

export const IconsLink = styled.div`
 display: flex;
`;

export const CartCount = styled.div`
 cursor: pointer;
 margin: 10px;
 background-color: ${(props) => props.theme.colors.green};
 padding: 5px 10px;
`;

export const LogoutBtn = styled.button`
 cursor: pointer;
background-color: transparent;
border:none;
`;