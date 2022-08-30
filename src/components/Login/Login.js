import { useState } from 'react';
import { useDispatch } from "react-redux"
import { authOperations } from 'redux/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { inputStyle, Container, buttonStyle, Title, Form, StyledLink } from './Login.styled';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
       const { value, name } = e.target;
        
        switch (name) {
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
        dispatch(authOperations.login({ email, password }));
        setEmail("");
        setPassword("");
    };

    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
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
                    Authorize
                </Button>

                <StyledLink to={"/register"}>
                    Create a new account
                </StyledLink>
            </Form>
        </Container>
    );
};

export default Login;