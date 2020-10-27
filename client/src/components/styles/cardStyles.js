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

  @media (max-width: 400px) {
    transform: scale(0.8);
  }

  @media (max-width: 320px) {
    /* transform: scale(0.7); */
    margin: 0.4rem;
  }

  @media (max-width: 361px) and (max-width: 800px) {
    margin: 0.6rem;
    width: 329px;
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
      @media (max-width: 800px) {
        margin-top: 1rem;
      }
      @media (min-width: 801px) and (max-width: 1200px) {
        margin-top: 4rem;
      }
    `};
  ${(props) =>
    props.green &&
    css`
      background: linear-gradient(
        203.69deg,
        #71f55b 1.84%,
        rgba(163, 239, 255, 0.78) 98.2%
      );
      /* @media (min-width: 1201px) {
        margin-top: 8rem;
      } */
      @media (max-width: 800px) {
        margin-top: 4rem;
      }
      @media (min-width: 801px) and (max-width: 1200px) {
        margin-top: 7rem;
      }
    `};
  ${(props) =>
    props.white &&
    css`
      background-image: radial-gradient(
          circle at 62% 39%,
          rgb(196, 228, 184) 0%,
          rgb(196, 228, 184) 8%,
          transparent 8%,
          transparent 16%,
          transparent 16%,
          transparent 28%,
          transparent 28%,
          transparent 100%
        ),
        radial-gradient(
          circle at 19% 61%,
          rgba(201, 201, 201, 0.01) 0%,
          rgba(201, 201, 201, 0.01) 59%,
          transparent 59%,
          transparent 60%,
          transparent 60%,
          transparent 99%,
          transparent 99%,
          transparent 100%
        ),
        radial-gradient(
          circle at 15% 5%,
          rgb(200, 234, 189) 0%,
          rgb(200, 234, 189) 9%,
          transparent 9%,
          transparent 79%,
          transparent 79%,
          transparent 92%,
          transparent 92%,
          transparent 100%
        ),
        radial-gradient(
          circle at 64% 49%,
          rgba(51, 51, 51, 0.08) 0%,
          rgba(51, 51, 51, 0.08) 22%,
          transparent 22%,
          transparent 50%,
          transparent 50%,
          transparent 96%,
          transparent 96%,
          transparent 100%
        ),
        radial-gradient(
          circle at 53% 21%,
          rgba(215, 236, 207, 0.39) 0%,
          rgba(215, 236, 207, 0.39) 21%,
          transparent 21%,
          transparent 80%,
          transparent 80%,
          transparent 89%,
          transparent 89%,
          transparent 100%
        ),
        radial-gradient(
          circle at 14% 91%,
          rgb(230, 242, 226) 0%,
          rgb(230, 242, 226) 35%,
          transparent 35%,
          transparent 63%,
          transparent 63%,
          transparent 71%,
          transparent 71%,
          transparent 100%
        ),
        radial-gradient(
          circle at 42% 78%,
          rgb(239, 246, 236) 0%,
          rgb(239, 246, 236) 56%,
          transparent 56%,
          transparent 75%,
          transparent 75%,
          transparent 80%,
          transparent 80%,
          transparent 100%
        ),
        radial-gradient(
          circle at 76% 85%,
          rgb(235, 251, 227) 0%,
          rgb(235, 251, 227) 53%,
          transparent 53%,
          transparent 68%,
          transparent 68%,
          transparent 97%,
          transparent 97%,
          transparent 100%
        ),
        linear-gradient(330deg, rgb(235, 251, 227), rgb(235, 251, 227));
      padding: 1rem;
      width: 360px;
      @media (max-width: 801px) and (max-width: 1200px) {
        width: 350px;
      }
      @media (min-width: 250px) and (max-width: 800px) {
        width: 270px;
      }
    `};
`;

export const CardIcon = styled(motion.div)`
  position: absolute;
  left: 30%;
  width: 168px;
  height: 168px;
  border: 3px solid ${(props) => props.theme.light_green};
  background: ${(props) => props.theme.white};
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.blue &&
    css`
      top: -18%;
      border: 3px solid ${(props) => props.theme.light_green};
      @media (max-width: 800px) {
        width: 108px;
        height: 108px;
        top: -10%;
        left: 35%;
      }
    `};

  ${(props) =>
    props.green &&
    css`
      top: -25%;
      border: 3px solid ${(props) => props.theme.light_blue};
      @media (max-width: 800px) {
        width: 108px;
        height: 108px;
        top: -10%;
        left: 35%;
      }
    `};

  ${(props) =>
    props.noBorder &&
    css`
      top: 0;
      left: 55%;
      border: none;
      background: transparent;
      @media (max-width: 800px) {
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
  @media (max-width: 800px) {
    width: 57px;
    height: 57px;
  }
  ${(props) =>
    props.mountain &&
    css`
      width: 67px;
      height: 67px;
      background: ${(props) => props.theme.gold_transparent};
      /* @media (max-width: 800px) {
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
      @media (max-width: 800px) {
        width: 47px;
        height: 47px;
      }
    `};
`;

export const CardDetails = styled(motion.div)`
  padding-top: 0.5rem;
  display: grid;
  & > * {
    justify-content: center;
  }

  & > span {
    margin-right: 0.4rem;
  }
  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.4rem;
    width: 100%;
    color: ${(props) => props.theme.brown};
    @media (max-width: 800px) {
      font-size: ${(props) => props.theme.font2};
    }
    svg {
      margin-right: 0.5rem;
    }
  }
  span:last-child {
    color: ${(props) => props.theme.gold};
  }

  ${(props) =>
    props.green &&
    css`
      background: ${(props) => props.theme.light_green};
      border: 3px solid ${(props) => props.theme.light_green};
      justify-content: center;
      /* @media (max-width: 380px) {
        flex-direction: column;
      } */
    `};
`;

export const CardListItem = styled(motion.li)`
  display: flex;
  background: ${(props) => props.theme.dark_blue};
  /* border: 3px solid ${(props) => props.theme.blue}; */
  border-radius: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 0.4rem 1rem;

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
      justify-content: center;
      /* @media (max-width: 380px) {
        flex-direction: column;
      } */
    `};

  ${(props) =>
    props.blue &&
    css`
      background: ${(props) => props.theme.light_blue};
      border: 3px solid ${(props) => props.theme.light_blue};
      justify-content: space-around;
    `};

  ${(props) =>
    props.right &&
    css`
      border: 3px solid ${(props) => props.theme.green};
      /* width: 389px;
      @media (max-width: 580px) {
        max-width: 289px;
      } */
    `};

  ${(props) =>
    props.displayNone &&
    css`
      display: none;
    `};
`;

export const CardList = styled(motion.ul)`
  display: grid;

  & > ${CardListItem} {
    margin-bottom: 1rem;
  }
  /* ${(props) =>
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
    `} */
  ${(props) =>
    props.home &&
    css`
      padding-top: 6rem;
    `}
`;

export const CardListTitle = styled(motion.div)`
  font-size: ${(props) => props.theme.font2};
  color: ${(props) => props.theme.black};
  font-weight: 800;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;

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
    font-size: ${(props) => props.theme.font2};
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
  @media (max-width: 800px) {
    font-size: ${(props) => props.theme.font2};
  }
  @media (max-width: 380px) {
    margin: 2rem;
  }
  ${(props) =>
    props.white &&
    css`
      margin-bottom: 6rem;
      border: 3px solid ${(props) => props.theme.white};
      text-align: left;
    `}
`;
