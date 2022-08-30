import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import Register from "components/Register/Register";
import { useEffect } from "react";
import { toast } from "react-toastify";

const RegisterView = () => {
    const status = useSelector(authSelectors.getStatus);
    
    useEffect(() => {
        status === "rejected" && toast.error("Something went wrong(")
    },[status])

    return (
        <>
            <Register/>
        </>
    );
};

export default RegisterView;