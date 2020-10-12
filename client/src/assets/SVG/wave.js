import React from "react";
import styled from "styled-components";

const Wave = styled.svg`
  /* @media (max-width: 400px) {
    margin-top: 148%;
  } */
  @media (min-width: 401px) and (max-width: 800px) {
    margin-top: 18%;
  }
`;

const WaveGreen = ({ background, opacity, style }) => (
  <Wave
    style={style}
    viewBox="0 0 1445 454"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M42.3296 454H0V232.974H42.3296C50.8573 232.974 59.8476 232.989 69.2346 233.003C188.445 233.184 388.04 233.489 481.392 202.921C518.301 190.838 536.249 174.857 536.249 154.066C536.249 119.609 574.436 90.1426 649.763 66.4853C710.283 47.4776 795.273 32.2642 902.353 21.2691C1073.56 3.6892 1268.43 0 1401.77 0H1444.1V80.771H1401.77C1234.73 80.771 1129.24 91.0631 1070.15 99.6954C957.771 116.116 903.146 141.628 903.146 177.694C903.146 187.7 909.492 200.728 916.841 215.811C939.89 263.1 971.455 327.871 839.354 378.839C708.289 429.415 447.568 454 42.3296 454Z"
        fill={background}
        fill-opacity={opacity}
      />
    </g>
  </Wave>
);

export default WaveGreen;
