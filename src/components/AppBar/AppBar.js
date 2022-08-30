import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import UserMenu from 'components/UserMenu/UserMenu';
import Button from '@mui/material/Button';
import { Header, UserInfo, UserLogo, UserName } from "./AppBar.styled";
import userlogo from "./img/user-icon-png-pnglogocom-133466.png";

const AppBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(authSelectors.getUsername);
    const email = useSelector(authSelectors.getUserEmail);

    return (
        <Header>
            <UserInfo>
                <UserLogo src={userlogo} alt="logo"/>
                <UserMenu name={user} email={email}/>
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