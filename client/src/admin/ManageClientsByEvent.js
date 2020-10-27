import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { isAuth } from "../auth";
import { getEventsList } from "../core/ApiCore";
import { RegisterForm } from "../components/styles/formStyles.js";
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


const ManageClientsByEvent = () => {
  const [showEvents, setShowEvents] = useState([]);

  const { user, token } = isAuth();

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
    loadEvents();
  }, []);



  const goBack = () => (
    <div>
      <Link style={{ color: "black", marginTop: "5rem"}} to="/admin/dashboard" className="text-warning">
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
          <Flex list>
          <RegisterForm>
          <h2 style={{color:"black"}}>Wyjazdy</h2>
          <hr />
            {showEvents.map((event, i) => (
              <li
                key={i}
              >
                <div>
                  <Link to={`/admin/clients/${event._id}`}>
                    <strong>{event.name}</strong>
                  </Link>
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

export default ManageClientsByEvent;
