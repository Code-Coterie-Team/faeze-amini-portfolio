import * as React from "react";

const OpenARemoteWindowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.517 10.767-4.473-4.473 4.473-4.473-.696-.696L9 5.945v.697l4.821 4.821.696-.696zM3.375 6.321l4.58 4.581-4.58 4.58.696.697L9 11.25v-.696L4.071 5.625l-.696.696z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default OpenARemoteWindowIcon;
