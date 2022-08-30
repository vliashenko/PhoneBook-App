import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from 'redux/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { inputStyle,buttonStyle, Container, Form, Title, StyledLink } from './Register.styled';
import { resetStatus } from 'redux/auth/auth-slice';
import ButtonSpinner from 'components/ButtonSpinner/ButtonSpinner';

const Register = () => {
    const status = useSelector(authSelectors.getStatus);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
       const { value, name } = e.target;
        
        switch (name) {
            case "name":
                return setName(value);
            case "email":
                return setEmail(value);
            case "password":
                return setPassword(value);
            default: 
                return; 
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setEmail("");
        setPassword("");
        setName("")
    };

    return (
        <Container>
            <Title>Registration</Title>
            <Form onSubmit={handleSubmit}>
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
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <Button 
                    type="submit" 
                    style={buttonStyle} 
                    variant="outlined" 
                    size="large"
                    >
                    {status === "pending" ? <ButtonSpinner/> : "Register"}
                </Button>
                <StyledLink 
                    onClick={() => dispatch(resetStatus())}
                    to={"/login"}
                >
                    Create new account
                </StyledLink>

            </Form>
        </Container>
    );
};

export default Register;