import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {randomColor} from "../../utils/randomContactColor";
import { contactsOperations, contactsSelectors } from "redux/contacts";
import Loader from "components/Loader/Loader";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ProfileItem, ProfileImage, Name, Number, Icon } from "./ContactItem.styled";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const status = useSelector(contactsSelectors.getStatus);
    const profileColor = useMemo(() =>  randomColor(), [])
    
    const profileIcon = name?.charAt(0).slice();

    const handleDelete = (id) => {
        dispatch(contactsOperations.deleteContact(id));

        if( status === "fulfilled" ) {
            toast.success("Contact was successfuly deleted!")
        } else if( status === "rejected" ) {
            toast.error("Something went wrong(")
        }
    };

    if(status === "pending") {
        return <Loader/>
    };

    if( status === "fulfilled" ) {
        return (
            <ProfileItem>
                <ProfileImage color={profileColor}>
                    {profileIcon}
                </ProfileImage>
                
                <Name>
                    {name}
                </Name>
    
                <Number>
                    {number}
                </Number>
    
                <Icon onClick={() => handleDelete(id)}>
                    <DeleteOutlineIcon/>
                </Icon>
            </ProfileItem>
        );
    }
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
};

export default ContactItem;