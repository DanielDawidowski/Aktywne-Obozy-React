import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { isAuth } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { getClient, updateClient } from "./apiAdmin";
import { getEventsList } from "../core/ApiCore";
import { ReactComponent as Person } from "../assets/SVG/person.svg";
import { ReactComponent as Email } from "../assets/SVG/email.svg";
import Phone from "../assets/SVG/phone.js";
import { ReactComponent as EIcon } from "../assets/SVG/event.svg";
import { ReactComponent as EmailIcon } from "../assets/SVG/emailIcon.svg";
import { ReactComponent as LeafsForm } from "../assets/SVG/leafs-form.svg";
import { Container, Flex } from "../components/styles/globalStyles";
import {
  FormPage,
  Events,
  Event,
  EventIcon,
  EventDetails,
  Price,
  Date,
  Group,
  Title,
  RegisterForm,
  Confirm,
  FormFooter,
} from "../components/styles/formStyles.js";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const UpdateClient = ({ match }) => {
  const [kayakEvents, setKayakEvents] = useState([]);
  const [mountainEvents, setMountainEvents] = useState([]);
  const [showEvents, setShowEvents] = useState([]);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    events: [],
    eventId: "",
    loading: false,
    error: "",
    updatedRegister: "",
    redirectToProfile: false,
  });

  const { user, token } = isAuth();

  const {
    name,
    email,
    phone,
    message,
    events,
    eventId,
    loading,
    error,
    updatedRegister,
    redirectToProfile,
  } = data;

  const init = (clientId) => {
    getClient(clientId).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        // populate the state
        setData({
          ...data,
          name: data.name,
          email: data.email,
          phone: data.phone,
          eventId: data.eventId,
          message: data.message,
        });
        // load events
        loadEvents();
      }
    });
  };

  const loadEvents = () => {
    getEventsList().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShowEvents(data);
      }
    });
  };

  useEffect(() => {
    init(match.params.clientId);
    loadEvents();
  }, []);
  console.log(match.params.clientId);

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };

  let clientName = data.name;
  let clientEmail = data.email;
  let clientPhone = data.phone;
  let clientEvent = data.eventId;
  let clientMessage = data.message;

  const clickSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, error: "", loading: true });

    const createClientData = {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      eventId: clientEvent,
      message: clientMessage,
    };

    updateClient(match.params.clientId, user._id, token, createClientData).then(
      (data) => {
        if (data.error) {
          setData({ ...data, error: data.error });
        } else {
          setData({
            ...data,
            name: "",
            email: "",
            phone: "",
            message: "",
            eventId: "",
            loading: false,
            error: false,
            redirectToProfile: true,
            updatedRegister: data.name,
          });
        }
      }
    );
  };

  const newPostForm = () => (
    <RegisterForm onSubmit={clickSubmit}>
      <EmailIcon className="email-form" />
      {/* <LeafsForm className="leafs-form" /> */}
      <>
        <label>
          <Person />
          <input
            type="text"
            className={data.error && "input-error"}
            defaultValue={data.name}
            placeholder="Imię i Nazwisko"
            onChange={handleChange("name")}
          />
        </label>
      </>
      <label>
        <Email />
        <input
          type="text"
          className={data.error && "input-error"}
          defaultValue={data.email}
          placeholder="Email"
          onChange={handleChange("email")}
        />
      </label>
      <label>
        <Phone secondColor={"#4B88D5"} mainColor={"#69A7FF"} />
        <input
          type="text"
          className={data.error && "input-error"}
          defaultValue={data.phone}
          placeholder="Telefon"
          onChange={handleChange("phone")}
        />
      </label>
      {/* <label>
        <EIcon />
        <select
          className={data.error && "input-error"}
          onChange={handleChange("eventId")}
        >
          {showEvents.map((event, i) => (
            <option key={i} value={event._id}>
              {event.name}-{event.startDate}
            </option>
          ))}
        </select>
      </label> */}
      <Confirm>
        <button>Zapisz</button>
        {/* <div>cena: 650 zł</div> */}
      </Confirm>
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
      style={{ display: updatedRegister ? "" : "none" }}
    >
      <h2>Zmiana Zapisana</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToProfile) {
      if (!error) {
        return <Redirect to="/admin/clients" />;
      }
    }
  };

  const goBack = () => (
    <div>
      <Link to="/admin/clients">Powrót</Link>
    </div>
  );

  return (
    <Layout>
      <FormPage
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
        update
      >
        <Container form>
          <Flex center>
            {showLoading()}
            {showSuccess()}
            {showError()}
            {newPostForm()}
            {redirectUser()}
            {goBack()}
          </Flex>
        </Container>
      </FormPage>
    </Layout>
  );
};

export default UpdateClient;
