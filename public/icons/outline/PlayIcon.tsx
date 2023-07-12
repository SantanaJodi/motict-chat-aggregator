import * as React from "react";
const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.7444 9.88263C19.1236 10.087 19.4408 10.392 19.662 10.765C19.8831 11.1381 20 11.565 20 12.0002C20 12.4354 19.8831 12.8624 19.662 13.2354C19.4408 13.6085 19.1236 13.9135 18.7444 14.1178L8.62933 19.6914C7.00059 20.589 5 19.421 5 17.5746V6.42664C5 4.57864 7.00059 3.41145 8.62933 4.30825L18.7444 9.88263Z"
      stroke={props.stroke || "black"}
      strokeWidth={1.5}
    />
  </svg>
);
export default PlayIcon;
