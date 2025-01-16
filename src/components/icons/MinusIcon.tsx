import * as React from "react";

const MinusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M14 8v1H3V8h11Z" />
  </svg>
  );
};

export default MinusIcon;