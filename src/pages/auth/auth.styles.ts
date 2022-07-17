import styled from "styled-components";




export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  a{
    color:${(props) => props.theme.colors.green};
    padding: 5px;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.h1`
text-align: center;

`;
export const Label = styled.label`
  display: block;
  font-family: ${(props) => props.theme.fontSubtitle.fontFamily};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: gray;
  margin-top: 1rem;
`;
export const Input = styled.input`
  width: 100%;
  min-width: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: gray;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0.5rem 1rem;
  ${(props) => props.theme.fontTitle.fontFamily}
  font-size: 1rem;
  line-height: 1.5rem;
  color: gray;
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const GoogleAuth = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px;
  max-width: 414px;
  justify-content: space-around;
`;
export const Button = styled.button`
  display: flex;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  background-color: ${(props) => props.theme.colors.green};
  padding: 0.5rem 2rem;
  font-family: ${(props) => props.theme.fontSubtitle.fontFamily};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  margin-top: 2rem;
`;
