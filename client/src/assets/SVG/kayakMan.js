import React from "react";
import styled from "styled-components";

const KayakMan = styled.svg`
  @media (max-width: 600px) {
    width: 38px;
    height: 43px;
  }
`;
const KayakBlueIcon = ({
  mainColor = "#ffffff",
  secondColor = "#ffffff",
  width = "",
  height = "",
}) => (
  <KayakMan
    width={width}
    height={height}
    viewBox="0 0 67 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33 24C35.2091 24 37 22.2091 37 20C37 17.7909 35.2091 16 33 16C30.7909 16 29 17.7909 29 20C29 22.2091 30.7909 24 33 24Z"
      fill={secondColor}
    />
    <path
      d="M23.8949 40.808C23.1665 40.3492 22.4535 39.8684 21.7496 39.3844C21.3869 39.1329 21.0765 38.9192 20.7077 38.6427L20.1575 38.2373L19.5551 37.8193C17.9415 36.7193 16.1189 35.811 14.0996 35.3208C13.0915 35.0756 12.0281 34.9594 10.9585 35.0128C10.4237 35.0505 9.88888 35.1228 9.36023 35.2453C8.83773 35.3805 8.32445 35.5533 7.83884 35.7796C5.89329 36.6942 4.43644 38.407 4 40.3083C5.47529 39.1109 7.07968 38.4855 8.57648 38.3818C10.0794 38.2844 11.5056 38.6458 12.9132 39.2461C14.3209 39.8464 15.6856 40.7075 17.0441 41.6409C17.6772 42.0997 18.4671 42.678 19.2662 43.2123C20.05 43.7465 20.8644 44.2305 21.6851 44.6925C24.9738 46.5467 28.4807 47.9013 32.0613 48.8001C33.8593 49.2432 35.6696 49.5858 37.4984 49.7838C39.3241 49.9849 41.1651 50.0792 43 49.9189C39.5792 48.5927 36.2874 47.2476 33.0879 45.7579C29.8883 44.2714 26.8087 42.6497 23.8949 40.808Z"
      fill={secondColor}
    />
    <path
      d="M66.9946 20.368L59.169 17.6178L54.7945 18.1685L54.7452 18.3008L15.722 6.29099L15.7743 6.15256L12.7789 2.92246L5.0149 0C2.65676 3.23624 2.81684 5.8357 2.81684 5.8357L10.5809 8.75816L14.9647 8.30287L14.9924 8.22597L19.4039 9.58261C19.2561 10.0779 19.2992 10.6255 19.5886 11.0992C19.5917 11.1054 19.5947 11.1115 19.5947 11.1115L23.0396 24.4103L21.8913 30.3075C19.3885 29.2923 16.6948 28.5725 13.9056 28.4863C10.978 28.3725 7.9518 29.0339 5.46128 30.5351C4.22064 31.2827 3.11238 32.2025 2.18267 33.2576C1.25911 34.3097 0.486405 35.4879 0 36.7615C1.82864 34.7681 4.06364 33.3376 6.40639 32.5439C8.75529 31.7441 11.2058 31.6303 13.5855 32.021C15.9713 32.4117 18.2956 33.2638 20.5306 34.3713C21.645 34.9311 22.7502 35.531 23.8215 36.2047C24.9052 36.86 25.9673 37.5614 27.0047 38.315C27.5034 38.6688 28.1038 39.0964 28.6794 39.481C29.2582 39.8716 29.84 40.2562 30.4373 40.6161C31.6379 41.336 32.8693 42.0158 34.1561 42.6095C36.7267 43.7877 39.5097 44.7076 42.4466 44.9414C43.9119 45.0613 45.4081 45.0029 46.8673 44.7137C48.3265 44.4245 49.7365 43.9016 50.9956 43.1571C52.2547 42.4127 53.366 41.4621 54.2619 40.37C55.1547 39.281 55.8658 38.0628 56.2722 36.7646C54.5667 38.8626 52.3748 40.3762 50.0536 41.1391C47.7293 41.9143 45.2911 41.9143 42.936 41.4098C40.5748 40.9053 38.2752 39.9486 36.074 38.7611C35.7138 38.5673 35.3598 38.3643 35.0027 38.1612L38.1089 28.4217L48.7298 20.0512C48.736 20.0512 48.739 20.0512 48.7452 20.042C49.1916 19.7743 49.484 19.3498 49.601 18.8822L54.0556 20.2511L54.0218 20.3434L57.088 23.5089L64.9136 26.2591C67.2101 22.9644 66.9946 20.368 66.9946 20.368ZM38.2044 23.5458C38.189 23.5551 38.1767 23.5643 38.1643 23.5735C30.034 29.2585 26.5306 20.3004 26.5306 20.3004L23.3936 10.81L45.6728 17.6671L38.2044 23.5458Z"
      fill={mainColor}
    />
  </KayakMan>
);

export default KayakBlueIcon;
