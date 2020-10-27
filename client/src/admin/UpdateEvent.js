import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../auth";
import {
  Container,
  Flex,
  MainText,
  SignupPage,
} from "../components/styles/globalStyles";
import { getStatusValues, getEventTypes } from "../core/ApiCore";
import Layout from "../components/Layout";
import { getEvent, updateEvent } from "./apiAdmin";
import { RegisterForm } from "../components/styles/formStyles";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const AddEvent = ({ match }) => {
  const [statusValues, setStatusValues] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  const [success, setSuccess] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    amount: "",
    startDate: "",
    endDate: "",
    typeEvent: "",
    status: "",
    loading: false,
    error: "",
    updatedEvent: "",
    redirectToProfile: false,
  });

  // desctructure user and token from localstorage
  const { user, token } = isAuth();

  const {
    name,
    description,
    price,
    amount,
    startDate,
    endDate,
    typeEvent,
    status,
    loading,
    error,
    updatedEvent,
    redirectToProfile,
  } = data;

  const init = (eventId) => {
    getEvent(eventId).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        loadStatusValues();
        loadEventTypes();
        setData({
          ...data,
          name: data.name,
          description: data.description,
          price: data.price,
          amount: data.amount,
          startDate: data.startDate,
          endDate: data.endDate,
          typeEvent: data.typeEvent,
          status: data.status,
        });
      }
    });
  };

  const loadEventTypes = () => {
    getEventTypes(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEventTypes(data);
      }
    });
  };

  const loadStatusValues = () => {
    getStatusValues(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStatusValues(data);
      }
    });
  };

  useEffect(() => {
    init(match.params.eventId);
  }, []);

  const handleChange = (name) => (event) => {
    // const value = name === "photo" ? event.target.files[0] : event.target.value;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  let eventName = data.name;
  let eventDescription = data.description;
  let eventPrice = data.price;
  let eventAmount = data.amount;
  let eventStarDate = data.startDate;
  let eventEndDate = data.endDate;
  let eventType = data.typeEvent;
  let eventStatus = data.status;

  const clickSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, error: "", loading: true });

    const createEventData = {
      status: eventStatus,
      typeEvent: eventType,
      endDate: eventEndDate,
      startDate: eventStarDate,
      amount: eventAmount,
      price: eventPrice,
      description: eventDescription,
      name: eventName,
    };

    updateEvent(match.params.eventId, user._id, token, createEventData).then(
      (data) => {
        if (data.error) {
          setData({ ...data, error: data.error });
        } else {
          setData({
            ...data,
            // name: "",
            // description: "",
            // price: 0,
            // amount: 0,
            // startDate: "",
            // endDate: "",
            // typeEvent: "",
            // statusValue: "",
            loading: false,
            createdTrip: data.name,
          });
          setSuccess(true);
        }
      }
    );
  };

  const newCategoryForm = () => (
    <RegisterForm onSubmit={clickSubmit} form>
      <div>
        <label>Nazwa</label>
        <input
          type="text"
          onChange={handleChange("name")}
          defaultValue={data.name}
          autoFocus
          required
        />
      </div>
      <div>
        <label>Opis</label>
        <textarea
          type="text"
          onChange={handleChange("description")}
          defaultValue={data.description}
        />
      </div>
      <div>
        <label>Cena</label>
        <input
          type="number"
          onChange={handleChange("price")}
          defaultValue={data.price}
        />
      </div>
      <div>
        <label>Ilość Miejsc</label>
        <input
          type="number"
          onChange={handleChange("amount")}
          defaultValue={data.amount}
        />
      </div>
      <div>
        <label>Data Wyjazdu</label>
        <input
          type="date"
          onChange={handleChange("startDate")}
          defaultValue={data.startDate}
        />
      </div>
      <div>
        <label>Data Przyjazdu</label>
        <input
          type="date"
          onChange={handleChange("endDate")}
          defaultValue={data.endDate}
        />
      </div>

      <div>
        <label>Mazury czy Góry</label>
        <select
          className="form-control"
          onChange={handleChange("typeEvent")}
          defaultValue={data.typeEvent}
        >
          {eventTypes.map((eventType, index) => (
            <option key={index} value={eventType}>
              {eventType}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Status</label>
        <select
          className="form-control"
          onChange={handleChange("status")}
          defaultValue={data.status}
        >
          <option>--Wybierz--</option>
          {statusValues.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <button>Utwórz Spływ</button>
    </RegisterForm>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">Spływ edytowany</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Event already exist</h3>;
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link to="/admin/dashboard" className="text-warning">
        Powrót
      </Link>
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
        <Container form>
          <Flex center>
            {showSuccess()}
            {showError()}
            {newCategoryForm()}
            {goBack()}
          </Flex>
        </Container>
      </SignupPage>
    </Layout>
  );
};

export default AddEvent;
