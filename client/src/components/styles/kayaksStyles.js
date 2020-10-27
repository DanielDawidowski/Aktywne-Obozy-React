import styled, { css } from "styled-components";

import { motion } from "framer-motion";

export const KayaksPage = styled(motion.div)`
  overflow: hidden;
  height: 100vh;
  background-image: linear-gradient(
    361deg,
    rgb(113, 245, 91),
    rgb(18, 194, 197)
  );
  @media (max-width: 800px) {
    height: 135vh;
  }

  @media (max-width: 800px) {
    height: 135vh;
  }

  @media (max-width: 400px) {
    height: 145vh;
  }
`;

export const River = styled(motion.div)`
  position: relative;
  max-width: 100%;
  height: 40vh;
  background-color: ${(props) => props.theme.light_green};
  @media (max-width: 800px) {
    height: 15vh;
  }
`;

export const KayakInfo = styled(motion.div)`
  position: relative;
  max-width: 100%;
  height: 80vh;
  background-color: ${(props) => props.theme.light_green};
  @media (min-width: 801px) and (max-width: 1200px) {
    height: 155vh;
  }
  @media (min-width: 381px) and (max-width: 800px) {
    height: 125vh;
  }
  @media (min-width: 181px) and (max-width: 380px) {
    height: 145vh;
  }
`;

export const KayakFooter = styled(motion.div)`
  margin-top: 12%;
  @media (max-width: 1200px) {
    margin-top: -10%;
  }
  @media (max-width: 800px) {
    margin-top: -20%;
  }
  @media (max-width: 600px) {
    margin-top: -30%;
  }
  @media (min-width: 200px) and (max-width: 400px) {
    margin-top: -40%;
  }
`;
