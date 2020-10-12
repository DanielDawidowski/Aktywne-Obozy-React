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

  @media (max-width: 800px) {
    height: 110vh;
  }
`;

export const MountainInfo = styled(motion.div)`
  position: relative;
  height: 50vh;
  background-color: ${(props) => props.theme.light_blue};
  @media (max-width: 800px) {
    height: 35vh;
  }
`;

export const WhiteBg = styled(motion.div)`
  position: relative;
  border: 2px solid ${(props) => props.theme.dark_blue};
  border-radius: 26px;
  background-color: ${(props) => props.theme.white};
  padding: 56px;
  @media (max-width: 800px) {
    padding: 26px;
  }
  ${(props) =>
    props.kayaks &&
    css`
      @media (max-width: 800px) {
        margin-top: -14rem;
      }
      @media (max-width: 400px) {
        margin-top: 4rem;
        margin-left: 2rem;
        padding: 25px;
        width: 250px;
      }
    `}
`;

export const MountainFooter = styled(motion.div)`
  margin-top: 10%;
  @media (min-width: 801px) and (max-width: 1200px) {
    margin-top: -8%;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    margin-top: -15%;
  }
  @media (min-width: 401px) and (max-width: 600px) {
    margin-top: -25%;
  }
  @media (max-width: 400px) {
    margin-top: -42%;
  }
`;
