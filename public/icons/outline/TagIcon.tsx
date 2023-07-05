import { SVGProps } from "react";

const TagIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.4149 5.2004C8.54122 5.07209 8.71255 5 8.89119 5H20.2902C21.2345 5 22 5.77761 22 6.73684V17.2632C22 18.2224 21.2345 19 20.2902 19H8.89119C8.71255 19 8.54122 18.9279 8.4149 18.7996L2.19729 12.4838C1.93424 12.2166 1.93424 11.7834 2.19729 11.5162L8.4149 5.2004ZM9.1702 6.36842L3.62615 12L9.1702 17.6316H20.2902C20.4905 17.6316 20.6528 17.4666 20.6528 17.2632V6.73684C20.6528 6.53337 20.4905 6.36842 20.2902 6.36842H9.1702Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default TagIcon;
