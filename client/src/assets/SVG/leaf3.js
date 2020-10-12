import React from "react";
import styled, { css } from "styled-components";

const Leaf = styled.svg`
  width: 91px;
  height: 98px;
  position: absolute;
  top: 70%;
  right: 20%;

  @media (max-width: 800px) {
    width: 58px;
    height: 75px;
  }
`;
const Leafs3 = () => (
  <Leaf viewBox="0 0 91 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M45.6662 87.3439C46.3615 87.3439 46.9262 86.7155 46.9312 85.9362C46.9312 83.7631 46.9312 32.5971 22.1041 11.0818C21.5187 10.6548 20.7351 10.8405 20.3537 11.4957C20.0129 12.0824 20.105 12.8604 20.5715 13.3271C44.4012 34.0256 44.4103 85.3981 44.4103 85.9158C44.4054 86.6984 44.9672 87.3383 45.6662 87.3439V87.3439Z"
      fill="#5FA348"
    />
    <path
      d="M38.7778 46.0515C38.7778 46.0515 35.5923 27.5576 17.9948 34.8743C17.9948 34.8743 26.2493 52.5611 38.7778 46.0515Z"
      fill="#65B54E"
    />
    <path
      d="M41.1056 46.0414C41.1056 46.0414 33.4973 29.2242 51.4649 23.0975C51.4649 23.0971 54.6038 42.7185 41.1056 46.0414V46.0414Z"
      fill="#65B54E"
    />
    <path
      d="M29.8037 24.1733C29.8037 24.1733 23.4884 9.27035 9.98983 19.7955C10.0179 19.796 20.4784 32.7629 29.8037 24.1733V24.1733Z"
      fill="#65B54E"
    />
    <path
      d="M31.8073 23.5935C31.8073 23.5935 22.0669 11.1748 36.1008 1.5813C36.1008 1.5813 42.6004 17.4566 31.8073 23.5935Z"
      fill="#65B54E"
    />
    <path
      d="M22.501 12.9238C22.501 12.9238 18.3186 -6.48046 0.000175742 2.2643C0.000175742 2.26477 9.49152 20.4998 22.501 12.9238Z"
      fill="#65B54E"
    />
    <path
      d="M45.2597 87.3128C44.7581 87.2086 44.4268 86.6696 44.5193 86.107C44.5222 86.0881 44.526 86.0691 44.5301 86.0501C44.8346 84.4563 52.1843 46.8999 73.4937 35.5777C73.9679 35.3263 74.5343 35.5532 74.7586 36.0852C74.983 36.6168 74.7805 37.2517 74.3059 37.5031C53.8083 48.3696 46.4222 86.0918 46.4222 86.4951C46.3342 87.0581 45.8562 87.4346 45.3538 87.3364C45.3344 87.3323 45.315 87.3281 45.2956 87.323L45.2597 87.3128Z"
      fill="#5FA348"
    />
    <path
      d="M50.1167 74.0143C50.1167 74.0143 52.6466 58.853 67.0962 64.7005C67.0681 64.7417 60.3835 79.2816 50.1167 74.0143Z"
      fill="#65B54E"
    />
    <path
      d="M48.1868 74.0246C48.1868 74.0246 54.3452 60.2191 39.6093 55.2825C39.6089 55.2825 37.1162 71.3648 48.1868 74.0246Z"
      fill="#65B54E"
    />
    <path
      d="M56.2381 58.2423C56.2381 58.2423 61.1963 45.2439 73.1064 53.7822C73.1064 53.7817 64.5016 65.2798 56.2381 58.2423Z"
      fill="#65B54E"
    />
    <path
      d="M54.5298 57.8181C54.5298 57.8181 62.5348 46.8373 50.2181 39.1071C50.2181 39.1071 45.1033 52.9746 54.5298 57.8181Z"
      fill="#65B54E"
    />
    <path
      d="M65.9505 43.7951C65.9505 43.7951 72.7186 33.9839 81.1201 44.1465C81.1209 44.1465 71.5829 51.7948 65.9505 43.7951Z"
      fill="#65B54E"
    />
    <path
      d="M64.5846 43.0083C64.5846 43.0083 73.5129 35.6601 64.5846 26.0768C64.5846 26.0675 57.503 36.5612 64.5846 43.0083Z"
      fill="#65B54E"
    />
    <path
      d="M72.9497 36.8612C72.9497 36.8612 78.7945 23.4072 91 33.0526C91 33.0521 81.3884 44.7572 72.9497 36.8612Z"
      fill="#65B54E"
    />
    <path
      d="M46.8664 68.1985C45.9266 64.8747 44.4596 61.769 42.5362 59.0295C43.8982 60.7711 45.0698 62.6895 46.0262 64.7422C45.9068 63.6943 46.0142 62.6288 46.3397 61.6375C46.003 62.8229 45.9836 64.093 46.2844 65.2905C47.841 68.7518 48.7643 72.5275 48.9985 76.395H48.0752C48.038 73.8866 47.7026 71.3945 47.078 68.9852H47.004C45.9535 66.926 44.2279 65.4072 42.1937 64.7524C44.0606 65.2613 45.7114 66.4787 46.8664 68.1985V68.1985Z"
      fill="#5FA348"
    />
    <path
      d="M52.794 70.6818H52.7387C53.4211 68.9574 54.563 67.5108 56.0072 66.5421C54.7361 67.4997 53.7338 68.8421 53.1171 70.4128C54.1416 69.6422 55.2124 68.9509 56.3208 68.3429L56.2654 68.2809L59.4782 65.083L56.7083 68.0947C58.6094 67.0755 60.6114 66.311 62.6729 65.8179C60.2437 66.5537 57.9208 67.6756 55.7755 69.1505C57.7022 69.2278 59.6307 69.1037 61.5368 68.7777C59.4724 69.2621 57.3676 69.5047 55.2582 69.5019C54.3366 70.1613 53.4546 70.8869 52.6176 71.675L59.2097 71.9959L52.202 72.0686C50.9573 73.267 49.8221 74.6015 48.8136 76.0527L48.1118 75.4318C49.494 73.6398 51.0664 72.0446 52.794 70.6818V70.6818Z"
      fill="#5FA348"
    />
    <path
      d="M54.4929 53.8127C54.4479 52.2717 54.2872 50.7385 54.0129 49.2281C53.5217 48.0477 52.7145 47.0679 51.7044 46.4238C52.5645 46.9012 53.304 47.6125 53.8555 48.4937C53.4647 46.6313 52.8983 44.8203 52.1658 43.0917C52.6554 44.0933 53.0838 45.1305 53.449 46.1964C53.3792 45.388 53.5035 44.5734 53.8092 43.8367C53.4126 44.8744 53.3759 46.0404 53.708 47.1068C54.1885 48.6469 54.5408 50.2333 54.7606 51.8466C55.1093 50.7418 55.5352 49.6684 56.0347 48.6386C55.5336 49.8069 55.1258 51.0229 54.816 52.2712C55.1667 54.8852 55.1667 57.5431 54.816 60.157L54.0129 59.9811C54.3454 58.1668 54.5037 56.3174 54.4838 54.4647C54.0075 52.8505 53.0231 51.485 51.7139 50.6256C52.9235 51.3229 53.8993 52.4412 54.4929 53.8127V53.8127Z"
      fill="#5FA348"
    />
    <path
      d="M54.2532 59.0394C55.8074 57.7488 57.497 56.6782 59.285 55.8517C60.2393 54.6533 61.4229 53.7124 62.7473 53.0988C61.6009 53.711 60.5797 54.5806 59.7468 55.6549C61.0936 55.064 62.4833 54.607 63.902 54.2889L67.0875 52.1056L64.3634 54.1754C65.8849 53.8522 67.4312 53.6966 68.98 53.7096C66.5575 53.8189 64.1635 54.3384 61.8798 55.252L65.8126 55.397L61.2791 55.5215C58.907 56.5259 56.6956 57.9553 54.7333 59.7543L54.2532 59.0394Z"
      fill="#5FA348"
    />
    <path
      d="M63.7261 44.6953C64.3594 43.2482 64.8522 41.7285 65.1943 40.1625C65.0365 39.1257 64.5676 38.1797 63.8645 37.4818C64.5374 38.0773 65.0303 38.89 65.2773 39.8101C65.5975 38.2788 65.7772 36.7146 65.8131 35.1425C65.7499 33.5024 64.996 31.9933 63.7818 31.0755C64.7456 31.7386 65.4665 32.7666 65.8131 33.9728C65.8131 33.8071 65.8131 33.6417 65.8131 33.4653C65.7714 32.3012 65.6512 31.1426 65.4529 29.9989C65.669 31.0047 65.8288 32.0238 65.9329 33.0523L66.5146 30.9824L65.9697 33.3107C66.073 34.4692 66.0978 35.6357 66.0437 36.7984C66.3039 36.1557 66.6848 35.5838 67.1611 35.1217C66.6332 35.6917 66.2453 36.4048 66.0346 37.1915C65.8945 39.9018 65.3319 42.5643 64.373 45.0569L63.7261 44.6953Z"
      fill="#5FA348"
    />
    <path
      d="M64.1046 43.9812C65.4439 43.369 66.8365 42.9148 68.2597 42.6254H68.3337C69.1913 42.4541 70.058 42.3406 70.9285 42.2841C72.4549 42.1336 73.9537 41.7359 75.379 41.1042C74.4106 41.6039 73.3989 41.9891 72.3595 42.2526C74.1528 42.279 75.9363 42.5573 77.6685 43.081C76.8707 42.8898 76.0627 42.7555 75.2497 42.6772C75.8165 42.8731 76.3411 43.1973 76.7918 43.6293C76.0433 43.0065 75.1472 42.6467 74.216 42.5944C72.7499 42.5161 71.2796 42.6092 69.8304 42.874C71.3065 43.2426 72.6776 44.0178 73.819 45.1305C72.4359 43.9321 70.7698 43.213 69.0269 43.0607C67.4331 43.4135 65.8831 43.9794 64.4103 44.7476L64.1046 43.9812Z"
      fill="#5FA348"
    />
    <path
      d="M76.1813 34.5428C77.94 33.0768 79.8977 31.9376 81.9798 31.1694C80.2138 31.8923 78.5572 32.9151 77.0675 34.2015C78.3209 33.7533 79.6015 33.4078 80.8991 33.1666V33.105H81.0561C82.9048 32.7637 84.7804 32.6494 86.6514 32.7637C84.9964 32.7577 83.3452 32.9346 81.7208 33.2916C83.2733 33.7056 84.8547 33.9654 86.4481 34.0677C84.6391 34.0644 82.8354 33.8528 81.0652 33.4365C80.2795 33.6181 79.5032 33.8459 78.7385 34.1191C79.9754 34.9243 81.4031 35.286 82.8288 35.154C81.3164 35.3846 79.7784 35.0614 78.4432 34.2325C77.4579 34.6081 76.4933 35.0466 75.553 35.5471C77.5446 36.4256 79.6486 36.9465 81.7853 37.0896C79.5102 37.0798 77.2534 36.6395 75.1101 35.7852C73.7882 36.5191 72.5306 37.3887 71.3524 38.3829L70.8356 37.5962C72.5013 36.3408 74.2963 35.3156 76.1813 34.5428V34.5428Z"
      fill="#5FA348"
    />
    <path
      d="M23.8026 38.7135C25.8744 38.5978 27.9511 38.695 30.0068 39.0034C27.8867 37.7657 25.6509 36.7942 23.3407 36.1061C26.5754 36.8752 29.6883 38.187 32.5735 39.9971C31.5229 38.9664 30.5356 37.856 29.6189 36.6752C31.2387 38.5487 33.0345 40.2212 34.9741 41.6636C37.2479 43.3765 39.3118 45.4153 41.1143 47.7278L40.2649 48.4937C39.0805 46.8128 37.7577 45.2602 36.313 43.8576L27.4496 43.7543L35.759 43.3612C34.2429 41.9392 32.614 40.675 30.8938 39.5836C28.5638 39.0141 26.1867 38.7228 23.8026 38.7135V38.7135Z"
      fill="#5FA348"
    />
    <path
      d="M41.5304 40.5556C41.1743 37.8681 41.2743 35.1291 41.8258 32.4832C41.3722 34.9272 41.3375 37.4453 41.7246 39.9032C42.2877 38.0412 42.9792 36.2316 43.7927 34.4905H43.7373L45.2055 28.1361L44.1992 33.5894C45.2518 31.4867 46.4887 29.5076 47.8924 27.6804C45.9128 30.5282 44.3314 33.6964 43.2023 37.0772C44.9878 35.5732 46.5705 33.7886 47.9023 31.7784C46.5481 34.0794 44.8779 36.1265 42.9536 37.8426C41.8258 41.4275 41.2363 45.1973 41.209 48.9985H40.1106C40.2762 46.1317 40.7538 43.296 41.5304 40.5556V40.5556Z"
      fill="#5FA348"
    />
    <path
      d="M14.7823 19.5367C16.1369 19.4607 17.4952 19.4987 18.8444 19.6501C17.9302 19.3441 17.0846 18.8259 16.3608 18.129C17.287 18.9435 18.3896 19.4686 19.5554 19.6501V19.7228C20.3494 19.8363 21.1439 19.9812 21.9279 20.1572C22.8513 20.385 23.7746 20.6647 24.6979 20.9958C23.7589 20.1035 22.9463 19.057 22.2882 17.891C23.1078 19.1959 24.1307 20.3248 25.3077 21.2236C27.743 22.1404 30.0568 23.4208 32.186 25.0322L31.6044 25.8912C30.3679 24.8363 29.0521 23.9047 27.6715 23.1073C25.5221 22.8767 23.3582 22.8767 21.2087 23.1073C23.1086 22.7832 25.0296 22.634 26.9514 22.6628C25.1428 21.6922 23.2495 20.936 21.3008 20.4063C19.7198 20.2192 18.1236 20.5197 16.6843 21.2754C17.7418 20.6383 18.9039 20.2507 20.1003 20.1373C18.3487 19.7455 16.5682 19.5441 14.7823 19.5367V19.5367Z"
      fill="#5FA348"
    />
    <path
      d="M30.4596 11.4545C30.3662 13.6582 30.5971 15.8651 31.1429 17.9845C31.2874 16.0146 31.5965 14.0638 32.0662 12.1583C31.7361 10.2612 31.7047 8.31359 31.974 6.40396C31.7592 8.12837 31.8278 9.88195 32.1773 11.5786C32.6482 9.76295 33.2663 7.99964 34.0239 6.31042C32.8395 9.36287 32.1009 12.6093 31.8356 15.9248C32.6359 14.2763 33.2886 12.5431 33.7835 10.7502C33.3092 12.8284 32.6309 14.8417 31.7613 16.7527C31.5671 19.8816 31.8129 23.0243 32.4904 26.0666L31.5671 26.3148C31.1577 23.9287 30.9999 21.4976 31.0962 19.0708C30.4583 16.5999 30.2423 14.0156 30.4596 11.4545V11.4545Z"
      fill="#5FA348"
    />
    <path
      d="M7.64507 5.64829C9.15914 5.53484 10.6827 5.51354 12.1968 5.5654C10.1184 4.549 7.95243 3.77246 5.734 3.24736C8.28871 3.70902 10.7881 4.4939 13.185 5.5867C13.9513 5.93816 14.7172 6.32157 15.4563 6.73507C14.5226 5.72932 13.7757 4.52631 13.2589 3.1955C13.9922 4.86712 15.1031 6.29379 16.4808 7.33519C19.6597 9.22908 22.5511 11.6735 25.0488 14.5792L24.1255 15.4382C22.6197 13.4836 20.9334 11.7143 19.0938 10.1598C17.1137 9.66805 15.0927 9.40782 13.0647 9.38374C14.8915 9.29391 16.7225 9.40134 18.5307 9.70464C16.7126 8.22518 14.7668 6.95271 12.7231 5.90667C11.0363 5.71636 9.3405 5.63023 7.64507 5.64829V5.64829Z"
      fill="#5FA348"
    />
  </Leaf>
);
export default Leafs3;
