import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Container,
  Flex,
  MainText,
  SignupPage,
} from "../components/styles/globalStyles";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import { signup } from "../auth";
import { RegisterForm } from "../components/styles/formStyles";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <RegisterForm form>
      <div>
        <label>Imię</label>
        <input type="text" onChange={handleChange("name")} value={name} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" onChange={handleChange("email")} value={email} />
      </div>
      <div>
        <label>Hasło</label>
        <input
          type="password"
          onChange={handleChange("password")}
          value={password}
        />
      </div>
      <button onClick={clickSubmit}>Zarejestruj</button>
    </RegisterForm>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New Account is created. Please <Link to="/signin">SignIn</Link>
    </div>
  );

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
            {showSuccess()}
            {showError()}
            {signUpForm()}
          </Flex>
        </Container>
        <Footer
          background={"#805333"}
          mainColor={"#FFFFFF"}
          secondColor={"#CCC3C3"}
        />
      </SignupPage>
    </Layout>
  );
};

export default Signup;
