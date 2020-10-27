import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import Layout from "../components/Layout";
import { isAuth } from "../auth";
import {
  getClientsByEventId,
  getEvent,
  deleteClient,
  updateClientStatus,
} from "./apiAdmin";
import { getStatusValuesClient } from "../core/ApiCore";
import { RegisterForm } from "../components/styles/formStyles.js";
import { ReactComponent as Bin } from "../assets/SVG/bin.svg";
import { ReactComponent as UpdateIcon } from "../assets/SVG/update.svg";
import { Container, Flex, SignupPage } from "../components/styles/globalStyles";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const ManageProducts = ({ match }) => {
  const [showClients, setShowClients] = useState([]);
  const [showEvent, setShowEvent] = useState({});
  const [statusValues, setStatusValues] = useState([]);
  const { user, token } = isAuth();

  console.log(match);

  const loadEvent = (eventId) => {
    getClientsByEventId(eventId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShowClients(data);
        getEvent(eventId).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setShowEvent(data);
          }
        });
        // fetch related events
        // listRelated(data._id).then((data) => {
        //   if (data.error) {
        //     console.log(data.error);
        //   } else {
        //     setShowEvent(data);
        //   }
        // });
      }
    });
  };

  useEffect(() => {
    const eventId = match.params.eventId;
    loadEvent(eventId);
    loadStatusValues();
  }, []);

  const loadStatusValues = () => {
    getStatusValuesClient(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStatusValues(data);
      }
    });
  };

  const handleStatusChange = (e, clientId) => {
    updateClientStatus(user._id, token, clientId, e.target.value).then(
      (data) => {
        if (data.error) {
          console.log("statusupdate failed");
        } else {
          loadEvent(match.params.eventId);
        }
      }
    );
  };

  const destroy = (clientId) => {
    deleteClient(clientId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadEvent(match.params.eventId);
      }
    });
  };
  const goBack = () => (
    <div>
      <Link
        style={{ color: "black", marginTop: "5rem" }}
        to="/admin/clients"
        className="text-warning"
      >
        Powrót
      </Link>
    </div>
  );
  {
    console.log(showClients);
  }
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
              <ul>
                <h2 style={{ color: "black" }}>
                  {showEvent.name} - razem {showClients.length}
                </h2>
                <hr />
                {showClients.map((client, i) => (
                  <li
                    key={i}
                    style={{
                      backgroundColor:
                        client.status === "Zatwierdzony"
                          ? "#71F55B"
                          : "#F1AAB2",
                    }}
                  >
                    <Accordion name={client.name}>
                      <strong>{client.phone}</strong>
                      <strong>{client.email}</strong>
                      <strong>{client.status}</strong>
                      <div>
                        <label>Status</label>
                        <select
                          onChange={(e) => handleStatusChange(e, client._id)}
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
                      <Link to={`/admin/client/update/${client._id}`}>
                        <UpdateIcon />
                      </Link>
                      <Bin
                        onClick={() => {
                          if (window.confirm("Napewno chcesz to usunąć?")) {
                            destroy(client._id);
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

export default ManageProducts;

{
  /* <li
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
                  </li> */
}
