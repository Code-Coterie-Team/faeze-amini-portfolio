import * as React from "react";

const BranchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M28.009 10.962a4.983 4.983 0 1 0-6.407 4.75 3.985 3.985 0 0 1-3.558 2.226h-3.986a5.941 5.941 0 0 0-3.986 1.554V9.864a4.983 4.983 0 1 0-1.993 0v12.157a5.034 5.034 0 1 0 2.422.132 3.985 3.985 0 0 1 3.557-2.223h3.986a5.979 5.979 0 0 0 5.632-4.051 4.982 4.982 0 0 0 4.333-4.917zM6.086 4.983a2.99 2.99 0 1 1 5.98 0 2.99 2.99 0 0 1-5.98 0zm5.98 21.923a2.99 2.99 0 1 1-5.98 0 2.99 2.99 0 0 1 5.98 0zm10.96-12.954a2.99 2.99 0 1 1 .001-5.98 2.99 2.99 0 0 1 0 5.98z"
    />
  </svg>
  );
};

export default BranchIcon;
