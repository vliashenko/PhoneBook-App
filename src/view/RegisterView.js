import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { showToast } from "utils/toastHelper";
import Register from "components/Register/Register";

const RegisterView = () => {
    const status = useSelector(authSelectors.getStatus);
    const user = useSelector(authSelectors.getUsername);

    return (
        <>
            <Register/>
            {showToast(status, user)}
        </>
    );
};

export default RegisterView;