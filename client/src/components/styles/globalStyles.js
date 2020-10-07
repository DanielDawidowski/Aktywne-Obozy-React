import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1000px;
  }
  @media (min-width: 1408px) {
    max-width: 1200px;
  }

  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      @media (min-width: 1408px) {
        max-width: 1000px;
      }
      @media (max-width: 380px) {
        max-width: 140px;
      }
    `}
  ${(props) =>
    props.right &&
    css`
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-direction: column;
      @media (min-width: 1408px) {
        max-width: 1000px;
      }
      @media (max-width: 380px) {
        justify-content: center;
        align-items: center;
        max-width: 140px;
      }
    `}

  ${(props) =>
    props.middle &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      margin-top: -8%;
      @media (max-width: 380px) {
        margin-top: 0;
      }
    `}

     ${(props) =>
    props.marginTop &&
    css`
      margin-top: -15%;
      @media (max-width: 380px) {
      }
    `}

     ${(props) =>
    props.marginTopMin &&
    css`
      margin-top: -15%;
      @media (min-width: 1408px) {
        max-width: 600px;
      }
      @media (max-width: 380px) {
        margin-top: -18%;
        max-width: 250px;
      }
    `}

     ${(props) =>
    props.responsive &&
    css`
      @media (max-width: 380px) {
        margin-top: 158%;
      }
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
      @media (max-width: 380px) {
        justify-content: space-around;
      }
    `};

  ${(props) =>
    props.spaceAround &&
    css`
      justify-content: space-around;
      @media (max-width: 380px) {
        display: grid;
      }
    `};

  ${(props) =>
    props.center &&
    css`
      justify-content: center;
      @media (max-width: 380px) {
        display: grid;
      }
    `};

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
      align-items: center;
    `};

  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};

  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: 0.8rem;
    `};

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 7rem;
    `}

  ${(props) =>
    props.BlueBG &&
    css`
      height: 75vh;
      width: 100%;
      margin: 0 auto;
      padding-bottom: 12rem;
      background: ${(props) => props.theme.light_blue};
      @media (min-width: 2008px) {
        width: 100vw;
      }
      @media (max-width: 608px) {
        height: 150vh;
        padding-bottom: 4rem;
      }
    `}
`;

export const Grid = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 6rem;
  /* background-color: yellow; */

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

// export const Section = styled(motion.section)`
// height: 80vh;
// `;

export const MainText = styled(motion.div)`
  transform: skew(-7deg);
  color: ${(props) => props.theme.black};

  ${(props) =>
    props.white &&
    css`
      color: ${(props) => props.theme.white};
      background: transparent;
      @media (max-width: 380px) {
        margin-left: -3rem;
      }
    `};

  ${(props) =>
    props.whiteBg &&
    css`
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 32%,
        rgba(255, 255, 255, 1) 62%,
        rgba(255, 255, 255, 0.01724439775910369) 100%
      );
    `};

  ${(props) =>
    props.right &&
    css`
      position: absolute;
      top: 10%;
      left: 15%;
    `};

  h1 {
    font-size: ${(props) => props.theme.font4};
  }

  h2 {
    font-size: ${(props) => props.theme.font5};
    font-weight: 500;
  }

  h4 {
    padding-left: 1.2rem;
    font-size: ${(props) => props.theme.font3};
  }

  @media (max-width: 380px) {
    h1 {
      font-size: ${(props) => props.theme.font3};
    }
    h2 {
      font-size: ${(props) => props.theme.font3};
      font-weight: 500;
    }
    h4 {
      font-size: ${(props) => props.theme.font2};
    }
  }

  .afterline {
    position: relative;
    z-index: 1;
  }

  .afterline::after {
    position: absolute;
    z-index: -1;
    background: ${(props) => props.theme.gold};
    display: inline-block;
    content: "";
    width: 100%;
    height: 80%;
    top: 0;
    left: -12%;
    @media (max-width: 380px) {
      height: 25px;
    }
  }

  .afterline::before {
    position: absolute;
    z-index: -1;
    border: 2px solid ${(props) => props.theme.black};
    display: inline-block;
    content: "";
    width: 100%;
    height: 75%;
    top: -15%;
    left: -30%;
    @media (max-width: 380px) {
      height: 25px;
    }

    ${(props) =>
      props.white &&
      css`
        border: 2px solid ${(props) => props.theme.white};
      `};
  }
`;

// ${(props) =>
//   props.spaceBetween &&
//   css`
//     justify-content: space-between;
//   `};
