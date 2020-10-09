import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const FormPage = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.red};

  @media (max-width: 700px) {
    height: 150vh;
  }
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
  display: flex;
  /* justify-content: center;
  align-items: center;*/
  flex-direction: column;
  & > span {
    padding: 0.2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const RegisterForm = styled(motion.form)`
  position: relative;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border-radius: 26px;
  border: 2px solid ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.white};
  padding: 2rem;
  line-height: 1.5;

  @media (max-width: 700px) {
    /* margin-top: 10%; */
    padding: 1rem;
    margin: 0.2rem;
  }

  .email-form {
    position: absolute;
    top: -25%;
    right: 20%;
  }

  .leafs-form {
    position: absolute;
    bottom: -5%;
    right: -50%;
    @media (max-width: 1400px) {
      display: none;
    }
  }

  label {
    display: flex;
    margin: 2rem 1rem;
    svg {
      margin-right: 0.8rem;
    }
  }

  input,
  textarea,
  select {
    width: 250px;
    border-radius: 12px;
    /* border: 1px solid ${(props) => props.theme.green}; */
    background-color: ${(props) => props.theme.light_green};
    padding: 0.5rem;
    margin: 0.3rem;
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid black;

    @media (max-width: 700px) {
      width: 200px;
    }

    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
  }
  button {
    width: 129px;
    height: 47px;
    background: ${(props) => props.theme.green};
    border: 3px solid #258478;
    border-radius: 13px;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.font2};
    font-weight: 700;
  }
`;

export const Confirm = styled(motion.div)`
  margin-left: 5rem;
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
  @media (max-width: 400px) {
    margin-top: -42%;
  }
`;
