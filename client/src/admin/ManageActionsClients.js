import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Accordion from "../components/Accordion";
import { Link } from "react-router-dom";
import { isAuth } from "../auth";
import { getStatusValuesClients } from "../core/ApiCore";
import { getClients, deleteClient, updateClientStatus } from "./apiAdmin";
import { RegisterForm } from "../components/styles/formStyles.js";
import { ReactComponent as Bin } from "../assets/SVG/bin.svg";
import { ReactComponent as UpdateIcon } from "../assets/SVG/update.svg";
import {
  Container,
  Flex,
  MainText,
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


const ManageClients = () => {
  const [registers, setRegisters] = useState([]);
  const [statusValues, setStatusValues] = useState([]);
  
  const { user, token } = isAuth();

  const loadRegisters = () => {
    getClients().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRegisters(data);
       }
    });
  };

  const loadStatusValues = () => {
    getStatusValuesClient(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStatusValues(data);
      }
    });
  };

  useEffect(() => {
    loadRegisters();
    loadStatusValues();
  }, []);

  const handleStatusChange = (e, clientId) => {
    updateClientStatus(user._id, token, clientId, e.target.value).then((data) => {
      if (data.error) {
        console.log("statusupdate failed");
      } else {
        loadRegisters();
      }
    });
  };

  const destroy = (clientId) => {
      deleteClient(clientId, user._id, token).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          loadRegisters();
        }
      });
    }
  ;

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
        style={{ height: "auto", minHeight: "100vh" }}
      >
        <Container form>
          <Flex list>
            <RegisterForm style={{ marginTop: "10rem" }}>
              <h2 style={{color:"black"}}>Razem osób = {registers.length}</h2>
              <hr />
              <ul>
                {/* <button onClick={() => registers.filter(register => register.event === "Zakopane") }>Zakopane</button> */}
                  {registers.map((register, i) => (
                  <li
                    key={i}
                    style={{ backgroundColor: register.status === "Zatwierdzony" ? "#71F55B" : "#F1AAB2"}}
                   >
                    {console.log(register)}
                      <Accordion name={register.name}>
                        <strong>{register.event}</strong>
                        <strong>{register.phone}</strong>
                        <strong>{register.email}</strong>
                        <strong>{register.status}</strong>
                        <div>
                          <label>Status</label>
                          <select
                            onChange={(e) => handleStatusChange(e, register._id)}
                            >
                            <option>--Wybierz--</option>
                            {statusValues.map((status, index) => (
                              <option key={index} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Accordion>
                    <div>
                      <Link to={`/admin/client/update/${register._id}`}>
                        <UpdateIcon />
                      </Link>
                      <Bin
                        onClick={() => {
                          if (window.confirm("Napewno chcesz to usunąć?")) {
                            destroy(register._id)
                          }
                        }}
                        style={{ marginLeft: "0.4rem" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
          </RegisterForm>
          {goBack()}
          </Flex>
        </Container>
      </SignupPage>
    </Layout>
  );
};

export default ManageClients;
