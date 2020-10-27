import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/adminDashboard";
import AddEvent from "./admin/AddEvent";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./components/Home";
import Mountains from "./components/Mountains";
import Kayaks from "./components/Kayaks";
import Form from "./components/Form";
import Contact from "./components/Contact";
import Test from "./components/test";
import ManageClientsByEvent from "./admin/ManageClientsByEvent";
import ManageClients from "./admin/ManageClients";
import ManageEvents from "./admin/ManageEvents";
import UpdateClient from "./admin/UpdateClient";
import UpdateEvent from "./admin/UpdateEvent";

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/mountains" exact component={Mountains} />
        <Route path="/kayaks" exact component={Kayaks} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/form/:eventId" exact component={Form} />
        <Route path="/login/signin" exact component={Signin} />
        <Route path="/login/signup" exact component={Signup} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/event" exact component={AddEvent} />
        <AdminRoute
          path="/admin/clients"
          exact
          component={ManageClientsByEvent}
        />
        <AdminRoute
          path="/admin/clients/:eventId"
          exact
          component={ManageClients}
        />
        <AdminRoute path="/admin/events" exact component={ManageEvents} />
        <AdminRoute
          path="/admin/event/update/:eventId"
          exact
          component={UpdateEvent}
        />
        <AdminRoute
          path="/admin/client/update/:clientId"
          exact
          component={UpdateClient}
        />
        <Route path="/test" exact component={Test} />
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
