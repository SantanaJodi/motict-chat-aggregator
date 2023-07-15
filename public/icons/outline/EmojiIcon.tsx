import * as React from "react";
const EmojiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7728 3.64998C8.16122 3.64998 4.4228 7.3884 4.4228 12C4.4228 16.6116 8.16122 20.35 12.7728 20.35C17.3844 20.35 21.1228 16.6116 21.1228 12C21.1228 7.3884 17.3844 3.64998 12.7728 3.64998ZM3.1228 12C3.1228 6.67043 7.44325 2.34998 12.7728 2.34998C18.1024 2.34998 22.4228 6.67043 22.4228 12C22.4228 17.3295 18.1024 21.65 12.7728 21.65C7.44325 21.65 3.1228 17.3295 3.1228 12ZM9.1228 8.99998C9.1228 8.64099 9.41382 8.34998 9.7728 8.34998H9.7828C10.1418 8.34998 10.4328 8.64099 10.4328 8.99998C10.4328 9.35896 10.1418 9.64998 9.7828 9.64998H9.7728C9.41382 9.64998 9.1228 9.35896 9.1228 8.99998ZM15.1228 8.99998C15.1228 8.64099 15.4138 8.34998 15.7728 8.34998H15.7828C16.1418 8.34998 16.4328 8.64099 16.4328 8.99998C16.4328 9.35896 16.1418 9.64998 15.7828 9.64998H15.7728C15.4138 9.64998 15.1228 9.35896 15.1228 8.99998ZM9.2928 13.61L8.7728 14C9.2928 13.61 9.2928 13.61 9.2928 13.61C9.36225 13.6982 9.43787 13.7817 9.51553 13.8627C9.67417 14.0283 9.91101 14.2513 10.2176 14.4743C10.8333 14.9221 11.7019 15.35 12.7728 15.35C13.8437 15.35 14.7123 14.9221 15.328 14.4743C15.6346 14.2513 15.8714 14.0283 16.0301 13.8627C16.1091 13.7803 16.168 13.7129 16.2056 13.668C16.2244 13.6457 16.2378 13.629 16.2457 13.619L16.2533 13.6093C16.4688 13.3224 16.8757 13.2647 17.1628 13.48C17.45 13.6954 17.5082 14.1028 17.2928 14.39C16.7677 13.9961 16.7408 13.976 17.2928 14.39L17.2921 14.3909L17.2913 14.392C17.2624 14.4301 17.2321 14.4671 17.2013 14.5038C17.1472 14.5683 17.0693 14.6572 16.9687 14.7622C16.7679 14.9717 16.4735 15.2486 16.0926 15.5257C15.3333 16.0779 14.2019 16.65 12.7728 16.65C11.3437 16.65 10.2123 16.0779 9.45299 15.5257C9.0721 15.2486 8.77769 14.9717 8.57695 14.7622C8.47631 14.6572 8.39844 14.5683 8.34426 14.5038C8.31322 14.4668 8.28254 14.4294 8.25348 14.3909C8.25348 14.3909 8.2528 14.39 8.7728 14L8.2528 14.39C7.74982 13.7193 8.78982 12.9393 9.2928 13.61Z"
      fill={props.fill || "#0D0F12"}
    />
  </svg>
);
export default EmojiIcon;