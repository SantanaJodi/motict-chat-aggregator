import * as React from "react";
const ChevronUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L17.5303 13.4697C17.8232 13.7626 17.8232 14.2374 17.5303 14.5303C17.2374 14.8232 16.7626 14.8232 16.4697 14.5303L12 10.0607L7.53033 14.5303C7.23744 14.8232 6.76256 14.8232 6.46967 14.5303C6.17678 14.2374 6.17678 13.7626 6.46967 13.4697L11.4697 8.46967Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default ChevronUpIcon;
