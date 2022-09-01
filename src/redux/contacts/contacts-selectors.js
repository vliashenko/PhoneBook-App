const getContacts = state => state.contacts.contacts;
const getStatus = state => state.contacts.status;
const getError = state => state.contacts.error;
const getAddContactStatus = state => state.contacts.addContactStatus;

const contactsSelectors = {
    getContacts,
    getStatus,
    getError,
    getAddContactStatus
}

export default contactsSelectors;