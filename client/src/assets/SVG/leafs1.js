import React from "react";
import styled, { css } from "styled-components";

const Leaf = styled.svg`
  width: 91px;
  height: 98px;
  position: absolute;
  top: 0;
  left: 20%;

  /* @media (max-width: 380px) {
    width: 38px;
    height: 75px;
  } */
`;
const Leafs1 = () => (
  <Leaf viewBox="0 0 91 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M45.3336 87.668C44.6383 87.668 44.0736 87.0396 44.0686 86.2603C44.0686 84.0872 44.0686 32.9212 68.8956 11.4059C69.481 10.9789 70.2647 11.1646 70.646 11.8198C70.9868 12.4065 70.8947 13.1845 70.4283 13.6512C46.5985 34.3497 46.5894 85.7222 46.5894 86.2399C46.5944 87.0225 46.0326 87.6624 45.3336 87.668Z"
      fill="#5FA348"
    />
    <path
      d="M52.2219 46.3757C52.2219 46.3757 55.4075 27.8818 73.005 35.1985C73.005 35.1985 64.7505 52.8853 52.2219 46.3757Z"
      fill="#65B54E"
    />
    <path
      d="M49.8946 46.3655C49.8946 46.3655 57.503 29.5483 39.5353 23.4216C39.5353 23.4212 36.3964 43.0426 49.8946 46.3655Z"
      fill="#65B54E"
    />
    <path
      d="M61.1963 24.4973C61.1963 24.4973 67.5116 9.59439 81.0102 20.1196C80.9821 20.12 70.5216 33.0869 61.1963 24.4973Z"
      fill="#65B54E"
    />
    <path
      d="M59.1924 23.9176C59.1924 23.9176 68.9329 11.4989 54.8989 1.9054C54.8989 1.9054 48.3994 17.7807 59.1924 23.9176Z"
      fill="#65B54E"
    />
    <path
      d="M68.4993 13.2479C68.4993 13.2479 72.6817 -6.15636 91.0001 2.5884C91.0001 2.58886 81.5087 20.8239 68.4993 13.2479Z"
      fill="#65B54E"
    />
    <path
      d="M45.7403 87.6369C46.2419 87.5327 46.5732 86.9937 46.4806 86.4311C46.4778 86.4121 46.474 86.3932 46.4699 86.3742C46.1654 84.7803 38.8157 47.224 17.5063 35.9018C17.0321 35.6504 16.4657 35.8773 16.2414 36.4093C16.017 36.9409 16.2195 37.5758 16.6941 37.8272C37.1917 48.6937 44.5778 86.4159 44.5778 86.8192C44.6658 87.3822 45.1438 87.7587 45.6462 87.6605C45.6656 87.6564 45.685 87.6522 45.7044 87.6471L45.7403 87.6369Z"
      fill="#5FA348"
    />
    <path
      d="M40.8833 74.3385C40.8833 74.3385 38.3534 59.1772 23.9038 65.0246C23.9319 65.0658 30.6165 79.6057 40.8833 74.3385Z"
      fill="#65B54E"
    />
    <path
      d="M42.8129 74.3487C42.8129 74.3487 36.6546 60.5432 51.3904 55.6066C51.3909 55.6066 53.8836 71.6889 42.8129 74.3487Z"
      fill="#65B54E"
    />
    <path
      d="M34.7619 58.5664C34.7619 58.5664 29.8037 45.568 17.8936 54.1063C17.8936 54.1058 26.4984 65.6039 34.7619 58.5664Z"
      fill="#65B54E"
    />
    <path
      d="M36.4702 58.1423C36.4702 58.1423 28.4652 47.1614 40.7819 39.4312C40.7819 39.4312 45.8967 53.2987 36.4702 58.1423Z"
      fill="#65B54E"
    />
    <path
      d="M25.0493 44.1192C25.0493 44.1192 18.2812 34.308 9.87964 44.4706C9.87881 44.4706 19.4168 52.1189 25.0493 44.1192Z"
      fill="#65B54E"
    />
    <path
      d="M26.4154 43.3324C26.4154 43.3324 17.4871 35.9842 26.4154 26.4009C26.4154 26.3916 33.497 36.8853 26.4154 43.3324Z"
      fill="#65B54E"
    />
    <path
      d="M18.0503 37.1854C18.0503 37.1854 12.2055 23.7314 0 33.3768C0 33.3763 9.61156 45.0814 18.0503 37.1854Z"
      fill="#65B54E"
    />
    <path
      d="M44.1336 68.5226C45.0734 65.1988 46.5404 62.0931 48.4638 59.3536C47.1018 61.0952 45.9302 63.0136 44.9738 65.0663C45.0932 64.0184 44.9858 62.9529 44.6603 61.9615C44.997 63.147 45.0164 64.4171 44.7156 65.6146C43.159 69.0759 42.2357 72.8516 42.0015 76.7191H42.9248C42.962 74.2107 43.2974 71.7186 43.922 69.3093H43.996C45.0465 67.2501 46.7721 65.7313 48.8063 65.0765C46.9394 65.5854 45.2886 66.8028 44.1336 68.5226Z"
      fill="#5FA348"
    />
    <path
      d="M38.2062 71.0059H38.2616C37.5791 69.2815 36.4373 67.835 34.993 66.8662C36.2642 67.8238 37.2664 69.1662 37.8832 70.7369C36.8586 69.9664 35.7879 69.275 34.6795 68.6671L34.7348 68.605L31.522 65.4072L34.292 68.4189C32.3908 67.3997 30.3888 66.6352 28.3274 66.142C30.7565 66.8778 33.0795 67.9998 35.2248 69.4746C33.298 69.552 31.3696 69.4279 29.4635 69.1019C31.5278 69.5862 33.6326 69.8289 35.742 69.8261C36.6637 70.4855 37.5457 71.2111 38.3826 71.9992L31.7905 72.3201L38.7982 72.3928C40.0429 73.5912 41.1782 74.9257 42.1866 76.3769L42.8885 75.756C41.5062 73.9639 39.9339 72.3687 38.2062 71.0059Z"
      fill="#5FA348"
    />
    <path
      d="M36.5076 54.1369C36.5526 52.5959 36.7133 51.0627 36.9876 49.5522C37.4788 48.3719 38.286 47.3921 39.2961 46.748C38.436 47.2254 37.6965 47.9366 37.145 48.8178C37.5358 46.9554 38.1022 45.1444 38.8347 43.4158C38.3451 44.4174 37.9167 45.4547 37.5515 46.5206C37.6213 45.7121 37.497 44.8976 37.1913 44.1609C37.5879 45.1986 37.6246 46.3646 37.2925 47.431C36.812 48.9711 36.4596 50.5575 36.2399 52.1708C35.8912 51.0659 35.4653 49.9926 34.9658 48.9627C35.4669 50.131 35.8747 51.347 36.1845 52.5954C35.8338 55.2093 35.8338 57.8673 36.1845 60.4812L36.9876 60.3052C36.6551 58.491 36.4968 56.6416 36.5167 54.7889C36.993 53.1747 37.9774 51.8091 39.2866 50.9497C38.077 51.6471 37.1012 52.7653 36.5076 54.1369Z"
      fill="#5FA348"
    />
    <path
      d="M36.747 59.3634C35.1929 58.0729 33.5032 57.0023 31.7153 56.1757C30.761 54.9773 29.5774 54.0364 28.2529 53.4229C29.3993 54.035 30.4206 54.9046 31.2534 55.9789C29.9066 55.3881 28.5169 54.931 27.0983 54.6129L23.9127 52.4296L26.6368 54.4995C25.1153 54.1763 23.569 54.0207 22.0203 54.0336C24.4428 54.1429 26.8368 54.6625 29.1205 55.5761L25.1876 55.721L29.7212 55.8456C32.0933 56.8499 34.3047 58.2794 36.267 60.0783L36.747 59.3634Z"
      fill="#5FA348"
    />
    <path
      d="M27.2739 45.0194C26.6406 43.5723 26.1478 42.0526 25.8057 40.4866C25.9635 39.4498 26.4324 38.5038 27.1355 37.8059C26.4626 38.4014 25.9697 39.2141 25.7227 40.1342C25.4025 38.6029 25.2228 37.0387 25.1869 35.4666C25.2501 33.8265 26.004 32.3174 27.2182 31.3996C26.2544 32.0627 25.5335 33.0907 25.1869 34.2969C25.1869 34.1311 25.1869 33.9658 25.1869 33.7894C25.2286 32.6253 25.3488 31.4667 25.5471 30.323C25.331 31.3287 25.1712 32.3479 25.0671 33.3764L24.4854 31.3065L25.0303 33.6348C24.927 34.7933 24.9022 35.9597 24.9563 37.1225C24.6961 36.4798 24.3152 35.9079 23.8389 35.4458C24.3668 36.0158 24.7547 36.7289 24.9654 37.5156C25.1055 40.2259 25.6681 42.8884 26.627 45.381L27.2739 45.0194Z"
      fill="#5FA348"
    />
    <path
      d="M26.8954 44.3054C25.5561 43.6932 24.1635 43.239 22.7403 42.9495H22.6663C21.8087 42.7782 20.942 42.6648 20.0715 42.6083C18.5451 42.4578 17.0463 42.06 15.621 41.4284C16.5894 41.928 17.6011 42.3133 18.6405 42.5768C16.8472 42.6032 15.0637 42.8815 13.3315 43.4052C14.1293 43.2139 14.9373 43.0797 15.7503 43.0014C15.1835 43.1973 14.6589 43.5214 14.2082 43.9534C14.9567 43.3306 15.8528 42.9708 16.784 42.9185C18.2501 42.8403 19.7204 42.9333 21.1696 43.1982C19.6935 43.5668 18.3224 44.3419 17.181 45.4547C18.5641 44.2563 20.2302 43.5372 21.9731 43.3848C23.5669 43.7377 25.1169 44.3035 26.5897 45.0717L26.8954 44.3054Z"
      fill="#5FA348"
    />
    <path
      d="M14.8189 34.8669C13.0603 33.4008 11.1025 32.2617 9.02039 31.4935C10.7865 32.2164 12.4431 33.2392 13.9328 34.5256C12.6794 34.0774 11.3987 33.7319 10.1011 33.4907V33.4291H9.94412C8.09543 33.0878 6.21988 32.9734 4.34888 33.0878C6.00382 33.0818 7.65505 33.2587 9.27942 33.6157C7.72693 34.0297 6.14552 34.2894 4.55213 34.3918C6.36117 34.3885 8.16483 34.1769 9.93503 33.7606C10.7208 33.9422 11.497 34.17 12.2617 34.4432C11.0248 35.2484 9.59711 35.6101 8.17144 35.4781C9.68386 35.7087 11.2219 35.3855 12.5571 34.5566C13.5424 34.9322 14.507 35.3707 15.4472 35.8712C13.4556 36.7497 11.3516 37.2706 9.21497 37.4137C11.49 37.4039 13.7469 36.9636 15.8901 36.1092C17.2121 36.8432 18.4696 37.7128 19.6478 38.707L20.1646 37.9203C18.4989 36.6649 16.7039 35.6397 14.8189 34.8669Z"
      fill="#5FA348"
    />
    <path
      d="M67.1974 39.0376C65.1256 38.9219 63.0489 39.0191 60.9932 39.3275C63.1133 38.0898 65.3491 37.1183 67.6593 36.4302C64.4246 37.1993 61.3117 38.5111 58.4265 40.3212C59.4771 39.2905 60.4644 38.1801 61.3811 36.9993C59.7613 38.8728 57.9655 40.5453 56.0259 41.9877C53.7521 43.7006 51.6882 45.7394 49.8857 48.0519L50.7351 48.8178C51.9195 47.1369 53.2423 45.5843 54.687 44.1817L63.5504 44.0784L55.241 43.6853C56.7571 42.2633 58.386 40.9991 60.1062 39.9077C62.4362 39.3382 64.8133 39.0469 67.1974 39.0376Z"
      fill="#5FA348"
    />
    <path
      d="M49.4698 40.8797C49.8259 38.1921 49.7259 35.4531 49.1744 32.8072C49.628 35.2512 49.6627 37.7693 49.2756 40.2272C48.7126 38.3653 48.021 36.5557 47.2076 34.8146H47.2629L45.7947 28.4601L46.8011 33.9135C45.7485 31.8108 44.5116 29.8317 43.1078 28.0045C45.0875 30.8522 46.6689 34.0204 47.7979 37.4012C46.0124 35.8972 44.4298 34.1126 43.0979 32.1025C44.4521 34.4034 46.1223 36.4505 48.0466 38.1666C49.1744 41.7516 49.7639 45.5213 49.7912 49.3225H50.8897C50.724 46.4557 50.2465 43.62 49.4698 40.8797Z"
      fill="#5FA348"
    />
    <path
      d="M76.218 19.8608C74.8634 19.7848 73.505 19.8228 72.1558 19.9742C73.07 19.6681 73.9157 19.15 74.6395 18.4531C73.7132 19.2676 72.6106 19.7927 71.4448 19.9742V20.0469C70.6508 20.1604 69.8564 20.3053 69.0723 20.4813C68.149 20.7091 67.2257 20.9888 66.3024 21.3199C67.2414 20.4276 68.054 19.3811 68.7121 18.2151C67.8924 19.52 66.8696 20.6489 65.6926 21.5477C63.2573 22.4645 60.9434 23.7449 58.8142 25.3563L59.3959 26.2153C60.6323 25.1604 61.9481 24.2288 63.3287 23.4314C65.4782 23.2008 67.6421 23.2008 69.7915 23.4314C67.8916 23.1072 65.9706 22.9581 64.0488 22.9869C65.8574 22.0163 67.7507 21.2601 69.6994 20.7304C71.2804 20.5433 72.8767 20.8438 74.316 21.5995C73.2584 20.9624 72.0963 20.5748 70.8999 20.4614C72.6515 20.0696 74.4321 19.8682 76.218 19.8608Z"
      fill="#5FA348"
    />
    <path
      d="M60.5404 11.7786C60.6338 13.9823 60.4029 16.1892 59.8571 18.3086C59.7126 16.3387 59.4035 14.3879 58.9338 12.4824C59.2639 10.5853 59.2953 8.63769 59.026 6.72806C59.2408 8.45247 59.1722 10.2061 58.8227 11.9027C58.3518 10.087 57.7337 8.32374 56.9761 6.63452C58.1605 9.68697 58.8991 12.9334 59.1644 16.2489C58.3641 14.6004 57.7114 12.8672 57.2165 11.0743C57.6908 13.1525 58.3691 15.1658 59.2387 17.0768C59.4329 20.2057 59.1871 23.3484 58.5096 26.3907L59.4329 26.6389C59.8423 24.2528 60.0001 21.8217 59.9038 19.3949C60.5417 16.924 60.7577 14.3397 60.5404 11.7786Z"
      fill="#5FA348"
    />
    <path
      d="M83.3554 5.97239C81.8413 5.85894 80.3178 5.83764 78.8037 5.8895C80.8821 4.8731 83.0481 4.09656 85.2665 3.57145C82.7118 4.03312 80.2124 4.81799 77.8155 5.9108C77.0492 6.26226 76.2833 6.64566 75.5442 7.05917C76.4779 6.05342 77.2248 4.85041 77.7416 3.51959C77.0083 5.19121 75.8974 6.61788 74.5197 7.65929C71.3408 9.55318 68.4494 11.9976 65.9517 14.9033L66.875 15.7623C68.3808 13.8077 70.0671 12.0384 71.9067 10.4839C73.8868 9.99215 75.9078 9.73192 77.9357 9.70784C76.1089 9.618 74.278 9.72543 72.4698 10.0287C74.2879 8.54928 76.2337 7.27681 78.2774 6.23077C79.9641 6.04045 81.66 5.95433 83.3554 5.97239Z"
      fill="#5FA348"
    />
  </Leaf>
);
export default Leafs1;
