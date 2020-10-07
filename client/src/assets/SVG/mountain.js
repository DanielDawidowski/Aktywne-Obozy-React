import React from "react";
import styled from "styled-components";

const Mountain = styled.svg`
  width: 97px;
  height: 97px;
  @media (max-width: 380px) {
    width: 68px;
    height: 65px;
  }
`;
const MountainIcon = () => (
  <Mountain viewBox="0 0 104 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M49.4104 4.23144L48.9835 3.26395L48.4954 2.10335C47.2757 -0.701116 44.5925 -0.701116 43.3728 2.10335L30.017 34.0199L23.9796 21.2536C22.7599 18.6419 20.3203 18.6419 19.1006 21.2536L0.601682 60.2627C-0.0691574 61.7131 -0.191128 63.6474 0.296755 65.2916C0.845624 66.9361 1.88238 68 3.0411 68H76L49.4104 4.23144Z"
      fill="#A44F3E"
    />
    <path d="M64 68H38V26.4935L38.4108 27.1138L64 68Z" fill="#6D3326" />
    <path
      d="M103.627 66.4106C103.075 67.3885 102.032 68 100.927 68H75.7534L55.6974 46.9305L49 27.6937L61.3336 9.23168C62.4994 7.52019 65.3219 7.52019 66.4877 9.23168L103.443 63.2315C104.118 64.2098 104.18 65.3713 103.627 66.4106Z"
      fill="#6D3326"
    />
  </Mountain>
);
export default MountainIcon;
