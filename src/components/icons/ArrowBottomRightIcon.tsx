import * as React from "react";

const ArrowBottomRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M12 12h-1V0h1v12zm-1-1.09V12H0v-1.09h11z"
      />
    </svg>
  );
};

export default ArrowBottomRightIcon;
