import { SVGProps } from "react";

const EmojiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      fill={props.fill || "#0D0F12"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.64998C7.3884 3.64998 3.64998 7.3884 3.64998 12C3.64998 16.6116 7.3884 20.35 12 20.35C16.6116 20.35 20.35 16.6116 20.35 12C20.35 7.3884 16.6116 3.64998 12 3.64998ZM2.34998 12C2.34998 6.67043 6.67043 2.34998 12 2.34998C17.3295 2.34998 21.65 6.67043 21.65 12C21.65 17.3295 17.3295 21.65 12 21.65C6.67043 21.65 2.34998 17.3295 2.34998 12ZM8.34998 8.99998C8.34998 8.64099 8.64099 8.34998 8.99998 8.34998H9.00998C9.36896 8.34998 9.65998 8.64099 9.65998 8.99998C9.65998 9.35896 9.36896 9.64998 9.00998 9.64998H8.99998C8.64099 9.64998 8.34998 9.35896 8.34998 8.99998ZM14.35 8.99998C14.35 8.64099 14.641 8.34998 15 8.34998H15.01C15.369 8.34998 15.66 8.64099 15.66 8.99998C15.66 9.35896 15.369 9.64998 15.01 9.64998H15C14.641 9.64998 14.35 9.35896 14.35 8.99998ZM8.51998 13.61L7.99998 14C8.51998 13.61 8.51998 13.61 8.51998 13.61C8.58942 13.6982 8.66504 13.7817 8.74271 13.8627C8.90134 14.0283 9.13818 14.2513 9.44479 14.4743C10.0605 14.9221 10.9291 15.35 12 15.35C13.0709 15.35 13.9394 14.9221 14.5552 14.4743C14.8618 14.2513 15.0986 14.0283 15.2572 13.8627C15.3363 13.7803 15.3951 13.7129 15.4328 13.668C15.4515 13.6457 15.465 13.629 15.4729 13.619L15.4805 13.6093C15.696 13.3224 16.1029 13.2647 16.39 13.48C16.6772 13.6954 16.7354 14.1028 16.52 14.39C15.9948 13.9961 15.968 13.976 16.52 14.39L16.5193 14.3909L16.5185 14.392C16.4896 14.4301 16.4593 14.4671 16.4285 14.5038C16.3743 14.5683 16.2965 14.6572 16.1958 14.7622C15.9951 14.9717 15.7007 15.2486 15.3198 15.5257C14.5605 16.0779 13.4291 16.65 12 16.65C10.5709 16.65 9.43945 16.0779 8.68016 15.5257C8.29927 15.2486 8.00486 14.9717 7.80412 14.7622C7.70348 14.6572 7.62561 14.5683 7.57143 14.5038C7.54039 14.4668 7.50972 14.4294 7.48066 14.3909C7.48066 14.3909 7.47998 14.39 7.99998 14L7.47998 14.39C6.977 13.7193 8.01699 12.9393 8.51998 13.61Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default EmojiIcon;
