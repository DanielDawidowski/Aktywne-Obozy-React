import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import Footer from "./Footer";
import {
  HomePage,
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

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
  },
  exit: { opacity: 0, y: 100, transition: { delay: 1 } },
};

const Home = () => {
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
        <WaveWhite />
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
              <CardList>
                <CardListItem green>
                  <Link to="/kayaks">
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
                  </Link>
                  <Link to="/kayaks">
                    <CardListTitle>Czarna Hańcza</CardListTitle>
                  </Link>
                </CardListItem>
                <CardListItem>
                  <CardDetails>
                    <h3>Zakończony</h3>
                  </CardDetails>
                  <CardListTitle>Krutynia</CardListTitle>
                </CardListItem>
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
              <CardList>
                <CardListItem blue>
                  <Link to="/mountains">
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
                  </Link>
                  <Link to="/mountains">
                    <CardListTitle>Zakopane</CardListTitle>
                  </Link>
                </CardListItem>
                <CardListItem>
                  <CardDetails>
                    <h3>Zakończony</h3>
                  </CardDetails>
                  <CardListTitle>Małe Ciche</CardListTitle>
                </CardListItem>
                <CardListItem>
                  <CardDetails>
                    <h3>Zakończony</h3>
                  </CardDetails>
                  <CardListTitle>Zawoja</CardListTitle>
                </CardListItem>
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
              <ListItem>
                <CircleIcon lightBlue>
                  <FunIcon />
                </CircleIcon>
                <ListText>Dobra Zabawę</ListText>
              </ListItem>
              <ListItem>
                <CircleIcon lightBlue>
                  <PhotoIcon />
                </CircleIcon>
                <ListText>Miłe Wspomnienia</ListText>
              </ListItem>
              <ListItem>
                <CircleIcon lightBlue>
                  <LuggageIcon />
                </CircleIcon>
                <ListText>Udane Wakacje</ListText>
              </ListItem>
            </List>
          </Flex>
        </Container>

        <Footer
          background={"#71F55B"}
          mainColor={"#0075FF"}
          secondColor={"#A3EFFF"}
        />
      </HomePage>
    </Layout>
  );
};

export default Home;
