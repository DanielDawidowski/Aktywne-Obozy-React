import styled, { css } from "styled-components";
import BgImg from "../../assets/Images/foto1.jpg";
import { motion } from "framer-motion";

export const HomePage = styled(motion.div)`
  background-image: url(${BgImg});
  background-position: 55% 85%;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 80vh;

  @media (min-width: 330px) {
    background-position: 50% 60%;
  }
`;

export const Plants = styled(motion.div)`
  position: absolute;
  top: -88%;
  @media (max-width: 380px) {
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
  padding: 0 3rem;

  ${(props) =>
    props.footer &&
    css`
      margin-bottom: 1rem;
      &:last-child {
        /* margin-bottom: 0; */
      }
      @media (max-width: 380px) {
        padding: 0;
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
  margin-top: 4rem;
  display: grid;

  ${(props) =>
    props.footer &&
    css`
      margin-top: 0;
      @media (max-width: 380px) {
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
      @media (max-width: 480px) {
        margin: 0.8rem;
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
