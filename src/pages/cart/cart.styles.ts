import styled from "styled-components";

export const CartContainer = styled.div`

`;
export const Title = styled.h1`
  font-size: 1.9em;
  text-align: center;
  margin:15px;
`;
export const SubTotal = styled.div`
display: flex;
justify-content: space-around;
margin-top:100px;
`;
export const SubTotalTitle = styled.p`
  
`;
export const SubTotalPrice = styled.p`
  
`;

export const ProductContainer = styled.div`
display: flex;
max-width: 800px;
margin: auto;
justify-content: space-around;
flex-direction: row;
`;
export const ImgCard = styled.img`
width: 100%;
max-width: 200px;
height: auto;;
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
export const Remove = styled.button`
   cursor:pointer;
   cursor: pointer;
    background-color: transparent;
    border: none;
`;
export const QtyBox = styled.div`
display: flex;
align-content: center;
justify-content: space-evenly;
align-items: self-end;
  
`;
export const Qty = styled.p`
padding: 2px;
margin: 5px;
`;
export const Increment = styled.button`
   cursor:pointer;
   padding: 2px;
   margin: 5px;
   background-color: #059669;
   color: white;
   border: none;
`;
export const Decrement = styled.button`
   cursor:pointer;
   padding: 3px;
   margin: 5px;
   background-color: #059669;
   color: white;
   border: none;
`;


