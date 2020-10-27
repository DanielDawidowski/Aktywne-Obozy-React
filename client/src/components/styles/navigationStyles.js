import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-image: linear-gradient(336deg, transparent 0%, transparent 9%,rgba(221, 113, 32,0.6) 9%, rgba(221, 113, 32,0.6) 22%,transparent 22%, transparent 48%,rgba(239, 148, 10,0.6) 48%, rgba(239, 148, 10,0.6) 100%),linear-gradient(246deg, transparent 0%, transparent 29%,rgb(221, 113, 32) 29%, rgb(221, 113, 32) 48%,rgb(202, 77, 53) 48%, rgb(202, 77, 53) 84%,transparent 84%, transparent 100%),linear-gradient(291deg, rgb(255,255,255),rgb(255,255,255));
  z-index: 100;
  overflow: hidden;
`;

export const NavHeader = styled.div`
  top: 48px;
  position: relative;
  h2 {
    color: ${(props) => props.theme.background};
  }
`;
export const CloseNav = styled(motion.div)`
  button {
    border: none;
    background: none;
    outline: none;
    width: 60px;
    height: 60px;
    z-index: 100;
    margin-right: -1rem;
    cursor: pointer;
    span {
      width: 40px;
      height: 12px;
      display: block;
      background: ${(props) => props.theme.black};
      border-radius: 13px;
      margin: 8px;
    }
  }
`;

export const NavList = styled.div`
  top: 148px;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  color: ${(props) => props.theme.white};

  ul {
    padding: 0;
    display: flex;
    li {
      list-style: none;
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 900;
      margin-left: 1rem;
      height: 100px;
      overflow: hidden;

      @media (min-width: 700px) {
        font-size: 1rem;
        height: 96px;
        line-height: 96px;
        display: block;
      }
    }
  }

  ${(props) =>
    props.displayBlock &&
    css`
      ul {
        flex-direction: column;
        align-items: flex-start;
      }
    `}
`;
