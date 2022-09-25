import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 90px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: ${(props) => props.theme.colors.green};
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  padding: 2.5rem 0rem;
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fontSubtitle.fontFamily};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fontSubtitle.fontFamily};
`;
