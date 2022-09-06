import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import PrivateRoute from "components/Routs/PrivateRoute";
import PublicRoute from "components/Routs/PublicRout";
import Loader from "components/Loader/Loader";

import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./App.styled";

const RegisterView = lazy(() => import("../../view/RegisterView.js"));
const LoginView  = lazy(() => import("../../view/LoginView.js"));
const ContactView = lazy(() => import("../../view/ContactView.js"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  },[dispatch]);
  
  return (
    <Router basename="/PhoneBook-App/">
          <Suspense fallback={<Loader/>}>
            <Container>
                <Routes>
                  
                    <Route element={<PublicRoute/>}>
                      <Route path="/register" element={<RegisterView/>} exact/>
                      <Route path="/login" element={<LoginView/>} exact/>
                    </Route>

                    <Route element={<PrivateRoute/>}>
                      <Route path="/contacts" element={<ContactView/>} exact/>
                    </Route>
                    
                    <Route path="*" element={<Navigate to="/register" replace/>}/>
                </Routes>
            </Container>
          </Suspense>

      <ToastContainer />
    </Router>
  );
};
