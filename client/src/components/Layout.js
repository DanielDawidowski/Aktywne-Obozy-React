import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  red: "#F21B3F",
  light_red: "#F1AAB2",
  white: "#ffffff",
  black: "#000000",
  grey: "#CCC3C3",
  gold: "#FF9900",
  gold_transparent: "rgba(247, 127, 0, 0.65)",
  blue: "#0075FF",
  light_blue: "#A3EFFF",
  dark_blue: "#00CFFB",
  green: "#359325",
  light_green: "#71F55B",
  green_transparent: "rgba(128, 252, 30, 0.22)",
  brown: "#A44F3E",
  light_brown: "#D07230",
  dark_brown: "#6D3326",
  light_grey: "#E5E5E5",
  offWhite: "#EDEDED",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  font1: "0.4rem",
  font2: "1rem",
  font3: "1.4rem",
  font4: "3.2rem",
  font5: "2.4rem",
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  }
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; 
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${(props) => props.theme.lightgreen};
  overscroll-behavior: none;
  overflow-x: hidden;
  color: ${(props) => props.theme.brown};
}

a {
  text-decoration: none
}
  a:focus {
    outline: none;
  }

ul {
  list-style: none
}

li {
  list-style-type: none
}

img {
    max-width: 100%;
}
`;

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Container> */}
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main>{children}</main>
      {/* </Container> */}
    </ThemeProvider>
  );
};

export default Layout;
