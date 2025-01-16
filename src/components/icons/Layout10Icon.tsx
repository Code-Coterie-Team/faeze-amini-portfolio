import * as React from "react";

const Layout10Icon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.5 1.25H3.75L2.5 2.5v13.75l1.25 1.25H17.5l1.25-1.25V2.5L17.5 1.25Zm-7.5 15H3.75V2.5H10v13.75Zm7.5 0h-6.25V2.5h6.25v13.75Z"
    />
  </svg>
  );
};

export default Layout10Icon;
