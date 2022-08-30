import styled from "styled-components";

export const ContainerBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
`;

export const ModalWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-contant: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 300px;
    max-width: 600px;
    width: 100%;
    padding: 12px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.21), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`