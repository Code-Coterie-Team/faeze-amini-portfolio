import * as React from "react";

const NextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#cfd8dc"
        d="M17.094 3.387C10.479-.503 2.074 4.248 2 11.917c-.07 7.49 7.854 12.326 14.454 9.03l-7.7-10.914-.05 8.016c0 .727-1.72.727-1.72 0l.015-11.065c0-.578 1.451-.625 1.755-.123l8.693 13.52c6.17-3.973 6.086-13.208-.353-16.994zm-.078 13.138-1.672-2.41V6.984c0-.545 1.672-.545 1.672 0v9.54z"
      />
    </svg>
  );
};

export default NextIcon;
