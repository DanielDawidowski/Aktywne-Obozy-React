import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const MenuNav = styled(motion.ul)``;

export const MenuNavItem = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transform: scale(1.2);
    margin-left: 1rem;
  }
  a {
    font-size: ${(props) => props.theme.font3};
    color: #ffffff;
    transform: skew(-7deg);
    text-transform: capitalize;
    margin-left: 1rem;
  }
`;
