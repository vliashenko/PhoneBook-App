import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";
import PropTypes from "prop-types";

const PrivateRoute = ({ redirectTo="/login" }) => {
        const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
        return (
            isLoggedIn ? <Outlet/> : <Navigate to={redirectTo} replace/>
        );
};

PrivateRoute.propTypes = {
    redirectTo: PropTypes.string,
};

export default PrivateRoute;