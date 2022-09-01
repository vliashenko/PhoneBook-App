import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify";
import { inputStyle, buttonStyle, CloseIcon, Form } from './ContactForm.styled';
import PropTypes from "prop-types";

const ContactForm = ({ onClose }) => {
    const contacts = useSelector(contactsSelectors.getContacts);
    const status = useSelector(contactsSelectors.getStatus);
    const dispatch = useDispatch();
    const [ name, setName ] = useState("");
    const [ number, setNumber ] = useState("");

    const handleChange = (e) => {
       const { value, name } = e.target;
        
        switch (name) {
            case "name":
                return setName(value);
            case "number":
                return setNumber(value);
            default: 
                return; 
        };
    };

    const handleSubmit = e => {
        e.preventDefault();

        let checker = contacts?.filter( 
            item => item.name.toLowerCase() === name.toLowerCase()
        );

        if(name.trim().length === 0 || number.trim().length === 0){
            toast(`Please fill all fields!`);
            return;
        } 

        if(checker.length === 0){
            dispatch(contactsOperations.addNewContact({ name, number }))
        } else {
            toast.warn(`Contact with name ${name} is already in your phonebook!`);
            return;
        };

        if( status === "rejected" ){
            toast.error("Something went wrong(")
        } else if( status === "fulfilled" ){
            toast.success("Contact was successfuly added!")
            setName("");
            setNumber("");
        };
    };

    return (
        <Form onSubmit={handleSubmit}>
            <CloseIcon
                onClick={onClose}
            >
                &#x2715;
            </CloseIcon>

                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Number"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <Button 
                    type="submit" 
                    style={buttonStyle} 
                    variant="outlined" 
                    size="large"
                >
                    Create
                </Button>

            </Form>
    );
};

ContactForm.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default ContactForm;