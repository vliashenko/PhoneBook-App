import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";
import PropTypes from "prop-types";

const PublicRoute = ({ redirectTo="/contacts" }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)    

    return (
        isLoggedIn ? <Navigate to={redirectTo} replace/> : <Outlet/>
    );
};

PublicRoute.propTypes = {
    redirectTo: PropTypes.string,
};

export default PublicRoute;