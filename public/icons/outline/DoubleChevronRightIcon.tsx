import { SVGProps } from "react";

const DoubleChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.78033 17.7803L13.7803 12.7803C14.0732 12.4874 14.0732 12.0126 13.7803 11.7197L8.78033 6.71967C8.48744 6.42678 8.01256 6.42678 7.71967 6.71967C7.42678 7.01256 7.42678 7.48744 7.71967 7.78033L12.1893 12.25L7.71967 16.7197C7.42678 17.0126 7.42678 17.4874 7.71967 17.7803C8.01256 18.0732 8.48744 18.0732 8.78033 17.7803ZM12.7803 17.7803L17.7803 12.7803C18.0732 12.4874 18.0732 12.0126 17.7803 11.7197L12.7803 6.71967C12.4874 6.42678 12.0126 6.42678 11.7197 6.71967C11.4268 7.01256 11.4268 7.48744 11.7197 7.78033L16.1893 12.25L11.7197 16.7197C11.4268 17.0126 11.4268 17.4874 11.7197 17.7803C12.0126 18.0732 12.4874 18.0732 12.7803 17.7803Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default DoubleChevronRightIcon;
