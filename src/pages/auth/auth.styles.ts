import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  a {
    color: ${(props) => props.theme.colors.green};
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
export const ErrorBox = styled.div`
color: #ba3939;
padding:5px;
margin: 2px;
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
export const ButtonGoogle = styled.button`
transition: background-color .3s, box-shadow .3s;
padding: 12px 16px 12px 42px;
border: none;
border-radius: 3px;
box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
color: #757575;
font-size: 14px;
font-weight: 500;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
background-color: white;
background-repeat: no-repeat;
background-position: 12px 11px;
&:hover {
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
}

`;
