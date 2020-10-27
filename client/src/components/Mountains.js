import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import { Container, Flex, MainText } from "./styles/globalStyles";
import { getEvents } from "../core/ApiCore";
import {
  MountainsPage,
  MountainInfo,
  WhiteBg,
  MountainFooter,
} from "./styles/mountainsStyles";
import {
  Card,
  CardIcon,
  CardTitle,
  CardList,
  CardListItem,
  CardDetails,
  CardListTitle,
} from "./styles/cardStyles";
import MountainIcon from "../assets/SVG/mountain";
import CalendarIcon from "../assets/SVG/calendar";
import GroupIcon from "../assets/SVG/group";
import PawIcon from "../assets/SVG/Paw";
import HikerIcon from "../assets/SVG/Hiker";
import CoffeeIcon from "../assets/SVG/Coffee";
import WaveBlue from "../assets/SVG/wave-blue";
import Leaf3 from "../assets/SVG/leaf3";
import WomanIcon from "../assets/SVG/woman";
import ManIcon from "../assets/SVG/man";
import TravelIcon from "../assets/SVG/travel";
import InfoList from "./InfoList";


const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Mountains = () => {
  const [showMountainsEvents, setShowMountainsEvents] = useState([]);

   const loadMountainEvents = () => {
    getEvents("Góry").then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShowMountainsEvents(data);
      }
    });
  };
  
  useEffect(() => {
    loadMountainEvents();
  }, []);

  return (
    <Layout>
      <MountainsPage
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <PawIcon />
        <HikerIcon />
        <CoffeeIcon />
        <Container right>
          <Flex flexEnd>
            <Card white>
              <CardTitle white>
                <MainText right>
                  <h2>
                    <span className="afterline">Wyj</span>azdy <br /> w Góry
                  </h2>
                </MainText>
                <CardIcon noBorder>
                  <MountainIcon mainColor={"#A44F3E"} secondColor={"#6D3326"} />
                </CardIcon>
              </CardTitle>
              <CardList>
                {showMountainsEvents.map((event, i) => {
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
                            <span>
                              {" "}
                              {/* {event.price} zł */}
                            </span>
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
      </MountainsPage>
      <WaveBlue />
      <MountainInfo>
        <Flex center>
          <WhiteBg>
            <ManIcon />
            <Leaf3 />
            <MainText>
              <Flex center>
                <h2>
                  <span className="afterline">Org</span>anizatorzy <br />{" "}
                  zapewniają
                </h2>
              </Flex>
            </MainText>
            <WomanIcon />
          </WhiteBg>
        </Flex>
      </MountainInfo>
      <Flex BlueBG center>
        <InfoList mountainIcons={true}/>
        <TravelIcon />
      </Flex>

      <MountainFooter>
        <Footer
          background={"#805333"}
          mainColor={"#FFFFFF"}
          secondColor={"#CCC3C3"}
        />
      </MountainFooter>
    </Layout>
  );
};

export default Mountains;
