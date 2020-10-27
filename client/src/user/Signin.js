import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Container,
  Flex,
  MainText,
  SignupPage,
} from "../components/styles/globalStyles";
import { Redirect, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { signin, authenticate, isAuth } from "../auth";
import { RegisterForm } from "../components/styles/formStyles";
import Footer from "../components/Footer";

const Signin = () => {
  const [values, setValues] = useState({
    email: "dvds@wp.pl",
    password: "qweqwe1",
    error: "",
    loading: false,
    redirectToRefferer: false,
  });

  const { email, password, loading, error, redirectToRefferer } = values;
  const { user } = isAuth();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToRefferer: true,
          });
        });
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToRefferer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAuth()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout>
      <SignupPage
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
        exit={{ opacity: 0, y: 100 }}
      >
        <Container kayaks>
          <Flex center>
            {showLoading()}
            {showError()}
            <RegisterForm form>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  onChange={handleChange("email")}
                  value={email}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  onChange={handleChange("password")}
                  value={password}
                />
              </div>
              <button onClick={clickSubmit}>Zaloguj</button>
            </RegisterForm>
            {redirectUser()}
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

export default Signin;
