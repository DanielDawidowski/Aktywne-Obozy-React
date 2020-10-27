import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { createClient, createClientEmail, createAuthorEmail, getEvent } from "../admin/apiAdmin";
import { Container, Flex } from "./styles/globalStyles";
import Layout from "./Layout";
import {
  FormPage,
  Events,
  Event,
  EventIcon,
  EventTitle,
  EventDetails,
  EventCard,
  Detail,
  Price,
  Date,
  Group,
  Title,
  RegisterForm,
  Confirm,
  FormFooter,
} from "./styles/formStyles.js";
import MountainIcon from "../assets/SVG/mountainFooter";
import KayakIcon from "../assets/SVG/kayakMan";
import CalendarIcon from "../assets/SVG/calendar";
import GroupIcon from "../assets/SVG/group";
import MoneyIcon from "../assets/SVG/money.js";
import Paragraph from "../assets/SVG/paragraph.js";
import { ReactComponent as Person } from "../assets/SVG/person.svg";
import { ReactComponent as Plus } from "../assets/SVG/plus.svg";
import { ReactComponent as Email } from "../assets/SVG/email.svg";
import Phone from "../assets/SVG/phone.js";
import { ReactComponent as Message } from "../assets/SVG/message.svg";
import { ReactComponent as EIcon } from "../assets/SVG/event.svg";
import { ReactComponent as EmailIcon } from "../assets/SVG/emailIcon.svg";
import { ReactComponent as LeafsForm } from "../assets/SVG/leafs-form.svg";
import { ReactComponent as FormImage } from "../assets/SVG/form-image.svg";
import Footer from "./Footer";

// import formImg from "../assets/Images/form-image.jpg";


const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Form = (props) => {
  const [showEvent, setShowEvent] = useState({});
  console.log(props)
  console.log(showEvent)

  const [data, setData] = useState({
    name: "daniel",
    email: "dvds@wp.pl",
    phone: "123123",
    message: "asd",
    events: [],
    event: "",
    buttonText: "Zapisz się",
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
    buttonText,
    loading,
    error,
    createdRegister,
    redirectToProfile,
  } = data;

  const loadEvent = (eventId) => {
    getEvent(eventId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShowEvent(data);
      }
    });
  };
  
  useEffect(() => {
    const eventId = props.match.params.eventId;
    loadEvent(eventId);
  }, []);

  const handleChange = (name) => (event) => {
    //   const value = name === "photo" ? event.target.files[0] : event.target.value;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  let clientName = data.name;
  let clientEmail = data.email;
  let clientPhone = data.phone;
  let clientMessage = data.message;

  const clickSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, error: "", loading: true, buttonText: "Wysyłanie..." });

    if(data.eventId === '' ) {
      return data.error
    }

    const createClientData = {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      event: showEvent._id,
      message: clientMessage,
    };

     const createEmailData = {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      event: showEvent.name,
      message: clientMessage,
     }

  
    createClient(showEvent._id, createClientData).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        createClientEmail(createEmailData);
        createAuthorEmail(createEmailData);
        setData({
          ...data,
          // name: "",
          // email: "",
          // phone: "",
          // message: "",
          // event: "",
          buttonText: "Wysłane",
          loading: false,
          createdClient: data.name,
        });
      }
    });
  };

  {
    console.log(showEvent._id);
  }
  
  const redirectUser = () => {
    if (redirectToProfile) {
      if (!error) {
        return <Redirect to="/" />;
      }
    }
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
          <Flex form>
            <EventCard>
              <EventTitle>
                <Flex>
                {showEvent.typeEvent === "Mazury" ? 
                  <KayakIcon 
                    secondColor={"#6D3326"}
                    mainColor={"#D07230"}
                    width={"117px"}
                    height={"90px"}
                    />
                  : 
                  <MountainIcon 
                    secondColor={"#6D3326"}
                    mainColor={"#D07230"}
                    width={"117px"}
                    height={"90px"}
                  />
                }
                <h1>{showEvent.name}</h1>
                </Flex>
              </EventTitle>
              <EventDetails>
                <Detail>
                  <CalendarIcon fill="#00CFFB" />
                  <div>
                    <h5>Zaczynamy</h5>
                    <h6>{showEvent.startDate}</h6>
                  </div>
                </Detail>
                <Detail>
                  <CalendarIcon fill="#F21B3F" />
                  <div>
                    <h5>Kończymy</h5>
                    <h6>{showEvent.endDate}</h6>
                  </div>
                </Detail>
                <Detail>
                  <GroupIcon />
                  <div>
                    <h5>Wolnych miejsc</h5>
                    <h6>{showEvent.amount}</h6>
                  </div>
                </Detail>
                <Detail>
                  <MoneyIcon />
                  <div>
                    <h5>Cena</h5>
                    <h6>{showEvent.price} zł</h6>
                  </div>
                </Detail>
              </EventDetails>
              <Flex>
                <p><Paragraph />{showEvent.description}</p>
              </Flex>
              
            </EventCard>
            <RegisterForm onSubmit={clickSubmit}>
              <EmailIcon className="email-form" />
              <LeafsForm className="leafs-form" />
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
                  {/* <span>
                    <Plus onClick={() => {}} />
                    <Plus onClick={() => setNewRegister()} />
                  </span> */}
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
                <Phone 
                  secondColor={"#4B88D5"}
                  mainColor={"#69A7FF"}
                />
                <input
                  type="text"
                  className={data.error && "input-error"}
                  defaultValue={data.phone}
                  placeholder="Telefon"
                  onChange={handleChange("phone")}
                />
              </label>
               <Confirm>
                <button>{buttonText}</button>
                {/* <div>cena: 650 zł</div> */}
              </Confirm>
            </RegisterForm>
            {redirectUser()}
          </Flex>
        </Container>
      </FormPage>
      <FormFooter>
        <Footer
          background={"#D07230"}
          mainColor={"#0075FF"}
          secondColor={"#ffffff"}
        />
      </FormFooter>
    </Layout>
  );
};

export default Form;

             {/* <label>
                <EIcon />
                <select className={data.error && "input-error"} onChange={handleChange("event")} defaultValue={data.event}  >
                  {showEvent &&
                    showEvent.map((event, i) => {
                      const eventId = event._id;
                      return (
                        <option key={i} value={event._id}>
                          {event.name}-{event.startDate}-{eventId}
                          {console.log(event)}
                        </option>
                      );
                    })}
                </select>
              </label> */}
              {/* <label>
                <Message />
                <textarea
                  type="text"
                  className={data.error && "input-error"}
                  defaultValue={data.message}
                  placeholder="Wiadomość"
                  onChange={handleChange("message")}
                />
              </label> */}
