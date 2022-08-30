import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import Button from '@mui/material/Button';
import { Header, UserInfo, UserLogo, UserName } from "./AppBar.styled";
import userlogo from "./img/user-icon-png-pnglogocom-133466.png";

const AppBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(authSelectors.getUsername);

    return (
        <Header>
            <UserInfo>
                <UserLogo src={userlogo} alt="logo"/>
                <UserName>
                    {`Hello, ${user}!`}
                </UserName>
            </UserInfo>

            <Button 
                onClick={() => dispatch(authOperations.logOut())}
                variant="outlined">
                Logout
            </Button>
        </Header>
    );
};

export default AppBar;