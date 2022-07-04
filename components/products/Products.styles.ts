import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin:15px;
`;
export const ProductList = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  padding: 1rem;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgCard = styled.img`
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
`;
export const NameCard = styled.h1`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  padding: 5px 0px;
`;
export const LinkCard = styled.a`
  padding: 5px 0px;
  text-decoration: none;
  font-size: 14px;
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fontSubtitle.fontFamily};
`;
