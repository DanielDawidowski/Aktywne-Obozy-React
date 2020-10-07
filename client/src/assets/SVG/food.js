import React from "react";
import styled from "styled-components";

const Food = styled.svg`
  width: 37px;
  height: 37px;
  /* @media (max-width: 380px) {
    width: 38px;
    height: 75px;
  } */
`;
const FoodIcon = () => (
  <Food viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35.879 31.3304L21.43 16.8813L4.54868 0H3.2294L2.96002 0.684507C2.24902 2.49124 1.94524 4.33914 2.08162 6.02821C2.23708 7.95355 2.96851 9.62045 4.19696 10.8489L17.3754 24.0273L19.1136 22.2891L31.297 35.9125C32.509 37.1245 34.5951 37.1965 35.879 35.9125C37.1424 34.6492 37.1424 32.5937 35.879 31.3304Z"
      fill="#805333"
      fill-opacity="0.81"
    />
    <path
      d="M11.2687 20.975L0.947413 31.2963C-0.315804 32.5595 -0.315804 34.6151 0.947413 35.8783C2.14744 37.0783 4.22342 37.1843 5.52938 35.8783L15.8507 25.5569L11.2687 20.975Z"
      fill="#805333"
      fill-opacity="0.81"
    />
    <path
      d="M35.2724 6.13539L29.4176 11.9901L27.8901 10.4628L33.745 4.60797L32.2176 3.08062L26.3629 8.93538L24.8355 7.40804L30.6903 1.55328L29.1631 0.026001L21.5263 7.66274C20.5921 8.59698 20.0342 9.83745 19.9554 11.1558C19.9354 11.4898 19.8597 11.8184 19.7341 12.1309L24.695 17.0917C25.0074 16.9659 25.3361 16.8903 25.67 16.8704C26.9883 16.7917 28.2288 16.2337 29.1631 15.2995L36.7998 7.66281L35.2724 6.13539Z"
      fill="#805333"
      fill-opacity="0.81"
    />
  </Food>
);
export default FoodIcon;