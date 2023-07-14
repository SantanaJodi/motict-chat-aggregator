import { SVGProps } from "react";

const DownloadIcon = ({ fill, ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.34998C12.359 2.34998 12.65 2.64099 12.65 2.99998V13.4307L15.5404 10.5404C15.7942 10.2865 16.2058 10.2865 16.4596 10.5404C16.7134 10.7942 16.7134 11.2058 16.4596 11.4596L12.4596 15.4596C12.3377 15.5815 12.1724 15.65 12 15.65C11.8276 15.65 11.6623 15.5815 11.5404 15.4596L7.54036 11.4596C7.28652 11.2058 7.28652 10.7942 7.54036 10.5404C7.7942 10.2865 8.20575 10.2865 8.4596 10.5404L11.35 13.4307V2.99998C11.35 2.64099 11.641 2.34998 12 2.34998ZM3.99998 14.35C4.35896 14.35 4.64998 14.641 4.64998 15L4.64998 18C4.64998 18.7456 5.25439 19.35 5.99998 19.35H18C18.7456 19.35 19.35 18.7456 19.35 18V15C19.35 14.641 19.641 14.35 20 14.35C20.359 14.35 20.65 14.641 20.65 15V18C20.65 19.4635 19.4635 20.65 18 20.65H5.99998C4.53642 20.65 3.34998 19.4635 3.34998 18L3.34998 15C3.34998 14.641 3.64099 14.35 3.99998 14.35Z"
      fill={fill || "#0D0F12"}
    />
  </svg>
);
export default DownloadIcon;
