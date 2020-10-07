import React from "react";
import styled from "styled-components";

const Shadow = styled.svg`
  width: 807px;
  height: 66px;
  position: absolute;
  bottom: -12%;
  @media (max-width: 380px) {
    width: 338px;
    height: 35px;
    right: 5%;
  }
`;
const ShadowIcon = () => (
  <Shadow viewBox="0 0 807 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.1"
      d="M404.864 57.4362C627.71 45.1861 807.752 24.3178 806.998 10.822C806.246 -2.67377 624.983 -3.68444 402.136 8.56377C179.292 20.812 -0.750631 41.6822 0.00235329 55.178C0.75553 68.6738 182.019 69.6844 404.864 57.4362Z"
      fill="#090635"
    />
  </Shadow>
);
export default ShadowIcon;
