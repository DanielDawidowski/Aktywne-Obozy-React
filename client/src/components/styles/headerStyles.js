import styled from "styled-components";
import { motion } from "framer-motion";

export const Logo = styled.h1`
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  @media (max-width: 1300px) {
    text-align: center;
  }
  .link {
    color: ${(props) => props.theme.gold_transparent};
  }
`;

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  z-index: 9999;
`;

export const HamburgerMenu = styled.div`
  button {
    border: none;
    background: none;
    outline: none;
    width: 60px;
    height: 60px;
    z-index: 100;
    /* margin-right: -1rem; */
    cursor: pointer;
    span {
      width: 40px;
      height: 8px;
      display: block;
      background: ${(props) => props.theme.white};
      border-radius: 13px;
      margin: 8px;
    }
  }
`;
