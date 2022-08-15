import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.9em;
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
  padding-bottom: 200px;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgCard = styled.img`
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
  border-radius: 25px;
  :hover{
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 66%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    }
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 10px;
`;
export const NameCard = styled.h1`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  padding: 5px 0px;
`;
export const PriceCard = styled.p`
  font-size: 1.1em;
  color: ${(props) => props.theme.colors.black};
`;
export const ButtonCard = styled.button`
   cursor:pointer;
   font-size: 1.2em;
   padding: 0.06em 1.5em 0;
   background-color: white;
   border-radius:15px;
   border: 2px solid black;
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fontSubtitle.fontFamily};
`;
