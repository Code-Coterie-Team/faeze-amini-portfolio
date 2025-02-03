import * as React from "react";

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      fill="none"
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 -mr-1"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  );
};

export default ArrowRightIcon;
