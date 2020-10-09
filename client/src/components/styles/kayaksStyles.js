import styled, { css } from "styled-components";

import { motion } from "framer-motion";

export const KayaksPage = styled(motion.div)`
  overflow: hidden;
  height: 100vh;
  background-color: ${(props) => props.theme.light_green};
  @media (max-width: 400px) {
    height: 155vh;
  }
`;

export const River = styled(motion.div)`
  position: relative;
  max-width: 100%;
  height: 40vh;
  background-color: ${(props) => props.theme.light_green};
  @media (max-width: 400px) {
    height: 15vh;
  }
`;

export const KayakInfo = styled(motion.div)`
  position: relative;
  max-width: 100%;
  height: 80vh;
  background-color: ${(props) => props.theme.light_green};
  @media (max-width: 600px) {
    height: 145vh;
  }
`;

export const KayakFooter = styled(motion.div)`
  margin-top: 12%;
  @media (max-width: 400px) {
    margin-top: -42%;
  }
`;
