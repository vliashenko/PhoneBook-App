import styled, { keyframes } from "styled-components";

const spin = keyframes`
   0% {transform: rotate(360deg)} ;
`;

export const Spinner = styled.div`
    width: 2rem;
    height: 2rem;
    border: 0.25rem solid #4a99e6;
    border-bottom: 0.25rem solid rgba(0,0,0,0);
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`

