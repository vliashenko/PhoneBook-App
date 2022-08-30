import styled from "styled-components";

export const ProfileItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 15px #c2c2c2;
`;

export const ProfileImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.color};
    font-size: 18px;
    color: white;
    text-shadow: 0px 2px 4px grey;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #4a99e6;
`;

export const Number = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #4a99e6;
`;

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #c2c2c2;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    };
`