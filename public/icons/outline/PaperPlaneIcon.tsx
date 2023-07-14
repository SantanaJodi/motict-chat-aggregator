import { SVGProps } from "react";

const PaperPlaneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.4596 3.54038C20.6451 3.72592 20.7009 4.00484 20.601 4.24748L13.601 21.2475C13.5014 21.4895 13.2663 21.6481 13.0046 21.65C12.7429 21.6518 12.5056 21.4966 12.4025 21.256L9.50495 14.495L2.74393 11.5974C2.50338 11.4943 2.34812 11.2571 2.34999 10.9954C2.35186 10.7337 2.51049 10.4986 2.75249 10.399L19.7525 3.39895C19.9951 3.29904 20.274 3.35483 20.4596 3.54038ZM10.7708 14.1484L12.988 19.3219L18.1615 6.75771L10.7708 14.1484ZM17.2423 5.83847L4.67803 11.012L9.85153 13.2292L17.2423 5.83847Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default PaperPlaneIcon;
