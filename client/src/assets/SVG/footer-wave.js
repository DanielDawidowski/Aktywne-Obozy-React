import React from "react";
import styled from "styled-components";

const Wave = styled.svg`
  margin-top: -20%;
  @media (max-width: 380px) {
    height: 60%;
  }
`;

const WaveFooter = () => (
  <Wave viewBox="0 0 1440 503" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 0L60 42.159C120 84.3179 240 168.636 360 199.165C480 231.147 600 209.341 720 199.165C840 188.988 960 188.988 1080 199.165C1200 209.341 1320 231.147 1380 241.324L1440 251.5V503H1380C1320 503 1200 503 1080 503C960 503 840 503 720 503C600 503 480 503 360 503C240 503 120 503 60 503H0V0Z"
      fill="#6CC30D"
    />
  </Wave>
);

export default WaveFooter;
