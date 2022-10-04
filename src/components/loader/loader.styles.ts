import styled from "styled-components";

export const LoaderContainer = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
left: 50%;
top: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`;


export const LoadingStyle = styled.div`
  cursor: progress;
  border: 16px solid #5a5858;
  border-top: 16px solid ${(props) => props.theme.colors.green};;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
