import React from "react";
import styled from "styled-components";

const Cloud = styled.svg`
  position: absolute;
  top: 8%;
  right: 20%;
  width: 304px;
  height: 198px;
  @media (max-width: 1400px) {
    display: none;
  }
`;
const CloudIcon = () => (
  <Cloud viewBox="0 0 304 198" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M143.156 0.0451583C208.629 -1.01102 279.515 16.366 299.377 62.0464C318.983 107.138 273.145 149.691 219.885 176.509C171.527 200.858 108.812 206.892 60.8077 182.172C10.5762 156.304 -12.5173 109.447 6.78078 66.7665C25.775 24.7579 82.7217 1.02007 143.156 0.0451583Z"
      fill="#24B6D7"
      fill-opacity="0.47"
    />
  </Cloud>
);
export default CloudIcon;
