import * as React from "react";

const ArrowTopRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M12 0v1H0V0h12zm-1.09 1H12v11h-1.09V1z"
      />
    </svg>
  );
};

export default ArrowTopRightIcon;
