import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuth } from "../auth";
import { MenuNav, MenuNavItem } from "./styles/menuStyles";
import KayakIcon from "../assets/SVG/kayakMan";
import MountainIcon from "../assets/SVG/mountainFooter";
import EnvelopeIcon from "../assets/SVG/envelope";
import { ReactComponent as Gears } from "../assets/SVG/gears.svg";
import { ReactComponent as Logout } from "../assets/SVG/logout.svg";

// import { Menu } from "./styles/menuStyles";

const isActive = (history, path) =>
  history.location.pathname === path
    ? { color: "#F21B3F" }
    : { color: "#ffffff" };

const Menu = ({ history, toggleMenu, setToggleMenu }) => {
  return (
    <MenuNav>
      <>
        <MenuNavItem>
          <MountainIcon mainColor={"black"} secondColor={"white"} />
          <Link style={isActive(history, "/mountains")} to="/mountains">
            Wyjazdy w Góry
          </Link>
        </MenuNavItem>
        <MenuNavItem>
          <KayakIcon
            mainColor={"black"}
            secondColor={"white"}
            width={"67px"}
            height={"50px"}
          />
          <Link style={isActive(history, "/kayaks")} to="/kayaks">
            Spływy Kajakowe
          </Link>
        </MenuNavItem>
        <MenuNavItem>
          <EnvelopeIcon mainColor={"black"} secondColor={"white"} />
          <Link style={isActive(history, "/contact")} to="/contact">
            Napisz do Nas
          </Link>
        </MenuNavItem>
        {/* <li>
            <Link style={isActive(history, "/signin")} to="/signin">
              Signin
            </Link>
          </li>
          <li>
            <Link style={isActive(history, "/signup")} to="/signup">
              Signup
            </Link>
          </li> */}
      </>

      {isAuth() && (
        <>
          {isAuth() && isAuth().user.role === 0 && (
            <MenuNavItem>
              <Link
                style={isActive(history, "/user/dashboard")}
                to="/user/dashboard"
              >
                Dashboard
              </Link>
            </MenuNavItem>
          )}
          {isAuth() && isAuth().user.role === 1 && (
            <MenuNavItem>
              <Gears />
              <Link
                style={isActive(history, "/admin/dashboard")}
                to="/admin/dashboard"
              >
                Zarządzaj
              </Link>
            </MenuNavItem>
          )}
          <MenuNavItem>
            <Logout />
            <span
              style={{ cursor: "pointer", color: "##EDEDED" }}
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Wyloguj
            </span>
          </MenuNavItem>
        </>
      )}
    </MenuNav>
  );
};

export default withRouter(Menu);
