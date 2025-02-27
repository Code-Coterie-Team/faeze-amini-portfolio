import * as React from "react";

const ArrowBottomLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={6}
      height={6}
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 12v-1h12v1H0zm1.09-1H0V0h1.09v11z"
      />
    </svg>
  );
};

export default ArrowBottomLeftIcon;
