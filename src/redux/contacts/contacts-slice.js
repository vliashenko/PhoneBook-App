import { createSlice } from "@reduxjs/toolkit";
import contactOperations from "./contacts-operations";

const initialState = {
    contacts: null,
    status: null,
    error: null
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [contactOperations.fetchContacts.fulfilled] (state, action) {
           state.contacts = action.payload 
           state.status = action.meta.requestStatus
        },
        [contactOperations.fetchContacts.pending] (state, action) {
            state.status = action.meta.requestStatus
        },
        [contactOperations.addNewContact.fulfilled] (state, action) {
            state.contacts.push(action.payload)
            state.status = action.meta.requestStatus
        },
        [contactOperations.addNewContact.pending] (state, action) {
            state.status = action.meta.requestStatus
        },
        [contactOperations.addNewContact.rejected] (state, action) {
            state.status = action.meta.requestStatus
            state.error = action.payload
        },
        [contactOperations.deleteContact.fulfilled] (state, action) {
            state.status = action.meta.requestStatus
        },
        [contactOperations.deleteContact.pending] (state, action) {
            state.status = action.meta.requestStatus
        },
    }
})

export default contactsSlice.reducer;