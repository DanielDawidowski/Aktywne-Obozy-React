import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Flex } from "./styles/globalStyles";
import { createContactEmail } from "../admin/apiAdmin";
import Layout from "./Layout";
import { ContactPage, ContactPeople, Message, ContactElement, Contact, ContactFooter } from './styles/contactStyles';
import { RegisterForm, Confirm } from "./styles/formStyles.js";
import { ReactComponent as LeafLong } from "../assets/SVG/leafs-long-small.svg";
import { ReactComponent as Pen } from "../assets/SVG/pen.svg";
import { ReactComponent as ProfileMan } from "../assets/SVG/profileMan.svg";
import { ReactComponent as ProfileWoman } from "../assets/SVG/profileWoman.svg";
import Phone from "../assets/SVG/phone.js";
import Footer from "./Footer";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const ContactForm = () => {
  const [values, setValues] = useState({
    message: '',
    name: '',
    email: '',
    sent: false,
    buttonText: "Wyślij",
    success: false,
    error: false
  })

  const { message, email, name, sent, buttonText, success, error } = values;

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Wysyłanie..."})
    createContactEmail({ name, email, message}).then(data => {
      if(data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ 
          ...values, 
          sent: true,
          name: "",
          email: "",
          message: "",
          buttonText: 'Wysłane',
          success: data.success
        })
      }
    })
  }

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value, error: false, success: false, buttonText: "Wyślij" });
  };
  
  return (
      <Layout>
        <ContactPage>
          <Container form>
            <Flex form>
              <RegisterForm form contact onSubmit={clickSubmit}>
                <LeafLong className="leaf" />
                <Pen className="pen" />
                {success &&
                  <Message>
                    <h3>Dziękujemy za wiadomość</h3>
                  </Message> 
                }
                {error && 
                  <Message error>
                    {error}
                  </Message>
                }
                <div>
                  <label>Wiadomość</label>
                  <textarea onChange={handleChange('message')} type="text" value={message} required rows="10" />
                </div>
                <div>
                  <label>Imię</label>
                  <input type="text" onChange={handleChange('name')} value={name} required />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" onChange={handleChange('email')} value={email} required />
                </div>
                <Confirm>
                  <button>{buttonText}</button>
                </Confirm>
              </RegisterForm>
              <ContactPeople>
                <Contact>
                  <ProfileMan />
                  <ContactElement>
                    <Phone 
                      secondColor={"#4B88D5"}
                      mainColor={"#69A7FF"}
                      style={{ marginRight: "0", width: "100px"}}
                    />
                    <div>
                      <h3>Marcin</h3>
                      <h4>602 423 775</h4>
                    </div>
                  </ContactElement>
                </Contact>
                <Contact>  
                  <ProfileWoman />
                  <ContactElement>
                    <Phone 
                      secondColor={"#E86D87"}
                      mainColor={"#FF99AF"}
                      style={{ marginRight: "0", width: "100px"}}
                      />
                    <div>
                      <h3>Ania</h3>
                      <h4>503 019 781</h4>
                    </div>
                  </ContactElement>
                </Contact>
              </ContactPeople>
            </Flex>
          </Container>
        </ContactPage>
        <ContactFooter>
          <Footer
            background={"#6D3326"}
            secondColor={"#D07230"}
            mainColor={"#ffffff"}
          />
        </ContactFooter>
      </Layout>
    )
}

export default ContactForm;

