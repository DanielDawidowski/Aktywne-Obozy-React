import React from "react";
import styled from "styled-components";

const CornerLeafs = styled.svg`
  position: absolute;
  top: -5%;
  right: -5%;
  width: 179px;
  height: 249px;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const CornerLeafsIcon = () => (
  <CornerLeafs
    width="279"
    height="349"
    viewBox="0 0 279 349"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M110.08 104.993L88.5609 123.668C76.3375 119.584 64.3219 114.703 52.5711 109.048L59.5386 97.5147L48.5206 107.077C34.0502 99.916 24.8574 94.1102 24.8574 94.1102C24.8574 94.1102 68.903 56.5865 116.973 41.4427L147.123 60.892L129.009 38.1675C134.636 36.8678 140.328 35.9806 146.051 35.5109C203.766 30.9992 251.831 49.2359 253.409 76.2437C254.986 103.252 209.477 128.803 151.762 133.315C133.87 134.714 114.876 131.475 97.1819 126.343L110.08 104.993Z"
      fill="#3D9D2E"
    />
    <path
      d="M96.0688 188.937L61.5512 197.008C54.3049 214.414 47.9109 232.281 42.3998 250.524L58.1913 252.7L40.5182 256.832C33.8966 279.468 30.7475 294.945 30.7475 294.945C30.7475 294.945 100.808 277.815 155.557 236.596L165.542 185.478L168.831 225.824C174.841 220.586 180.562 214.915 185.958 208.844C240.191 147.423 266.854 77.0752 245.511 51.7179C224.167 26.3605 162.901 55.5959 108.668 117.017C91.8549 136.058 77.9805 160.393 66.8346 184.91L96.0688 188.937Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="42.9378"
        y1="306.898"
        x2="269.877"
        y2="75.4522"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.03125" stop-color="#3FFB22" stop-opacity="0.77" />
        <stop offset="0.807292" stop-color="#1D7210" />
      </linearGradient>
    </defs>
  </CornerLeafs>
);
export default CornerLeafsIcon;
