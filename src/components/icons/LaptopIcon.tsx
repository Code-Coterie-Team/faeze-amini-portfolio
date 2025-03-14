import * as React from "react";

const LaptopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 300 300"
    {...props}
  >
    <path
      fill="#039be5"
      d="M257.08 219.6V58.98H42.93V219.6H21.515v21.415h256.99V219.6zm-85.662 0h-42.831v-10.708h42.831zm64.246-32.123H64.344V80.397h171.32z"
    />
  </svg>
  );
};

export default LaptopIcon;
