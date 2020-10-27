import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import { getEvents } from "../core/ApiCore";
import Footer from "./Footer";
import {
  HomePage,
  HomeCards,
  HomeFooter,
  Plants,
  List,
  ListItem,
  ListText,
} from "./styles/homeStyles";
import { Container, Flex, MainText } from "./styles/globalStyles";
import { ReactComponent as LogoSVG } from "../assets/SVG/AO-LOGO-white.svg";
import { ReactComponent as LogoSVGBlue } from "../assets/SVG/LogoBlue.svg";
import SVGIcon from "../assets/SVG/SVGIcon";

import {
  Card,
  CardIcon,
  CircleIcon,
  CardList,
  CardListItem,
  CardDetails,
  CardListTitle,
  CardTitle,
} from "./styles/cardStyles";
import Layout from "./Layout";
import LeafLongSmall from "../assets/SVG/leaf-long-small";
import Leaf1 from "../assets/SVG/leafs1";
import Leaf2 from "../assets/SVG/leafs2";
import WaveWhite from "../assets/SVG/WaveWhite";
import WaveGreen from "../assets/SVG/wave";
import LeafShortSmall from "../assets/SVG/leafs-short-small";
import KayakIcon from "../assets/SVG/kayak-man";
import MountainIcon from "../assets/SVG/mountain";
import CalendarIcon from "../assets/SVG/calendar";
import GroupIcon from "../assets/SVG/group";
import ChildrenImage from "../assets/SVG/children";
import FunIcon from "../assets/SVG/fun";
import PhotoIcon from "../assets/SVG/photo";
import LuggageIcon from "../assets/SVG/luggage";

const HomeList = [
  {
    id: 0,
    title: "Dobra Zabawę",
    icon: <FunIcon />,
  },
  {
    id: 1,
    title: "Miłe Wspomnienia",
    icon: <PhotoIcon />,
  },
  {
    id: 2,
    title: "Udane Wakacje",
    icon: <LuggageIcon />,
  }
];

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Home = () => {
  const [showKayakEvents, setShowKayakEvents] = useState([]);
  const [showMountainsEvents, setShowMountainsEvents] = useState([]);

  const loadKayakEvents = () => {
    getEvents("Mazury").then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShowKayakEvents(data);
      }
    });
  };

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
    loadKayakEvents();
  }, []);

  return (
    <Layout>
      <HomePage
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <Container center>
          <MainText white>
            <h1>
              <span className="afterline">Org</span>anizujemy
            </h1>
            <h4>
              <Typical
                steps={[
                  "spływy kajakowe",
                  1000,
                  "wycieczki w Góry",
                  1000,
                  "i wiele innych",
                  800,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h4>
          </MainText>
        </Container>
      </HomePage>
      <WaveWhite />
      <HomeCards>
        <Container middle>
          <Plants>
            <LeafLongSmall />
            <LeafShortSmall />
          </Plants>
          <MainText whiteBg>
            <h1>
              <span className="afterline">Akt</span>ualności
            </h1>
          </MainText>
        </Container>
        <Container>
          <Flex spaceAround marginTop>
            <Card blue>
              <CardIcon green>
                <Link to="/kayaks">
                  <CircleIcon green>
                    <KayakIcon />
                  </CircleIcon>
                </Link>
              </CardIcon>
              <CardList home>
                
                {showKayakEvents.map((event, i) => {
                  return (
                    event.status === "Aktualne" ? 
                    <>
                      <CardListItem green key={i}>
                        <Link to="/kayaks">
                            <CardListTitle>{event.name}</CardListTitle>            
                            <CardDetails>
                              <span>
                                {" "}
                                <CalendarIcon fill="#A44F3E" /> {event.startDate}
                              </span>
                              <span>
                                {" "}
                                <GroupIcon /> <strong>Zobacz</strong> 
                              </span>
                            </CardDetails>
                          </Link>
                      </CardListItem>
                      </>
                      : 
                        <>
                          <CardListItem>
                            <CardDetails>
                              <h3>{event.status}</h3>
                            </CardDetails>
                            <CardListTitle>{event.name}</CardListTitle>
                          </CardListItem>
                        </>
                    )
                })}
                <CardTitle>
                  <h3>
                    Spływy
                    <br /> Kajakowe
                  </h3>
                </CardTitle>
              </CardList>
            </Card>
            <Card green>
              <CardIcon blue>
                <Link to="/mountains">
                  <CircleIcon blue>
                    <MountainIcon />
                  </CircleIcon>
                </Link>
              </CardIcon>
              <CardList home>
                {showMountainsEvents.map((event, i) => {
                  return (
                    event.status === "Aktualne" ? 
                    <>
                      <CardListItem blue key={i}>
                          <Link to="/mountains">
                            <CardListTitle>{event.name}</CardListTitle>            
                            <CardDetails>
                              <span>
                                {" "}
                                <CalendarIcon fill="#A44F3E" /> {event.startDate}
                              </span>
                              <span>
                                {" "}
                                <GroupIcon /><strong>Zobacz</strong> 
                              </span>
                            </CardDetails>
                          </Link>
                      </CardListItem>
                      </>
                        : 
                          <>
                            <CardListItem>
                              <CardDetails>
                                <h3>{event.status}</h3>
                              </CardDetails>
                              <CardListTitle>{event.name}</CardListTitle>
                            </CardListItem>
                          </>
                        )
                      }
                    )
                  }
                <CardTitle>
                  <h3>
                    Wyjazdy w
                    <br /> Góry
                  </h3>
                </CardTitle>
              </CardList>
            </Card>
          </Flex>
        </Container>
      </HomeCards>

      <WaveGreen background={"#80FC1E"} opacity={"0.22"} />
      <Container middle>
        <Plants spaceAround>
          <Leaf1 />
          <Leaf2 />
        </Plants>
        <MainText>
          <h1>
            <span className="afterline">Gwa</span>rantujemy
          </h1>
        </MainText>
      </Container>
      <Container>
        <Flex spaceAround>
          <ChildrenImage />
          <List>
            {HomeList.map((item, i) => (
              <ListItem key={i}>
                <CircleIcon lightBlue>
                  {item.icon}
                </CircleIcon>
                <ListText>{item.title}</ListText>
              </ListItem>
            ))}
          </List>
        </Flex>
      </Container>
      <HomeFooter>
        <Footer
          background={"#71F55B"}
          mainColor={"#0075FF"}
          secondColor={"#A3EFFF"}
        />
      </HomeFooter>
    </Layout>
  );
};

export default Home;
