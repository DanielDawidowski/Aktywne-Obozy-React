import React from "react";
import styled from "styled-components";

const Mountain = styled.svg`
  width: 67px;
  height: 45px;
  @media (max-width: 380px) {
    width: 38px;
    height: 43px;
  }
`;

const MountainBlueIcon = ({
  mainColor = "#ffffff",
  secondColor = "#ffffff",
}) => (
  <Mountain viewBox="0 0 67 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M66.1925 43.6884C65.8366 44.3356 65.1647 44.7402 64.4532 44.7402H48.2354L35.3147 30.7972L31 18.067L38.9457 5.84945C39.6968 4.71685 41.5151 4.71685 42.2661 5.84945L66.0739 41.5846C66.5088 42.232 66.5484 43.0007 66.1925 43.6884Z"
      fill={mainColor}
    />
    <path
      d="M31.8317 2.80022L31.5567 2.15997L31.2422 1.39192C30.4565 -0.463973 28.7279 -0.463973 27.9421 1.39192L19.3379 22.5131L15.4484 14.0649C14.6627 12.3366 13.091 12.3366 12.3052 14.0649L0.387623 39.8797C-0.0445534 40.8395 -0.123131 42.1196 0.191179 43.2077C0.544778 44.2959 1.21269 45 1.95917 45H48.9616L31.8317 2.80022Z"
      fill={mainColor}
    />
    <path d="M49 45H29L38 18L49 45Z" fill={secondColor} />
    <path d="M8 45H21V18L20.7946 18.4035L8 45Z" fill={secondColor} />
    <path d="M29 45H21V18L21.1264 18.4035L29 45Z" fill={secondColor} />
  </Mountain>
);

export default MountainBlueIcon;
