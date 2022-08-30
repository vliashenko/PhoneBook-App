import { UserMail, UserName } from "./UserMenu.styled";
import PropTypes from "prop-types";

const UserMenu = ({ name, email }) => {
    return (
        <>
            <UserName>
                {`Hello ${name},`}
            </UserName>

            <UserMail>
                {email}
            </UserMail>
        </>
    );
};

UserMenu.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default UserMenu;