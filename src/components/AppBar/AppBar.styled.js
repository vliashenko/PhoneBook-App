import styled from "styled-components";

export const Header = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 0px 15px 10px -15px #4a99e6;    
`;

export const UserInfo = styled.div`
    max-width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UserLogo = styled.img`
    width: 30px;
    height: 30px;
`;

export const UserName = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-left: 10px;
    color: #4a99e6;
`;

