import { useDispatch, useSelector } from "react-redux";
import { filterSelectors } from "redux/filter";
import { setFilter } from "redux/filter/filter-slice";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Container, inputStyle, buttonStyle } from "./ContactFilter.styled";
import Modal from "components/Modal/Modal";
import ContactForm from "components/ContactForm/ContactForm";
import PropTypes from "prop-types";

const ContactFilter = ({ isOpen, openModal, closeModal }) => {
    const filter = useSelector(filterSelectors.getFilter);
    const dispatch = useDispatch();

    return (
        <Container>
            <TextField
                    placeholder="Find your contacts by name "
                    id="outlined-required"
                    label="Filter"
                    name="filter"
                    value={filter}
                    onChange={(e) => dispatch(setFilter({ filter: e.target.value }))}
                    style={inputStyle}
                />
                 <Button 
                    onClick={openModal}
                    style={buttonStyle}
                    variant="contained"
                >
                    Create new contact
                </Button>

                {isOpen && 
                    <Modal onClose={closeModal}>
                        <ContactForm onClose={closeModal}/>
                    </Modal>
                }
        </Container>
    );
};

ContactFilter.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,    
}

export default ContactFilter;