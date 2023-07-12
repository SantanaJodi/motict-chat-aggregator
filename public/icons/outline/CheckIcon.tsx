import * as React from "react";
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4597 6.19038C20.7135 6.44422 20.7135 6.85578 20.4597 7.10962L9.4597 18.1096C9.20586 18.3634 8.79431 18.3634 8.54047 18.1096L3.54036 13.1096C3.28652 12.8558 3.28651 12.4442 3.54035 12.1904C3.79419 11.9365 4.20574 11.9365 4.45959 12.1904L9.00007 16.7307L19.5404 6.19038C19.7943 5.93654 20.2058 5.93654 20.4597 6.19038Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default CheckIcon;
