import * as React from "react";

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.333 0a11 11 0 0 0-8.24 18.293L1.333 30.507l1.494 1.333L13.56 19.68A11.001 11.001 0 1 0 20.333.013V0zm0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"
      />
    </svg>
  );
};

export default SearchIcon;
