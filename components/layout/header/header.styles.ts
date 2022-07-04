import styled from "styled-components";

export const Logo = styled.h1`
  opacity: 1;
  background-color: rgba(16,58,50,1);
  padding: 0.75rem;
  width: 135px;
  margin-left: 10px;
  border-radius: 0.25rem;
  font-size: 20px;
`;

export const HeaderContainer = styled.header`
  text-align: left;
  background: ${(props) => props.theme.colors.black};
  padding: 0.5rem 0rem;
  color: ${(props) => props.theme.colors.gray};
`;
