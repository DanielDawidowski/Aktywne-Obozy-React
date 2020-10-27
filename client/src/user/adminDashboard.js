import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { isAuth } from "../auth";
import { RegisterForm } from "../components/styles/formStyles";
import {
  Container,
  Flex,
  MainText,
  SignupPage,
} from "../components/styles/globalStyles";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuth();

  const adminLinks = () => {
    return (
      <RegisterForm>
        <ul>
          <h4>Zarządzaj</h4>
          <li>
              <Link to="/create/event">Dodaj Wyjazd</Link>
          </li>
          <li>
            <Link to="/admin/events">Zarządaj Wyjazdami</Link>
          </li>
          <li>
            <Link to="/admin/clients">Zarządzaj Osobami</Link>
          </li>  
        </ul>
      </RegisterForm>
    );
  };

  return (
    <Layout>
      <SignupPage
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <Container kayaks>
          <Flex center>
            <div className="col-3">{adminLinks()}</div>
          </Flex>
        </Container>
      </SignupPage>
    </Layout>
  );
};

export default AdminDashboard;
