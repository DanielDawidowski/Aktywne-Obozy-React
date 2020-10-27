import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../core/ApiCore";
import Layout from "./Layout";
import { Container, Flex, MainText } from "./styles/globalStyles";
import Footer from "./Footer";
import { WhiteBg } from "./styles/mountainsStyles";
import WomanIcon from "../assets/SVG/woman";
import ManIcon from "../assets/SVG/man";
import Leaf from "../assets/SVG/leafs6";
import {
  Card,
  CardIcon,
  CircleIcon,
  CardTitle,
  CardList,
  CardListItem,
  CardDetails,
  CardListTitle,
} from "./styles/cardStyles";
import {
  KayaksPage,
  River,
  KayakInfo,
  KayakFooter,
} from "./styles/kayaksStyles";
import { List, ListItem, ListText } from "./styles/homeStyles";

import TentIcon from "../assets/SVG/BigTent";
import CalendarIcon from "../assets/SVG/calendar";
import GroupIcon from "../assets/SVG/group";
import CornerLeafs from "../assets/SVG/cornerLeafs.js";
import KayakIcon from "../assets/SVG/kayakMan";
import SunIcon from "../assets/SVG/sun";
import CloudIcon from "../assets/SVG/cloud";
import Kayak from "../assets/SVG/kayak";
import OarIcon from "../assets/SVG/oar";
import WaveGreen from "../assets/SVG/wave";
import SwanIcon from "../assets/SVG/swan";
import StorkIcon from "../assets/SVG/stork";
import InfoList from "./InfoList";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Kayaks = () => {
  const [showKayakEvents, setShowKayakEvents] = useState([]);

  const loadEvents = () => {
    getEvents("Mazury").then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShowKayakEvents(data);
      }
    });
  };
  
  useEffect(() => {
    loadEvents();
  }, []);

  {console.log(showKayakEvents)}

  return (
    <Layout>
      <KayaksPage
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <CornerLeafs />
        <SunIcon />
        <CloudIcon />
        <Kayak />
        <OarIcon />
        <Container kayaks>
          <Flex kayaks>
            <TentIcon />
            <Card white>
              <CardTitle white>
                <MainText right>
                  <h2>
                    <span className="afterline">Spł</span>ywy <br /> Kajakowe
                  </h2>
                </MainText>
                <CardIcon noBorder>
                  <KayakIcon
                    mainColor={"#6D3326"}
                    secondColor={"#D07230"}
                    width={"117px"}
                    height={"90px"}
                  />
                </CardIcon>
              </CardTitle>
              <CardList right>
                 {showKayakEvents.map((event, i) => {
                  return (
                    event.status === "Aktualne" ? 
                    <>
                      <Link to={`/form/${event._id}`}>
                        <CardListItem blue right key={i}>
                          <CardDetails>
                          <span style={{color:"#A44F3E"}}>
                          {" "}
                              <CalendarIcon fill="#A44F3E"/> {event.startDate}
                            </span>
                            {/* <span>
                              {" "}
                              <GroupIcon /> {event.amount}
                            </span> */}
                          </CardDetails>
                          <CardListTitle right>
                            <h5>{event.name}</h5>
                            <h4>{event.price} zł</h4>
                            <h2>Zapisz się</h2>
                          </CardListTitle>
                        </CardListItem>
                      </Link>
                    </>
                      : 
                    <>
                      <CardListItem right>
                        <CardDetails>
                          <h3>Zakończony</h3>
                        </CardDetails>
                        <CardListTitle>Krutynia</CardListTitle>
                      </CardListItem>
                    </>    
                  )
                })}
              </CardList>
            </Card>
          </Flex>
        </Container>
      </KayaksPage>
      <River>
        <SwanIcon
          size={"113"}
          color={"#FFFCF9"}
          style={{ bottom: "35%", left: "20%" }}
        />
        <SwanIcon
          size={"113"}
          color={"#FFFCF9"}
          style={{ bottom: "45%", left: "30%" }}
        />
        <SwanIcon
          size={"55"}
          color={"#FFC633"}
          style={{ bottom: "60%", left: "40%" }}
        />
        <SwanIcon
          size={"55"}
          color={"#FF9A00"}
          style={{ bottom: "65%", left: "45%" }}
        />
        <SwanIcon
          size={"55"}
          color={"#E3B53D"}
          style={{ bottom: "75%", left: "50%" }}
        />
        <StorkIcon />
        <WaveGreen background={"#A3EFFF"} style={{ marginTop: "-10%" }} />
      </River>
      <KayakInfo>
        <Container>
          <Flex spaceAround>
            <WhiteBg kayaks>
              <ManIcon style={{ left: "10%", top: "80%" }} />
              <WomanIcon style={{ right: "10%", top: "80%" }} />
              <Leaf style={{ bottom: "8%", left: "-22%" }} />
              <MainText>
                <Flex>
                  <h2>
                    <span className="afterline">Org</span>anizatorzy <br />{" "}
                    zapewniają
                  </h2>
                </Flex>
              </MainText>
            </WhiteBg>
            <InfoList kayakIcons={true} />
          </Flex>
        </Container>
      </KayakInfo>
      <KayakFooter>
        <Footer
          background={"#805333"}
          mainColor={"#FFFFFF"}
          secondColor={"#CCC3C3"}
        />
      </KayakFooter>
    </Layout>
  );
};

export default Kayaks;
