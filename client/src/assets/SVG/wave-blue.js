import React from "react";
import styled from "styled-components";

const Wave = styled.svg`
  margin-top: -15%;
  margin-bottom: -1%;

  @media (max-width: 350px) {
    margin-top: -25%;
    margin-bottom: -2%;
  }
`;

const WaveBlue = () => (
  <Wave viewBox="0 0 1424 164" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 23.5446L47.4667 47.0891C94.9333 70.6337 189.867 116.911 284.8 111.228C379.733 105.545 474.667 47.0891 569.6 35.7228C664.533 23.5446 759.467 58.4554 854.4 52.7723C949.333 47.0891 1044.27 0 1139.2 0C1234.13 0 1329.07 47.0891 1376.53 70.6337L1424 94.1782V164H1376.53C1329.07 164 1234.13 164 1139.2 164C1044.27 164 949.333 164 854.4 164C759.467 164 664.533 164 569.6 164C474.667 164 379.733 164 284.8 164C189.867 164 94.9333 164 47.4667 164H0V23.5446Z"
      fill="#A3EFFF"
    />
  </Wave>
);

export default WaveBlue;
