import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { isAuth } from "../auth";
import { deleteEvent } from "./apiAdmin";
import { getEvents } from "../core/ApiCore";
import { RegisterForm } from "../components/styles/formStyles.js";
import { ReactComponent as Bin } from "../assets/SVG/bin.svg";
import { ReactComponent as UpdateIcon } from "../assets/SVG/update.svg";
import {
  Container,
  Flex,
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


const ManageProducts = () => {
  const [kayakEvents, setKayakEvents] = useState([]);
  const [mountainEvents, setMountainEvents] = useState([]);

  const { user, token } = isAuth();



  const loadKayakEvents = () => {
    getEvents("Mazury").then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setKayakEvents(data);
      }
    });
  };

  const loadMountainEvents = () => {
    getEvents("Góry").then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMountainEvents(data);
      }
    });
  };

  const destroyEvent = (eventId) => {
    deleteEvent(eventId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadKayakEvents();
        loadMountainEvents();
      }
    });
  };

  useEffect(() => {
    loadMountainEvents();
    loadKayakEvents();
  }, []);



  const goBack = () => (
    <div>
      <Link style={{ color: "black", marginTop: "5rem"}} to="/admin/dashboard" className="text-warning">
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
          <Flex list>
          <RegisterForm>
          <h2 style={{color:"black"}}>Spływy</h2>
          <hr />
            {kayakEvents.map((event, i) => (
              <li
                key={i}
              >
                <strong>{event.name}</strong>
                <div>
                  <Link to={`/admin/event/update/${event._id}`}>
                    <UpdateIcon />
                  </Link>
                  <Bin
                    onClick={() => destroyEvent(event._id)}
                    style={{ marginLeft: "0.4rem" }}
                  />
                </div>
              </li>
            ))}
          </RegisterForm>
          <RegisterForm>
          <h2 style={{color:"black"}}>Wyjazdy w Góry</h2>
          <hr />
            {mountainEvents.map((event, i) => (
              <li
                key={i}
              >
                <strong>{event.name}</strong>
                <div>
                  <Link to={`/admin/event/update/${event._id}`}>
                    <UpdateIcon />
                  </Link>
                  <Bin
                    onClick={() => destroyEvent(event._id)}
                    style={{ marginLeft: "0.4rem" }}
                  />
                </div>
              </li>
            ))}
          </RegisterForm>
          {goBack()}
          </Flex>
        </Container>
      </SignupPage>
    </Layout>
  );
};

export default ManageProducts;
