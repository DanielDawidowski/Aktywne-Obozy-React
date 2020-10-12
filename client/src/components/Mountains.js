import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import { Container, Flex, MainText } from "./styles/globalStyles";
import {
  MountainsPage,
  MountainInfo,
  WhiteBg,
  MountainFooter,
} from "./styles/mountainsStyles";
import {
  Card,
  CardIcon,
  CircleIcon,
  CardList,
  CardListItem,
  CardDetails,
  CardListTitle,
} from "./styles/cardStyles";
import { List, ListItem, ListText } from "./styles/homeStyles";
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
import TripIcon from "../assets/SVG/trip";
import FoodIcon from "../assets/SVG/food";
import InsuranceIcon from "../assets/SVG/insurance";
import HealthIcon from "../assets/SVG/health";
import TeacherIcon from "../assets/SVG/teacher";
import HotelIcon from "../assets/SVG/hotel";
import GroupLeafsIcon from "../assets/SVG/leaf4";

import Leafs5 from "../assets/SVG/leafs5";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Mountains = () => {
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
              <MainText right>
                <h2>
                  <span className="afterline">Wyj</span>azdy <br /> w Góry
                </h2>
              </MainText>
              <CardIcon noBorder>
                <MountainIcon mainColor={"#A44F3E"} secondColor={"#6D3326"} />
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
        <List mountain>
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
          <ListItem mountain>
            <CircleIcon mountain>
              <HotelIcon />
            </CircleIcon>
            <ListText mountain>nocleg</ListText>
          </ListItem>
          <Leafs5 />
          <GroupLeafsIcon />
        </List>
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
