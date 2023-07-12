import { SVGProps } from "react";

const FileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.15}
      d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z"
      fill={props.fill || "#0D0F12"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.34998 2.99998C4.34998 2.64099 4.64099 2.34998 4.99998 2.34998H14C14.1724 2.34998 14.3377 2.41846 14.4596 2.54036L19.4596 7.54036C19.5815 7.66225 19.65 7.82758 19.65 7.99998V21C19.65 21.359 19.359 21.65 19 21.65H4.99998C4.64099 21.65 4.34998 21.359 4.34998 21V2.99998ZM5.64998 3.64998V20.35H18.35V9.64998H15C14.2886 9.64998 13.6316 9.30082 13.1654 8.8346C12.6991 8.36837 12.35 7.71138 12.35 6.99998V3.64998H5.64998ZM13.65 3.64998V6.99998C13.65 7.28858 13.8008 7.63158 14.0846 7.91536C14.3684 8.19913 14.7114 8.34998 15 8.34998H18.35V8.26922L13.7307 3.64998H13.65Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default FileIcon;
