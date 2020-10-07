import styled, { css } from "styled-components";
import BgImg from "../../assets/Images/tatry.jpg";
import { motion } from "framer-motion";

export const MountainsPage = styled(motion.div)`
  /* position: relative; */
  background-image: url(${BgImg});
  background-position: 70% 100%;
  background-size: cover;
  background-attachment: fixed;
  background-color: ${(props) => props.theme.blue};
  width: 100%;
  height: 90vh;

  @media (max-width: 400px) {
    height: 115vh;
  }
`;

export const WhiteBg = styled(motion.div)`
  position: relative;
  border: 2px solid ${(props) => props.theme.dark_blue};
  border-radius: 26px;
  background-color: ${(props) => props.theme.white};
  padding: 56px;
  @media (max-width: 400px) {
    padding: 26px;
  }
`;

export const MountainFooter = styled(motion.div)`
  margin-top: 12%;
  @media (max-width: 400px) {
    margin-top: -42%;
  }
`;
