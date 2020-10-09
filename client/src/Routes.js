import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AdminRoute from "./auth/AdminRoute";

// import Signup from "./components/Signup";
// import Signin from "./components/Signin";
import Home from "./components/Home";
import Mountains from "./components/Mountains";
import Kayaks from "./components/Kayaks";
import Form from "./components/Form";

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/mountains" exact component={Mountains} />
        <Route path="/kayaks" exact component={Kayaks} />
        <Route path="/form" exact component={Form} />

        {/* <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} /> */}
      </Switch>
    </AnimatePresence>
  );
};

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default RoutesWrapper;
