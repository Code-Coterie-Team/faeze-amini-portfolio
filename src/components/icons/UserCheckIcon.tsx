import * as React from "react";

const UserCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#afb42b"
        d="m20.35 12.25 1.4 1.41-6.53 6.59-3.47-3.5 1.4-1.41 2.07 2.08 5.13-5.17m-11.1 4.5 3 3h-10v-2c0-2.21 3.58-4 8-4l1.89.11-2.89 2.89m1-13a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z"
      />
    </svg>
  );
};

export default UserCheckIcon;
