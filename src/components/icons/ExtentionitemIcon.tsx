import * as React from "react";

const ExtentionitemIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m18 2 2-2h10l2 2v10l-2 2H20l-2-2V2zm2 0v10h10V2H20zM0 20V8l2-2h10l2 2v10h10l2 2v10l-2 2H2l-2-2V20zm12-2V8H2v10h10zm0 2H2v10h10V20zm2 10h10V20H14v10z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="currentColor"
            d="M0 0h32v32H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ExtentionitemIcon;
