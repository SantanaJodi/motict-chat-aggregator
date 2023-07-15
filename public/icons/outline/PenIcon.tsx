import * as React from "react";
const PenIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M16.5404 2.54036C16.7942 2.28652 17.2058 2.28652 17.4596 2.54036L21.4596 6.54036C21.7134 6.7942 21.7134 7.20575 21.4596 7.4596L8.4596 20.4596C8.3377 20.5815 8.17237 20.65 7.99998 20.65H3.99998C3.64099 20.65 3.34998 20.359 3.34998 20V16C3.34998 15.8276 3.41846 15.6623 3.54036 15.5404L16.5404 2.54036ZM14.9192 5.99998L18 9.08074L20.0807 6.99998L17 3.91921L14.9192 5.99998ZM17.0807 9.99998L14 6.91921L4.64998 16.2692V19.35H7.73074L17.0807 9.99998Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default PenIcon;
