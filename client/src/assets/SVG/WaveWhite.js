import React from "react";
import styled from "styled-components";

const Wave = styled.svg`
  margin-top: -5%;
  fill: ${(props) => props.theme.white};
`;

const WaveWhite = () => (
  <Wave viewBox="0 0 1440 220" fill="none">
    <path d="M-283 55.3179L-202.5 50.8671C-122 45.7803 39 36.8786 200 36.8786C361 36.8786 522 45.7803 683 45.7803C844 45.7803 1005 36.8786 1166 27.9769C1327 18.4393 1488 9.53757 1568.5 5.08671L1649 0V220H1568.5C1488 220 1327 220 1166 220C1005 220 844 220 683 220C522 220 361 220 200 220C39 220 -122 220 -202.5 220H-283V55.3179Z" />
  </Wave>
);

export default WaveWhite;
