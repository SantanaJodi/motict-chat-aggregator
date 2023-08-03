import * as React from "react";
const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.49998 5.64998C9.30668 5.64998 9.14998 5.80668 9.14998 5.99998C9.14998 6.91125 8.41125 7.64998 7.49998 7.64998H4.99998C4.25439 7.64998 3.64998 8.25439 3.64998 8.99998V17C3.64998 17.7456 4.25439 18.35 4.99998 18.35H19C19.7456 18.35 20.35 17.7456 20.35 17V8.99998C20.35 8.25439 19.7456 7.64998 19 7.64998H16.5C15.5887 7.64998 14.85 6.91125 14.85 5.99998C14.85 5.80668 14.6933 5.64998 14.5 5.64998H9.49998ZM7.84998 5.99998C7.84998 5.08871 8.58871 4.34998 9.49998 4.34998H14.5C15.4112 4.34998 16.15 5.08871 16.15 5.99998C16.15 6.19327 16.3067 6.34998 16.5 6.34998H19C20.4635 6.34998 21.65 7.53642 21.65 8.99998V17C21.65 18.4635 20.4635 19.65 19 19.65H4.99998C3.53642 19.65 2.34998 18.4635 2.34998 17V8.99998C2.34998 7.53642 3.53642 6.34998 4.99998 6.34998H7.49998C7.69328 6.34998 7.84998 6.19328 7.84998 5.99998ZM12 10.65C10.7021 10.65 9.64998 11.7021 9.64998 13C9.64998 14.2978 10.7021 15.35 12 15.35C13.2978 15.35 14.35 14.2978 14.35 13C14.35 11.7021 13.2978 10.65 12 10.65ZM8.34998 13C8.34998 10.9841 9.98414 9.34998 12 9.34998C14.0158 9.34998 15.65 10.9841 15.65 13C15.65 15.0158 14.0158 16.65 12 16.65C9.98414 16.65 8.34998 15.0158 8.34998 13Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default CameraIcon;
