import styled from "styled-components";

export const HeaderContainer = styled.header`
  text-align: center;
  background: ${(props) => props.theme.colors.black};
  padding: 0.5rem 0rem;
  color: ${(props) => props.theme.colors.gray};
`;
