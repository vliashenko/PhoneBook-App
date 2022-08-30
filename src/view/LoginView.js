import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import Login from "components/Login/Login";
import { showToast } from "utils/toastHelper";

const LoginView = () => {
    const status = useSelector(authSelectors.getStatus);
    const user = useSelector(authSelectors.getUsername);

    return (
        <>
            <Login/>
            {showToast(status, user)}
        </>
    );
};

export default LoginView;