import { UserMail, UserName } from "./UserMenu.styled";

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

export default UserMenu;