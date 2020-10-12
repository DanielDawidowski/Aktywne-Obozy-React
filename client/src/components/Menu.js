import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuth } from "../auth";
import { MenuNav, MenuNavItem } from "./styles/menuStyles";
import KayakIcon from "../assets/SVG/kayakMan";
import MountainIcon from "../assets/SVG/mountainFooter";
import EnvelopeIcon from "../assets/SVG/envelope";

// import { Menu } from "./styles/menuStyles";

const isActive = (history, path) =>
  history.location.pathname === path
    ? { color: "#F21B3F" }
    : { color: "#ffffff" };

const Menu = ({ history, toggleMenu, setToggleMenu }) => {
  return (
    <MenuNav>
      {!isAuth() && (
        <>
          <MenuNavItem>
            <MountainIcon mainColor={"#333333"} secondColor={"#ffffff"} />
            <Link style={isActive(history, "/mountains")} to="/mountains">
              Wyjazdy w Góry
            </Link>
          </MenuNavItem>
          <MenuNavItem>
            <KayakIcon
              mainColor={"#333333"}
              secondColor={"#ffffff"}
              width={"67px"}
              height={"50px"}
            />
            <Link style={isActive(history, "/kayaks")} to="/kayaks">
              Spływy Kajakowe
            </Link>
          </MenuNavItem>
          <MenuNavItem>
            <EnvelopeIcon mainColor={"#333333"} secondColor={"#ffffff"} />
            <Link style={isActive(history, "/form")} to="/form">
              Zapisz się
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
      )}
      {isAuth() && (
        <>
          {isAuth() && isAuth().user.role === 0 && (
            <li>
              <Link
                style={isActive(history, "/user/dashboard")}
                to="/user/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}
          {isAuth() && isAuth().user.role === 1 && (
            <li>
              <Link
                style={isActive(history, "/admin/dashboard")}
                to="/admin/dashboard"
              >
                Admin Dashboard
              </Link>
            </li>
          )}
          <li>
            <span
              style={{ cursor: "pointer", color: "##EDEDED" }}
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        </>
      )}
    </MenuNav>
  );
};

export default withRouter(Menu);
