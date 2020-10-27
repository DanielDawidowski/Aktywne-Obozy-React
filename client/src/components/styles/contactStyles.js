import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const success = keyframes`
  0% {
    top: 2%;
  }

  50% {
    top: -8%;
    transform: scale(1.1)
  }

  100% {
    top: -12%;
    transform: scale(1.2);
  }
`;

export const ContactPage = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-image: repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(135deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgb(208,114,48) 143px, rgb(208,114,48) 191px,rgb(208,114,48) 191px, rgb(208,114,48) 239px,rgb(208,114,48) 239px, rgb(208,114,48) 273px),linear-gradient(90deg, rgb(208,114,48),rgb(208,114,48));
  padding: 4rem 0;
  @media (max-width: 1200px) {
    height: 150vh;
  }
`;



export const ContactPeople = styled(motion.div)`
  /* background-color: ${(props) => props.theme.white}; */

  svg {
    @media (min-width: 201px) and (max-width: 600px) {
      width: 100px
    } 
  }

  @media (min-width: 201px) and (max-width: 1200px) {
    margin-top: 4rem;
  }      
`;

export const Contact = styled(motion.div)`
  display: flex;

  &:last-child {
    margin-top: 2rem;
  }

  @media (min-width: 201px) and (max-width: 800px) {
    transform: scale(0.8)
  } 
`;

export const ContactElement = styled(motion.div)`
  background-image: radial-gradient(circle at 52% 84%, rgba(194, 194, 194,0.06) 0%, rgba(194, 194, 194,0.06) 18%,transparent 18%, transparent 100%),radial-gradient(circle at 38% 97%, rgba(239, 239, 239,0.06) 0%, rgba(239, 239, 239,0.06) 20%,transparent 20%, transparent 100%),radial-gradient(circle at 86% 17%, rgba(210, 210, 210,0.06) 0%, rgba(210, 210, 210,0.06) 61%,transparent 61%, transparent 100%),radial-gradient(circle at 6% 48%, rgba(91, 91, 91,0.06) 0%, rgba(91, 91, 91,0.06) 27%,transparent 27%, transparent 100%),radial-gradient(circle at 27% 63%, rgba(86, 86, 86,0.06) 0%, rgba(86, 86, 86,0.06) 30%,transparent 30%, transparent 100%),radial-gradient(circle at 2% 91%, rgba(182, 182, 182,0.06) 0%, rgba(182, 182, 182,0.06) 29%,transparent 29%, transparent 100%),linear-gradient(90deg, rgb(225,244,218),rgb(255,255,255));

  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  padding: 0 2rem;

  @media (min-width: 201px) and (max-width: 800px) {
      padding: 0;

  } 

`;

export const Message = styled(motion.div)`
  position: absolute;
  top: 1%;
  left: 8%;
  background-image: repeating-linear-gradient(249deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(249deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(249deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgba(38,82,16, 0.86) 143px, rgba(38,82,16, 0.86) 191px,rgba(38,82,16, 0.86) 191px, rgba(38,82,16, 0.86) 239px,rgba(38,82,16, 0.86) 239px, rgba(38,82,16, 0.86) 273px),linear-gradient(204deg, rgba(38,82,16, 0.86),rgba(38,82,16, 0.86));
  color: ${(props) => props.theme.white};
  border-radius: 26px;
  border: 2px solid ${(props) => props.theme.white};
  animation: ${success} 1s linear;

  h3 {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 800px) {
     font-size: ${(props) => props.theme.font1}
    }
 ${(props) =>
    props.add &&
    css`
      position: absolute;
      top: 12%;
      left: 30%;
      z-index: 1; 
      animation: unset; 
      @media (min-width: 1200px) {
        top: -7%;
        left: 18%;
      }
  `}; 

  ${(props) =>
    props.error &&
    css`
      background-image: repeating-linear-gradient(249deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(249deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(249deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgba(201,47,43, 0.85) 143px, rgba(201,47,43, 0.85) 191px,rgba(201,47,43, 0.85) 191px, rgba(201,47,43, 0.85) 239px,rgba(201,47,43, 0.85) 239px, rgba(201,47,43, 0.85) 273px),linear-gradient(204deg, rgba(201,47,43, 0.85),rgba(201,47,43, 0.85));
    `};   

    
`;

export const ContactFooter = styled(motion.div)`
  margin-top: 8%;
   @media (min-width: 801px) and (max-width: 1200px) {
    margin-top: -4%;
  }
   @media (min-width: 601px) and (max-width: 800px) {
    margin-top: -20%;
  }
   @media (min-width: 401px) and (max-width: 600px) {
    margin-top: -30%;
  }
   @media (min-width: 301px) and (max-width: 400px) {
    margin-top: -40%;
  }
  @media (max-width: 300px) {
    margin-top: -52%;
  }
`;
