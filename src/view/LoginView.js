import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import Login from "components/Login/Login";
import { useEffect } from "react";
import { toast } from "react-toastify";

const LoginView = () => {
    const status = useSelector(authSelectors.getStatus);

    useEffect(() => {
        status === "rejected" && toast.error("Something went wrong(")
    },[status])

    return (
        <>
            <Login/>
        </>
    );
};

export default LoginView;