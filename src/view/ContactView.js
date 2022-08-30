import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { showToast } from "utils/toastHelper";
import AppBar from "components/AppBar/AppBar";
import ContactFilter from "components/ContactFilter/ContactFilter";
import ContactList from "components/ContactList/ContactList";

const ContactView = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const status = useSelector(authSelectors.getStatus);
    const user = useSelector(authSelectors.getUsername);

    useEffect(() => {
        showToast(status, user)
    },[user, status])

    const openModal = () => {
        setIsOpen(true)
    };

    const closeModal = () => {
        setIsOpen(false)
    };

    return (
        <>
            <AppBar/>
            <ContactFilter 
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
            />
            <ContactList/>
        </>
    );
};

export default ContactView;