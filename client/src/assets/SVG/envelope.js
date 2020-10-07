import React from "react";
import styled from "styled-components";

const Envelope = styled.svg`
  width: 60px;
  height: 46px;
  @media (max-width: 380px) {
    width: 38px;
    height: 43px;
  }
`;

const EnvelopeIcon = ({ mainColor = "#ffffff", secondColor = "#ffffff" }) => (
  <Envelope viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.98547 25.0392L2.54701 23.4358L0 22.26V38.1868C0 39.6833 0.382051 41.0729 1.14615 42.3555L3.31111 41.0729L19.1026 31.2389L5.98547 25.0392Z"
      fill={mainColor}
      fill-opacity="0.85"
    />
    <path
      d="M54.6331 42.7832L37.3135 31.9872L29.7998 27.7115L22.2861 32.0941L4.96647 42.7832L2.80151 44.0659C4.58442 45.3486 7.00408 46.0968 9.42373 45.9899H50.1759C52.5955 46.0968 55.0152 45.3486 56.7981 44.0659L54.6331 42.7832Z"
      fill={mainColor}
      fill-opacity="0.85"
    />
    <path
      d="M30.5642 0.240505C30.0548 -0.0801684 29.418 -0.0801684 28.9086 0.240505L18.5933 6.86776H40.8796L30.5642 0.240505Z"
      fill={mainColor}
      fill-opacity="0.85"
    />
    <path
      d="M0.636752 18.6257C0.382051 18.8395 0.254701 19.0533 0.12735 19.2671C0 19.4809 0 19.5877 0 19.8015L2.54701 20.9773L5.22136 22.26V15.5259L0.636752 18.6257Z"
      fill={mainColor}
      fill-opacity="0.85"
    />
    <path
      d="M56.9259 23.5427L40.3704 31.2389L56.1618 40.966L58.3268 42.2487C59.0909 40.966 59.4729 39.5764 59.4729 38.0799V22.26L56.9259 23.5427Z"
      fill={mainColor}
      fill-opacity="0.85"
    />
    <path
      d="M8.02295 9.11267V23.4361L21.5221 29.8496L29.1631 25.467C29.5452 25.2532 30.1819 25.2532 30.6913 25.467L38.205 29.8496L51.7041 23.4361V9.11267H8.02295Z"
      fill={secondColor}
    />
    <path
      d="M59.4727 19.1601C59.4727 18.9463 59.218 18.7325 58.9633 18.5187L54.3787 15.5258V22.153L57.053 20.8703L59.6 19.8014C59.6 19.5876 59.4727 19.3738 59.4727 19.1601Z"
      fill={mainColor}
      fill-opacity="0.85"
    />
  </Envelope>
);

export default EnvelopeIcon;
