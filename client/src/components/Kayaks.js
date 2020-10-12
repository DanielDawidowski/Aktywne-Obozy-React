import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { Container, Flex, MainText } from "./styles/globalStyles";
import Footer from "./Footer";
import { WhiteBg } from "./styles/mountainsStyles";
import Leaf from "../assets/SVG/leafs6";
import WomanIcon from "../assets/SVG/woman";
import ManIcon from "../assets/SVG/man";
import {
  Card,
  CardIcon,
  CircleIcon,
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
import TripIcon from "../assets/SVG/trip";
import FoodIcon from "../assets/SVG/food";
import InsuranceIcon from "../assets/SVG/insurance";
import HealthIcon from "../assets/SVG/health";
import TeacherIcon from "../assets/SVG/teacher";
import HotelIcon from "../assets/SVG/hotel";
import GroupLeafsIcon from "../assets/SVG/leaf4";
import TentIcon from "../assets/SVG/BigTent";
import CalendarIcon from "../assets/SVG/calendar";
import GroupIcon from "../assets/SVG/group";
import CornerLeafs from "../assets/SVG/cornerLeafs.js";
import KayakIcon from "../assets/SVG/kayakMan";
import SunIcon from "../assets/SVG/sun";
import CloudIcon from "../assets/SVG/cloud";
import Kayak from "../assets/SVG/kayak";
import KayakRed from "../assets/SVG/kayakRed";
import OarIcon from "../assets/SVG/oar";
import WaveGreen from "../assets/SVG/wave";
import SwanIcon from "../assets/SVG/swan";
import StorkIcon from "../assets/SVG/stork";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Kayaks = () => {
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
              <CardList right>
                <CardListItem blue right>
                  <CardDetails>
                    <span>
                      {" "}
                      <CalendarIcon /> 30.06-05.07.2020
                    </span>
                    <span>
                      {" "}
                      <GroupIcon /> 15 wolnych miejsc
                    </span>
                  </CardDetails>
                  <CardListTitle right>
                    <h5>Czarna Hańcza</h5>
                    <h4>Cena : 650 zł</h4>
                    <Link to="/form">
                      <h2>Aktualne</h2>
                    </Link>
                  </CardListTitle>
                </CardListItem>
                <CardListItem right>
                  <CardDetails>
                    <h3>Zakończony</h3>
                  </CardDetails>
                  <CardListTitle>Krutynia</CardListTitle>
                </CardListItem>
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

            <List kayaks>
              <Leaf
                style={{
                  top: "-16%",
                  right: "15%",
                  transform: "rotate(105deg)",
                }}
              />
              <KayakRed />
              {/* <OarIcon
                style={{
                  bottom: "-17%",
                  right: "-35%",
                  transform: "rotate(125deg)",
                  width: "100px",
                  height: "100px",
                }}
              /> */}
              <ListItem mountain>
                <CircleIcon mountain>
                  <TeacherIcon />
                </CircleIcon>
                <ListText mountain>
                  opiekę wykwalifikowanej kadry pedagogicznej <br /> z 15 letnim
                  doświadczeniem
                </ListText>
              </ListItem>
              <ListItem mountain>
                <CircleIcon mountain>
                  <HealthIcon />
                </CircleIcon>
                <ListText mountain>opiekę medyczną</ListText>
              </ListItem>
              <ListItem mountain>
                <CircleIcon mountain>
                  <InsuranceIcon />
                </CircleIcon>
                <ListText mountain>ubezpieczenie NNW</ListText>
              </ListItem>
              <ListItem mountain>
                <CircleIcon mountain>
                  <FoodIcon />
                </CircleIcon>
                <ListText mountain>wyżywnienie</ListText>
              </ListItem>
              <ListItem mountain>
                <CircleIcon mountain>
                  <TripIcon />
                </CircleIcon>
                <ListText mountain>wycieczki krajoznawczo-turystyczne</ListText>
              </ListItem>
            </List>
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
