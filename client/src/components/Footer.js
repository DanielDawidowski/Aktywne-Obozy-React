import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Container, Flex } from "./styles/globalStyles";
import { List, ListItem } from "./styles/homeStyles";
import Logo from "../assets/SVG/AO-LOGO.js";
import SVGIcon from "../assets/SVG/SVGIcon";
import KayakIcon from "../assets/SVG/kayakMan";
import MountainIcon from "../assets/SVG/mountainFooter";
import EnvelopeIcon from "../assets/SVG/envelope";

const Foot = styled(motion.footer)`
  position: relative;
  margin-top: 10rem;

  .footer-logo {
    width: 140px;
    height: 100px;

    @media (max-width: 400px) {
      width: 60px;
      height: 35px;
    }
  }
  h3 {
    color: ${(props) => props.theme.blue};
    font-size: ${(props) => props.theme.font2};
  }
`;

const Footer = ({ background = "#000", mainColor, secondColor }) => (
  <Foot>
    <SVGIcon
      name="wave"
      width={"100%"}
      fill={background}
      style={{ marginTop: "-30%" }}
      className="wave"
    />
    <Container marginTopMin>
      <Flex spaceBetween>
        <Link to="/">
          <Logo className="footer-logo" mainColor={mainColor} />
        </Link>
        <List footer>
          <Link to="/">
            <ListItem footer>
              <KayakIcon
                mainColor={mainColor}
                secondColor={secondColor}
                width={"67px"}
                height={"50px"}
              />
              <h4 style={{ marginLeft: "2rem", color: mainColor }}>
                Spływy Kajakowe
              </h4>
            </ListItem>
          </Link>
          <Link to="/mountains">
            <ListItem footer>
              <MountainIcon mainColor={mainColor} secondColor={secondColor} />
              <h4 style={{ marginLeft: "2rem", color: mainColor }}>
                Wyjazdy w Góry
              </h4>
            </ListItem>
          </Link>
          <Link to="/contact">
            <ListItem footer>
              <EnvelopeIcon mainColor={mainColor} secondColor={secondColor} />
              <h4 style={{ marginLeft: "2.8rem", color: mainColor }}>
                Kontakt
              </h4>
            </ListItem>
          </Link>
        </List>
      </Flex>
    </Container>
  </Foot>
);

export default Footer;
