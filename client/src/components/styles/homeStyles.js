import styled, { css } from "styled-components";
import BgImg from "../../assets/Images/foto1.jpg";
import { motion } from "framer-motion";

export const HomePage = styled(motion.div)`
  background-image: url(${BgImg});
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 80vh;

  @media (max-width: 800px) {
    background-position: 50% 60%;
    height: 90vh;
  }
`;

export const HomeCards = styled(motion.div)`
  width: 100%;
  height: 80vh;

  @media (max-width: 801px) {
    height: 140vh;
  }

  @media (min-width: 501px) and (max-width: 800px) {
    height: 230vh;
  }

  @media (min-width: 401px) and (max-width: 500px) {
    height: 150vh;
  }

  @media (min-width: 200px) and (max-width: 400px) {
    height: 210vh;
  }
`;

export const HomeFooter = styled(motion.div)`
  margin-top: 25%;
  @media (min-width: 801px) and (max-width: 1200px) {
    margin-top: 28%;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    margin-top: 2%;
  }
  @media (min-width: 401px) and (max-width: 600px) {
    margin-top: -5%;
  }
  @media (max-width: 400px) {
    margin-top: -12%;
  }
`;

export const Plants = styled(motion.div)`
  position: absolute;
  top: -88%;
  @media (max-width: 800px) {
    top: -228%;
  }

  ${(props) =>
    props.spaceAround &&
    css`
      display: flex;
      justify-content: space-around;
      width: 80%;
    `}
`;

export const ListItem = styled(motion.li)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding: 0 3rem; */

  ${(props) =>
    props.footer &&
    css`
      margin-bottom: 1rem;
      &:last-child {
        /* margin-bottom: 0; */
      }
      @media (max-width: 1400px) {
        padding: 0 0;
        margin-bottom: 0;
        margin-right: 0.7rem;
        h4 {
          display: none;
        }
      }
    `}
  ${(props) =>
    props.mountain &&
    css`
      padding: 0;
      background: ${(props) => props.theme.white};
      @media (max-width: 380px) {
        display: flex;
      }
    `}

  @media (max-width: 380px) {
    padding: 0;
  }
`;

export const List = styled(motion.ul)`
  position: relative;
  display: grid;

  ${(props) =>
    props.footer &&
    css`
      margin-top: 0;
      @media (max-width: 1400px) {
        display: flex;
        /* margin-top: -10%; */
      }
    `}
  ${(props) =>
    props.mountain &&
    css`
      height: auto;
      padding: 1rem;
      border-radius: 26px;
      background: ${(props) => props.theme.white};
      margin-right: 2rem;
      @media (max-width: 320px) {
        transform: scale(0.7);
      }
      @media (max-width: 480px) {
        margin: 0.2rem;
      }
    `}
    ${(props) =>
    props.kayaks &&
    css`
      height: auto;
      padding: 1rem;
      border-radius: 26px;
      background: ${(props) => props.theme.white};
      @media (max-width: 360px) {
        transform: scale(0.7);
      }
      @media (max-width: 1200px) {
        margin: 17rem 1rem 1rem 1rem;
      }
      @media (max-width: 800px) {
        margin: 12rem 1rem 1rem 1rem;
      }
    `}
`;

export const ListText = styled(motion.div)`
  margin-left: 2rem;
  padding-left: 1rem;
  height: 4rem;
  width: 263px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props.theme.light_green};
  border-radius: 26px;
  font-weight: 800;
  @media (max-width: 380px) {
    width: 203px;
    margin-left: 1rem;
  }

  ${(props) =>
    props.mountain &&
    css`
      margin-left: 0;
      background: transparent;
      width: auto;
      height: 1rem;
      padding: 2rem;
      @media (max-width: 380px) {
        display: flex;
        font-size: ${(props) => props.theme.font2};
        padding: 0.4rem;
      }
    `}
`;

// ${(props) =>
//     props.spaceAround &&
//     css`
//       display: flex;
//       justify-content: space-around;
//       width: 80%;
//     `}
// @media (max-width: 380px) {
//  top: -228%;
//  }
