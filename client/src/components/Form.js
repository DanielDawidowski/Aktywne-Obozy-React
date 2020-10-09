import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Flex } from "./styles/globalStyles";
import Layout from "./Layout";
import MountainIcon from "../assets/SVG/mountainFooter";
import KayakIcon from "../assets/SVG/kayakMan";
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
} from "./styles/formStyles.js";
import CalendarIcon from "../assets/SVG/calendar";
import GroupIcon from "../assets/SVG/group";
import { ReactComponent as Person } from "../assets/SVG/person.svg";
import { ReactComponent as Email } from "../assets/SVG/email.svg";
import { ReactComponent as Phone } from "../assets/SVG/phone.svg";
import { ReactComponent as Message } from "../assets/SVG/message.svg";
import { ReactComponent as EIcon } from "../assets/SVG/event.svg";
import { ReactComponent as EmailIcon } from "../assets/SVG/emailIcon.svg";
import { ReactComponent as LeafsForm } from "../assets/SVG/leafs-form.svg";

import Footer from "./Footer";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Form = () => {
  const [getEvents, setGetEvents] = useState([]);

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    events: "",
    event: "",
    loading: false,
    error: "",
    createdRegister: "",
    redirectToProfile: false,
  });

  const {
    name,
    email,
    phone,
    message,
    events,
    event,
    loading,
    error,
    createdRegister,
    redirectToProfile,
  } = values;

  // const handleChange = (name) => (event) => {
  //   const value = name === "photo" ? event.target.files[0] : event.target.value;
  //   setValues({ ...values, [name]: value });
  // };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    // setValues({ ...values, error: "", loading: true });

    // createRegister().then((data) => {
    //   if (data.error) {
    //     setValues({ ...values, error: data.error });
    //   } else {
    //     setValues({
    //       ...values,
    //       name: "",
    //       email: "",
    //       phone: "",
    //       message: "",
    //       events: "",
    //       loading: false,
    //       createdMovie: data.name,
    //     });
    //   }
    // });
  };

  return (
    <Layout>
      <FormPage
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <Container form>
          <Flex spaceAround>
            <Events list>
              <Event>
                <EventIcon>
                  <MountainIcon mainColor={"#A44F3E"} secondColor={"#6D3326"} />
                </EventIcon>
                <EventDetails>
                  <Price>cena: 650 zł</Price>
                  <Date>
                    <CalendarIcon /> 30.06-05.07.2020
                  </Date>
                  <Title>Zakopane</Title>
                  <Group>
                    <GroupIcon />
                    <div style={{ fontSize: "1.4rem", paddingRight: "0.4rem" }}>
                      15
                    </div>{" "}
                    wolnych miejsc
                  </Group>
                </EventDetails>
              </Event>
              <Event finished>
                <EventIcon>
                  <MountainIcon mainColor={"#F21B3F"} secondColor={"#F9637C"} />
                  <h3>Zakończony</h3>
                </EventIcon>
              </Event>
              <Event>
                <EventIcon>
                  <KayakIcon
                    mainColor={"#F21B3F"}
                    secondColor={"#F9637C"}
                    width={"67px"}
                    height={"50px"}
                  />
                </EventIcon>
              </Event>
              <Event>
                <EventIcon>
                  <KayakIcon
                    mainColor={"#0075FF"}
                    secondColor={"#00CFFB"}
                    width={"67px"}
                    height={"50px"}
                  />
                </EventIcon>
              </Event>
            </Events>
            <RegisterForm onSubmit={clickSubmit}>
              <EmailIcon className="email-form" />
              <LeafsForm className="leafs-form" />
              <label>
                <Person />
                <input
                  type="text"
                  value={name}
                  placeholder="Imię i Nazwisko"
                  onChange={handleChange("name")}
                />
              </label>
              <label>
                <Email />
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange("email")}
                />
              </label>
              <label>
                <Phone />
                <input
                  type="text"
                  value={phone}
                  placeholder="Telefon"
                  onChange={handleChange("phone")}
                />
              </label>
              <label>
                <EIcon />
                <select onChange={handleChange("events")}>
                  <option>Zakopane</option>
                  <option>Wisła</option>
                  <option>Czarna Hańcza</option>
                </select>
              </label>
              <label>
                <Message />
                <textarea
                  type="text"
                  value={message}
                  placeholder="Wiadomość"
                  onChange={handleChange("message")}
                />
              </label>
              <Confirm>
                <button>Zapisz się</button>
                <div>cena: 650 zł</div>
              </Confirm>
            </RegisterForm>
          </Flex>
        </Container>
      </FormPage>
      <FormFooter>
        <Footer
          background={"#D07230"}
          mainColor={"#FFFFFF"}
          secondColor={"#CCC3C3"}
        />
      </FormFooter>
    </Layout>
  );
};

export default Form;
