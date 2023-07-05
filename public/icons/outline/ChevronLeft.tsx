import * as React from "react";
const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14.5303 6.46967C14.8232 6.76256 14.8232 7.23744 14.5303 7.53033L10.0607 12L14.5303 16.4697C14.8232 16.7626 14.8232 17.2374 14.5303 17.5303C14.2374 17.8232 13.7626 17.8232 13.4697 17.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L13.4697 6.46967C13.7626 6.17678 14.2374 6.17678 14.5303 6.46967Z"
      fill="#0D0F12"
    />
  </svg>
);
export default ChevronLeft;
