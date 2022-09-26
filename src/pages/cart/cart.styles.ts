import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 765px;
  margin:auto;
  padding:15px;
`;
export const Title = styled.h1`
  font-size: 2.9em;
  text-align: center;
  margin:15px;
`;
export const SubTotal = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top:100px;
  margin-left: auto;
  margin-right: auto;
  max-width: 750px;
`;
export const SubTotalTitle = styled.p`
  
`;
export const SubTotalPrice = styled.p`
  
`;

export const CheckoutButton = styled.button`
    display: flex;
    cursor: pointer;
    margin-top:50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    appearance: none;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: transparent;
    background-color: ${(props) => props.theme.colors.green};
    color: white;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    padding: 0.75rem 2rem;
`;

export const ProductContainer = styled.div`
  max-width: 750px;
  margin: auto;
  display:flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #80808070;;
`;
export const ImgCard = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
  border-radius: 25px;
`;
export const InfoBox = styled.div`
  flex: 1 1 0%;
  margin-left: 1.5rem;
`;
export const NameCard = styled.h1`
  text-decoration: none;
  color: ${(props) => props.theme.colors.green};
  padding: 5px 0px;
  letter-spacing: .025em;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-transform: uppercase
`;
export const PriceCard = styled.p`
  font-size: 1.25em;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
`;
export const InfoItem = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
`;

export const Remove = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-top: 80px;
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


