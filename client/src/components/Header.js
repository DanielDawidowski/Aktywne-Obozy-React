import React, { useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "./Menu";
// Styled Components
import { NavList } from "./styles/navigationStyles";
import { Flex, Container } from "./styles/globalStyles";
import { HeaderNav, HamburgerMenu, Logo } from "./styles/headerStyles";
import { ReactComponent as LogoSVG } from "../assets/SVG/AO-LOGO-white.svg";

const Header = ({ toggleMenu, setToggleMenu }) => {
  const hamburger = useRef(null);
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container header>
        <Flex spaceBetween paddingTop>
          <Logo>
            <Link className="link" to="/">
              <LogoSVG />
            </Link>
          </Logo>
          <HamburgerMenu
            onClick={() => setToggleMenu(!toggleMenu)}
            ref={hamburger}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </HamburgerMenu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default withRouter(Header);
