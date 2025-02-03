import * as React from "react";

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#ffd54f"
        d="m12 17.77 6.18 3.73-1.64-7.03L22 9.74l-7.19-.62L12 2.5 9.19 9.12 2 9.74l5.45 4.73-1.63 7.03z"
      />
    </svg>
  );
};

export default StarIcon;
