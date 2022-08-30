import { Link } from "react-router-dom";
import styled from "styled-components";

export const inputStyle = {
    width: "100%",
    margin: "10px 0px"
};

export const buttonStyle = {
    width: "100%",
    padding: "13.5px 14px",
    margin: "10px 0px"
};

export const Container = styled.div`
    height: 100vh;
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 35%;
`;

export const Title = styled.h1`
    font-size: 53px;
    font-weight: 500;
    color: #4a99e6;
`;

export const StyledLink = styled(Link)`
    padding: 10px;
    font-size: 0.9375rem;
    font-weight: 500;
    color: #4a99e6;
    float: right;
    transition: all 300ms ease-in-out;

    &:hover {
        transform: scale(1.05);
    };
`;