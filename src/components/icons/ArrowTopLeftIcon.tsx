import * as React from "react";

const ArrowTopLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M0 0h1v12H0V0zm1 1.09V0h11v1.09H1z"
      />
    </svg>
  );
};

export default ArrowTopLeftIcon;
