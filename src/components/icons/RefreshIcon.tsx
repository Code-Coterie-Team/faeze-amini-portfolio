import * as React from "react";

const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.258 2.83A6.751 6.751 0 0 0 9 15.75a6.75 6.75 0 0 0 2.061-13.18l-.34 1.073a5.625 5.625 0 1 1-4.961.758l.498-1.57z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 3H2V2h3.5l.5.5V6H5V3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default RefreshIcon;
