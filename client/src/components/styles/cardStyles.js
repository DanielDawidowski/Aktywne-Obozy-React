import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  position: relative;
  width: 389px;
  height: auto;
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 380px) {
    margin: 0 0.5rem 3rem 1rem;
    width: 339px;
  }

  ${(props) =>
    props.blue &&
    css`
      background: linear-gradient(
        203.51deg,
        #a3efff 7.89%,
        #a3efff 44.38%,
        rgba(113, 245, 91, 0.49) 93.92%
      );
    `};
  ${(props) =>
    props.green &&
    css`
      background: linear-gradient(
        203.69deg,
        #71f55b 1.84%,
        rgba(163, 239, 255, 0.78) 98.2%
      );
    `};
  ${(props) =>
    props.white &&
    css`
      background: ${(props) => props.theme.white};
      min-height: 550px;
      @media (max-width: 380px) {
        min-height: 450px;
      }
    `};
`;

export const CardIcon = styled(motion.div)`
  position: absolute;
  top: -18%;
  left: 28%;
  width: 168px;
  height: 168px;
  border: 3px solid ${(props) => props.theme.light_green};
  background: ${(props) => props.theme.white};
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 380px) {
    width: 108px;
    height: 108px;
    top: -10%;
    left: 32%;
  }
  ${(props) =>
    props.blue &&
    css`
      border: 3px solid ${(props) => props.theme.light_green};
      @media (max-width: 380px) {
        width: 108px;
        height: 108px;
        top: -10%;
        left: 32%;
      }
    `};
  ${(props) =>
    props.green &&
    css`
      border: 3px solid ${(props) => props.theme.light_blue};
      @media (max-width: 380px) {
        width: 108px;
        height: 108px;
        top: -10%;
        left: 32%;
      }
    `};
  ${(props) =>
    props.noBorder &&
    css`
      top: 0;
      left: 55%;
      border: none;
      background: transparent;
      @media (max-width: 380px) {
        width: 108px;
        height: 108px;
        top: 0;
        left: 58%;
      }
    `};
`;

export const CircleIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  height: 137px;

  border-radius: 50%;
  margin: 8px;
  padding: 8px;
  @media (max-width: 380px) {
    width: 57px;
    height: 57px;
  }
  ${(props) =>
    props.mountain &&
    css`
      width: 67px;
      height: 67px;
      background: ${(props) => props.theme.gold_transparent};
      /* @media (max-width: 380px) {
        display: flex;
      } */
    `}

  ${(props) =>
    props.blue &&
    css`
      background: linear-gradient(
        41.4deg,
        #23d9ff 17.47%,
        rgba(120, 232, 255, 0.333333) 66.23%,
        rgba(163, 239, 255, 0) 81.59%
      );
    `};

  ${(props) =>
    props.green &&
    css`
      background: linear-gradient(
        23.9deg,
        #6cc30d 18.8%,
        rgba(108, 195, 13, 0) 91.82%
      );
    `};

  ${(props) =>
    props.lightBlue &&
    css`
      background: ${(props) => props.theme.light_blue};
      border: 2px solid ${(props) => props.theme.light_green};
      width: 57px;
      height: 57px;
      @media (max-width: 380px) {
        width: 47px;
        height: 47px;
      }
    `};
`;

export const CardDetails = styled(motion.div)`
  display: grid;
  & > span {
    margin-right: 0.4rem;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.4rem;
    width: 100%;
    @media (max-width: 380px) {
      font-size: ${(props) => props.theme.font2};
    }
  }
  span:last-child {
    color: ${(props) => props.theme.gold};
  }
`;

export const CardListItem = styled(motion.li)`
  display: flex;
  background: ${(props) => props.theme.dark_blue};
  /* border: 3px solid ${(props) => props.theme.blue}; */
  border-radius: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  &:first-child {
    margin-top: 7rem;
  }
  h3 {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.red};
    border: 2px solid ${(props) => props.theme.blue};
    border-radius: 26px;
    padding: 6px 12px;
  }

  ${(props) =>
    props.green &&
    css`
      background: ${(props) => props.theme.light_green};
      border: 3px solid ${(props) => props.theme.light_green};
      /* @media (max-width: 380px) {
        flex-direction: column;
      } */
    `};
  ${(props) =>
    props.blue &&
    css`
      background: ${(props) => props.theme.light_blue};
      border: 3px solid ${(props) => props.theme.light_blue};
      /* @media (max-width: 380px) {
        flex-direction: column;
      } */
    `};
  ${(props) =>
    props.right &&
    css`
      border: 3px solid ${(props) => props.theme.green};
      width: 389px;
      @media (max-width: 580px) {
        max-width: 289px;
      }
    `};
`;

export const CardList = styled(motion.ul)`
  display: grid;
  & > ${CardListItem} {
    padding: 0.8rem;
    margin-bottom: 1rem;
  }
  ${(props) =>
    props.right &&
    css`
      & > ${CardListItem} {
        margin-left: -100px;
        @media (max-width: 580px) {
          margin-left: 0;
          margin-right: 0;
          padding: 10px;
        }
      }
    `}
`;

export const CardListTitle = styled(motion.div)`
  font-size: ${(props) => props.theme.font2};
  color: ${(props) => props.theme.black};
  font-weight: 800;
  text-align: right;

  & > * {
    margin-bottom: 0.4rem;
  }

  h4 {
    color: ${(props) => props.theme.green};
    font-weight: 500;
  }
  h5 {
    color: ${(props) => props.theme.black};
    font-size: ${(props) => props.theme.font3};
    font-weight: 800;
  }
  h2 {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.green};
    border: 2px solid ${(props) => props.theme.white};
    border-radius: 26px;
    padding: 6px 12px;
  }
  ${(props) =>
    props.right &&
    css`
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
    `}
`;

export const CardTitle = styled(motion.div)`
  display: flex;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  border: 3px solid ${(props) => props.theme.light_green};
  font-size: ${(props) => props.theme.font3};
  border-radius: 26px;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 380px) {
    margin: 2rem;
  }
`;
