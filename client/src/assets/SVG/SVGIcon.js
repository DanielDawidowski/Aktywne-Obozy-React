import React from "react";

const getViewBox = (name) => {
  switch (name) {
    case "logo":
      return "0 0 99 63";
    case "wave":
      return "0 0 1440 503";

    default:
      return "0 0 13.5 17.5";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "wave":
      return (
        <path
          {...props}
          d="M0 0L60 42.159C120 84.3179 240 168.636 360 199.165C480 231.147 600 209.341 720 199.165C840 188.988 960 188.988 1080 199.165C1200 209.341 1320 231.147 1380 241.324L1440 251.5V503H1380C1320 503 1200 503 1080 503C960 503 840 503 720 503C600 503 480 503 360 503C240 503 120 503 60 503H0V0Z"
        />
      );
    case "message":
      return (
        <path
          {...props}
          d="M19.0675 0C8.5371 0 0 7.092 0 15.8401c0 5.5527 3.4417 10.4345 8.6471 13.2632.0083.0091.0221.0182.0434.0277.8433.3798.41 1.6817-.5651 2.8751-.742.9083-2.1668 1.8444-1.6251 1.8444.8667 0 2.7535-.4018 3.94-1.0597 1.7586-.9752 2.9897-1.8141 4.5758-1.469l-.0013-.0035a22.867 22.867 0 0 0 4.0527.3619c10.5309 0 19.0676-7.0916 19.0676-15.8401C38.1351 7.0921 29.5984 0 19.0675 0z"
        />
      );
    case "envelope":
      return (
        <path
          {...props}
          d="M 22.8196 15.7456C 22.0005 16.5862 20.9038 17.0508 19.7317 17.0542C 18.5632 17.0444 17.46 16.5994 16.6362 15.7646L 1.09009 0L 38.1626 0L 22.8196 15.7456ZM 0 1.06567L 11.2952 12.5818L 0 24.1392L 0 1.06567ZM 27.9519 12.623L 39.2878 24.1233L 39.2878 1.06567L 27.9519 12.623ZM 23.7844 16.9265L 27.0105 13.6885L 38.1833 25.082L 1.10547 25.082L 12.4006 13.6885L 15.6772 16.9512C 16.7539 18.0415 18.1877 18.6418 19.7185 18.6418L 19.7363 18.6418C 21.2734 18.6375 22.7109 18.0281 23.7844 16.9265Z"
        />
      );
    case "trash":
      return (
        <path
          {...props}
          d="M 8.18183 4.36365L 9.27274 4.36365L 9.27274 14.7273L 8.18183 14.7273L 8.18183 4.36365ZM 6.00001 4.36365L 7.09092 4.36365L 7.09092 14.7273L 6.00001 14.7273L 6.00001 4.36365ZM 3.81819 4.36365L 4.9091 4.36365L 4.9091 14.7273L 3.81819 14.7273L 3.81819 4.36365ZM 1.67946 2.72729L 2.72509 16.3216L 10.3636 16.3637L 11.4103 2.72729L 1.67946 2.72729ZM 7.512 1.08873L 5.56309 1.09091C 5.54127 1.10455 5.454 1.22236 5.454 1.41818L 5.454 1.63638L 7.63582 1.63638L 7.63582 1.41818C 7.63582 1.22236 7.54855 1.10455 7.512 1.08873ZM 5.56309 0L 7.52673 0C 8.19928 0 8.72673 0.622909 8.72673 1.41818L 8.72673 1.63638L 12.5885 1.63638L 13.0909 1.63638L 13.0909 2.72729L 12.5046 2.72729L 11.4524 16.4056C 11.454 16.9653 10.9642 17.4546 10.3631 17.4546L 2.72676 17.4546C 2.12511 17.4546 1.63585 16.9653 1.63585 16.3637L 0.585305 2.72729L 0 2.72729L 0 1.63638L 0.501262 1.63638L 4.36309 1.63638L 4.36309 1.41818C 4.36309 0.622909 4.89054 0 5.56309 0Z"
        />
      );
    case "wifi":
      return (
        <path
          {...props}
          d="M 5.99609 1.51367C 7.93604 1.51367 9.7041 2.22479 11.0596 3.39136L 12 2.35657C 10.3945 0.969788 8.29785 0 5.99561 0C 3.69775 0 1.60352 0.967163 0 2.35022L 0.938965 3.38574C 2.29395 2.22217 4.05908 1.51367 5.99609 1.51367ZM 5.91553 5.9726C 5.13672 5.9726 4.42383 6.28912 3.86963 6.74567L 5.91553 9L 7.96338 6.74792C 7.40918 6.29028 6.69531 5.9726 5.91553 5.9726ZM 9.01318 5.61206C 8.19385 4.92072 7.13184 4.5 5.96875 4.5C 4.80811 4.5 3.74756 4.91882 2.9292 5.60907L 1.93457 4.5127C 3.01758 3.58954 4.42578 2.98633 5.96924 2.98633C 7.51562 2.98633 8.92578 3.59143 10.0088 4.51721L 9.01318 5.61206Z"
        />
      );
    case "info":
      return (
        <path
          {...props}
          d="m277.332031 128c0 11.78125-9.550781 21.332031-21.332031 21.332031s-21.332031-9.550781-21.332031-21.332031 9.550781-21.332031 21.332031-21.332031 21.332031 9.550781 21.332031 21.332031zm0 0"
          d="m256 405.332031c-8.832031 0-16-7.167969-16-16v-165.332031h-21.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h37.332031c8.832031 0 16 7.167969 16 16v181.332031c0 8.832031-7.167969 16-16 16zm0 0"
          d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
          d="m304 405.332031h-96c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h96c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
        />
      );
    case "arrow":
      return (
        <path
          {...props}
          d="M469.163,277.333H352.299V10.667C352.299,4.776,347.523,0,341.632,0H170.965  c-5.891,0-10.667,4.776-10.667,10.667v266.667H42.965c-5.891,0.001-10.666,4.778-10.664,10.669c0.001,2.822,1.12,5.53,3.112,7.528  l212.8,213.504c2.001,2.007,4.718,3.135,7.552,3.136l0,0c2.831,0.005,5.548-1.115,7.552-3.115l213.333-213.504  c4.171-4.16,4.18-10.914,0.019-15.085C474.68,278.472,471.981,277.345,469.163,277.333z"
          d="M255.744,512L255.744,512c-2.834-0.001-5.551-1.129-7.552-3.136L35.413,295.445c-4.112-4.218-4.026-10.972,0.192-15.084  c1.971-1.921,4.608-3.006,7.36-3.028h117.333V10.667C160.299,4.776,165.074,0,170.965,0h170.667c5.891,0,10.667,4.776,10.667,10.667  v266.667h116.885c5.891-0.011,10.675,4.757,10.686,10.648c0.005,2.84-1.123,5.565-3.134,7.571L263.403,509.056  C261.344,511.019,258.587,512.079,255.744,512z M68.651,298.667L255.765,486.4l187.733-187.733H341.632  c-5.891,0-10.667-4.776-10.667-10.667V21.333H181.632V288c0,5.891-4.776,10.667-10.667,10.667H68.651z"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVGIcon;