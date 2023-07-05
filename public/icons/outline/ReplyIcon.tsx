import { SVGProps } from "react";

const ReplyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.64252 6.07274C9.88768 5.82207 9.88157 5.42171 9.62888 5.17851C9.3762 4.93531 8.97261 4.94137 8.72746 5.19204L5.45679 8.53626C4.84774 9.15901 4.84774 10.1491 5.45679 10.7719L8.72746 14.1161C8.97261 14.3668 9.3762 14.3728 9.62888 14.1296C9.88157 13.8864 9.88768 13.4861 9.64252 13.2354L6.75831 10.2863H10.5167C14.4977 10.2863 17.725 13.4879 17.725 17.4372V18.3676C17.725 18.7169 18.0105 19 18.3625 19C18.7146 19 19 18.7169 19 18.3676V17.4372C19 12.7894 15.2019 9.02157 10.5167 9.02157H6.75855L9.64252 6.07274Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default ReplyIcon;