import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const FormPage = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(circle at 85% 1%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 96%,transparent 96%, transparent 100%),radial-gradient(circle at 14% 15%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 1%,transparent 1%, transparent 100%),radial-gradient(circle at 60% 90%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 20%,transparent 20%, transparent 100%),radial-gradient(circle at 79% 7%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 78%,transparent 78%, transparent 100%),radial-gradient(circle at 55% 65%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 52%,transparent 52%, transparent 100%),linear-gradient(135deg, rgb(11,170,201),rgb(47,210,244));

  @media (max-width: 1200px) {
    height: 150vh;
  }

   ${(props) =>
    props.update &&
    css`
      @media (max-width: 600px) {
        height: 110vh;
      }
    `};
`;

export const Events = styled(motion.div)`
  padding: 1rem;
  margin: 0.4rem 3rem 0 0;
  background-color: ${(props) => props.theme.white};

  @media (max-width: 700px) {
    margin-right: 0;
  }

  ${(props) =>
    props.list &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 1rem;
      @media (max-width: 1400px) {
        display: none;
        margin-right: 0;
      }
    `};
`;

export const Event = styled(motion.div)`
  background-color: ${(props) => props.theme.light_green};
  border-radius: 7px;
  padding: 1rem;
  ${(props) =>
    props.finished &&
    css`
      background-color: #f1aab2;
      color: ${(props) => props.theme.red};
    `};
`;

export const EventIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10vh;
  background-color: transparent;
`;

export const Price = styled(motion.span)`
  font-size: ${(props) => props.theme.font2};
  color: ${(props) => props.theme.green};
  font-weight: 900;
`;

export const Date = styled(motion.span)`
  font-size: ${(props) => props.theme.font1};
`;

export const Group = styled(motion.span)`
  font-size: ${(props) => props.theme.font1};
  color: ${(props) => props.theme.gold};
`;

export const Title = styled(motion.span)`
  font-size: ${(props) => props.theme.font3};
  font-weight: 900;
  color: ${(props) => props.theme.black};
`;

export const EventDetails = styled(motion.div)`
  display: grid;
  grid-template-columns: 220px 220px;
  grid-template-rows: 1fr 1fr;
    @media (max-width: 800px) {
      grid-template-columns: 140px 140px;
    }
   svg {
    width: 50px;
  }
 
`;

export const EventCard = styled(motion.div)`
  position: relative;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border-radius: 26px;
  border: 2px solid ${(props) => props.theme.blue};
  padding: 2rem;
  line-height: 1.5;
  margin-right: 2rem;
  background-image: radial-gradient(circle at 52% 84%, rgba(194, 194, 194,0.06) 0%, rgba(194, 194, 194,0.06) 18%,transparent 18%, transparent 100%),radial-gradient(circle at 38% 97%, rgba(239, 239, 239,0.06) 0%, rgba(239, 239, 239,0.06) 20%,transparent 20%, transparent 100%),radial-gradient(circle at 86% 17%, rgba(210, 210, 210,0.06) 0%, rgba(210, 210, 210,0.06) 61%,transparent 61%, transparent 100%),radial-gradient(circle at 6% 48%, rgba(91, 91, 91,0.06) 0%, rgba(91, 91, 91,0.06) 27%,transparent 27%, transparent 100%),radial-gradient(circle at 27% 63%, rgba(86, 86, 86,0.06) 0%, rgba(86, 86, 86,0.06) 30%,transparent 30%, transparent 100%),radial-gradient(circle at 2% 91%, rgba(182, 182, 182,0.06) 0%, rgba(182, 182, 182,0.06) 29%,transparent 29%, transparent 100%),linear-gradient(90deg, rgb(225,244,218),rgb(255,255,255));
  @media (max-width: 450px) {
    transform: scale(0.8);
  }

  @media (max-width: 800px) {
      margin-right: 0;
      padding: 1rem;
    }

  p {
    text-align: justify;
  }
`;

export const EventTitle = styled(motion.div)`
  padding: 0 0 1rem 0;
  h1 {
    margin-left: 1rem;
    transform: skew(-17deg);
    color: ${(props) => props.theme.green};
  }
`;


export const Detail = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;
  svg {
    width: 50px;
    height: 40px;
  }
  h5 {
    color: ${(props) => props.theme.green};
  }
`;


export const RegisterForm = styled(motion.form)`
  position: relative;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border-radius: 26px;
  border: 2px solid ${(props) => props.theme.blue};
  background-image: radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgb(204,226,212) 0%, rgb(204,226,212) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgb(190,230,202) 0%, rgb(190,230,202) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgb(190,230,202) 0%, rgb(190,230,202) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgb(223,242,229) 0%, rgb(223,242,229) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  padding: 2rem;
  line-height: 1.5;

  label {
    display: flex;
    margin: 2rem 1rem;
    @media (max-width: 330px) {
      margin: 2rem 1rem;
    }
    svg {
      margin-right: 0.8rem;
    }
    span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }

  input,
  textarea,
  select {
    width: 250px;
    border-radius: 12px;
    /* border: 10px solid ${(props) => props.theme.green}; */
    background-color: ${(props) => props.theme.light_green};
    padding: 0.5rem;
    margin: 0.3rem;
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid black;

    @media (max-width: 700px) {
      width: 200px;
    }

    @media (max-width: 300px) {
      width: 200px;
    }

    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
  }

  .input-error {
    background-color: ${(props) => props.theme.red};
  }

  button {
    width: 129px;
    height: 47px;
    background: ${(props) => props.theme.green};
    border: 3px solid #6CC30D;
    border-radius: 13px;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.font2};
    font-weight: 700;
  }

  ul {
    padding: 1rem;
     h4 {
       font-size: ${(props) => props.theme.font3}
     }
  }

  li {
    margin: 1.3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 26px;
    a {
      color: ${(props) => props.theme.brown}; 
      font-weight: 500;
      font-size: ${(props) => props.theme.font2}
    }
  }

  ${(props) =>
    props.form &&
    css`
      div {
        padding: 0 0.5rem;
      }
      padding: 0.5rem;
      line-height: 0.5;
      label {
        padding: 0 1rem;
        margin: 0.5rem 0;
      }
      input,
      textarea,
      select {
        margin: 0.5rem 1rem;
      }
      button {
        margin-left: 1.5rem;
      }
      @media (max-width: 600px) {
        transform: scale(0.8);
      }
    `};
  
   ${(props) =>
    props.contact &&
    css`
      padding: 1.5rem;
      border: 2px solid ${(props) => props.theme.gold};
      background-image: linear-gradient(216deg, rgba(77, 77, 77,0.05) 0%, rgba(77, 77, 77,0.05) 25%,rgba(42, 42, 42,0.05) 25%, rgba(42, 42, 42,0.05) 38%,rgba(223, 223, 223,0.05) 38%, rgba(223, 223, 223,0.05) 75%,rgba(36, 36, 36,0.05) 75%, rgba(36, 36, 36,0.05) 100%),linear-gradient(44deg, rgba(128, 128, 128,0.05) 0%, rgba(128, 128, 128,0.05) 34%,rgba(212, 212, 212,0.05) 34%, rgba(212, 212, 212,0.05) 57%,rgba(25, 25, 25,0.05) 57%, rgba(25, 25, 25,0.05) 89%,rgba(135, 135, 135,0.05) 89%, rgba(135, 135, 135,0.05) 100%),linear-gradient(241deg, rgba(55, 55, 55,0.05) 0%, rgba(55, 55, 55,0.05) 14%,rgba(209, 209, 209,0.05) 14%, rgba(209, 209, 209,0.05) 60%,rgb(63,27,17) 60%, rgb(63,27,17) 69%,rgb(63,27,17) 69%, rgb(63,27,17) 100%),linear-gradient(249deg, rgb(63,27,17) 0%, rgb(63,27,17) 32%,rgb(63,27,17) 32%, rgb(63,27,17) 35%,rgb(63,27,17) 35%, rgb(63,27,17) 51%,rgb(63,27,17) 51%, rgb(63,27,17) 100%),linear-gradient(92deg, hsl(214,0%,11%),hsl(214,0%,11%));
      margin-right: 5rem;

      label {
        color: ${(props) => props.theme.gold};
        font-weight: 700;
      }

      input,
      textarea,
      select {
        background-image: linear-gradient(90deg, rgba(165, 165, 165, 0.03) 0%, rgba(165, 165, 165, 0.03) 8%,rgba(235, 235, 235, 0.03) 8%, rgba(235, 235, 235, 0.03) 9%,rgba(7, 7, 7, 0.03) 9%, rgba(7, 7, 7, 0.03) 14%,rgba(158,18,18, 0.03) 14%, rgba(158,18,18, 0.03) 17%,rgba(125,37,37, 0.03) 17%, rgba(125,37,37, 0.03) 95%,rgba(131,56,56, 0.03) 95%, rgba(131,56,56, 0.03) 100%),linear-gradient(67.5deg, rgba(59,24,24, 0.03) 0%, rgba(59,24,24, 0.03) 11%,rgba(28,26,26, 0.03) 11%, rgba(28,26,26, 0.03) 17%,rgba(170,95,95, 0.03) 17%, rgba(170,95,95, 0.03) 24%,rgba(117,70,70, 0.03) 24%, rgba(117,70,70, 0.03) 27%,rgba(164,149,149, 0.03) 27%, rgba(164,149,149, 0.03) 89%,rgba(174,142,142, 0.03) 89%, rgba(174,142,142, 0.03) 100%),linear-gradient(67.5deg, rgba(119,75,75, 0.03) 0%, rgba(119,75,75, 0.03) 4%,rgba(125,76,76, 0.03) 4%, rgba(125,76,76, 0.03) 10%,rgba(164,103,103, 0.03) 10%, rgba(164,103,103, 0.03) 20%,rgba(158,18,18, 0.03) 20%, rgba(158,18,18, 0.03) 83%,rgba(156,106,106, 0.03) 83%, rgba(156,106,106, 0.03) 84%,rgba(162,135,135, 0.03) 84%, rgba(162,135,135, 0.03) 100%),linear-gradient(90deg, rgb(248,244,244),rgb(248,244,244));
        border: 2px solid ${(props) => props.theme.gold};
      }

      button {
        color: #6CC30D;
        letter-spacing: 1px;
        font-size: ${(props) => props.theme.font3};
        background-color: ${(props) => props.theme.gold_transparent};
      }
      
    `};

  @media (max-width: 1200px) {
    /* margin-top: 10%; */
    padding: 1rem;
    margin: 4rem 0 0 0;
  }

  @media (max-width: 450px) {
    transform: scale(0.8);
  }

  .email-form {
    position: absolute;
    top: -25%;
    right: 20%;

    @media (max-width: 1200px) {
      transform: scale(0.7);
    }
  }

  .leafs-form {
    position: absolute;
    bottom: -5%;
    right: -50%;
    @media (max-width: 1400px) {
      display: none;
    }
  }

  .leaf {
    position: absolute;
    width: 200px;
    height: 500px;
    left: -40%;
    top: 0;
    @media (max-width: 400px) {
      width: 50px;
      height: 200px;
      left: -5%;
      top: -10%;
    }
  }

  .pen {
    position: absolute;
    right: -15%;
    top: 10%;
    width: 150px;
    height: 170px;
    @media (min-width: 601px) and (max-width: 1200px) {
      right: -13%;
      top: 10%;
      width: 140px;
      height: 160px;
    }
    @media (max-width: 600px) {
      right: -12%;
      top: 10%;
      width: 120px;
      height: 140px;
    }
  }

`;

export const Confirm = styled(motion.div)`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    margin-left: 1rem;
  }
  div {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    color: ${(props) => props.theme.green};
    font-size: ${(props) => props.theme.font2};
    font-weight: 700;
    @media (max-width: 700px) {
      margin-right: 2rem;
    }
  }
`;

export const FormFooter = styled(motion.div)`
  margin-top: 12%;
   @media (min-width: 801px) and (max-width: 1000px) {
    margin-top: -5%;
  }
   @media (min-width: 601px) and (max-width: 800px) {
    margin-top: -20%;
  }
   @media (min-width: 401px) and (max-width: 600px) {
    margin-top: -30%;
  }
  @media (max-width: 400px) {
    margin-top: -42%;
  }
`;
