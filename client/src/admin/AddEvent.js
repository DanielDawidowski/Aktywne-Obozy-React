import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../auth";
import {
  Container,
  Flex,
  MainText,
  SignupPage,
} from "../components/styles/globalStyles";
import Layout from "../components/Layout";
import { createEvent } from "./apiAdmin";
import { getEventTypes } from "../core/ApiCore"
import { RegisterForm } from "../components/styles/formStyles";
import { Message } from '../components/styles/contactStyles';
const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const AddEvent = () => {
  const [eventTypes, setEventTypes] = useState([]);


  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    amount: 0,
    startDate: "",
    endDate: "",
    typeEvent: "",
    buttonText: "Dodaj",
    loading: false,
    success: false,
    error: "",
    createdEvent: "",
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
    buttonText,
    loading,
    error,
    success,
    createdEvent,
    redirectToProfile,
  } = data;

   const loadEventTypes = () => {
    getEventTypes(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEventTypes(data);
      }
    });
  };

   useEffect(() => {
    loadEventTypes();
  }, []);
 

  let eventName = data.name;
  let eventDescription = data.description;
  let eventPrice = data.price;
  let eventAmount = data.amount;
  let eventStarDate = data.startDate;
  let eventEndDate = data.endDate;
  let eventType = data.typeEvent;


  const clickSubmit = (e) => {
    e.preventDefault();
    setData({ loading: true,  buttonText: "Dodaje..." });

    const createEventData = {
      typeEvent: eventType,
      endDate: eventEndDate,
      startDate: eventStarDate,
      amount: eventAmount,
      price: eventPrice,
      description: eventDescription,
      name: eventName,
    };

    createEvent(user._id, token, createEventData).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        setData({
          ...data,
          name: "",
          description: "",
          price: 0,
          startDate: "",
          endDate: "",
          typeEvent: "",
          buttonText: "Dodano",
          success: data.success,
          loading: false,
          createdEvent: data.name,
        });
      }
    });
  };

   const handleChange = (name) => (event) => {
    // const value = name === "photo" ? event.target.files[0] : event.target.value;
    const value = event.target.value;
    setData({ ...data, [name]: value, error: false, success: false });
  };

  {console.log(eventTypes)}

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
          <option>--Wybierz--</option>
          {eventTypes.map((eventType, index) => (
            <option key={index} value={eventType}>
              {eventType}
            </option>
          ))}
        </select>
      </div>
      
      <button>{buttonText}</button>
    </RegisterForm>
  );


  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Event already exist</h3>;
    }
  };

  const goBack = () => (
    <div>
      <Link style={{ color: "black", marginTop: "1.5rem"}}  to="/admin/dashboard" className="text-warning">
        Back to Dashboard
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
            {success &&
              <Message add>
                <h3>Dodano wyjazd</h3>
              </Message> 
            }
            {error && 
              <Message error>
                {error}
              </Message>
            }
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
