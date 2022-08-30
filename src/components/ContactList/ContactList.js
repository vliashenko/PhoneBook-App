import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from "redux/contacts";
import { filterSelectors } from "redux/filter";
import ContactItem from "components/ContactItem/ContactItem";
import { Container, Title } from "./ContactList.styled";

const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(filterSelectors.getFilter);
    const contacts = useSelector(contactsSelectors.getContacts);
    const status = useSelector(contactsSelectors.getStatus);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    }
    
    const visibleContacts = getVisibleContacts();

    if( status === "rejected" ) {
        return (
            <Container>
                <Title>Something went wrong(</Title>
            </Container>
        )
    };

    if( status === "fulfilled" ) {
        return (
            <Container>
                {visibleContacts?.map(contact => {
                    const { id, ...allProps} = contact;
                    return <ContactItem key={id} id={id} {...allProps}/>
                })}
            </Container>
        )
    }
};

export default ContactList;