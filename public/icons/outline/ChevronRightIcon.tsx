import * as React from "react";
const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.46967 6.46967C9.76256 6.17678 10.2374 6.17678 10.5303 6.46967L15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303L10.5303 17.5303C10.2374 17.8232 9.76256 17.8232 9.46967 17.5303C9.17678 17.2374 9.17678 16.7626 9.46967 16.4697L13.9393 12L9.46967 7.53033C9.17678 7.23744 9.17678 6.76256 9.46967 6.46967Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default ChevronRightIcon;
