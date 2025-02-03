import * as React from "react";

const FileAddIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="gray"
      fillRule="evenodd"
      d="M7 2.75A3.25 3.25 0 0 0 3.75 6v12A3.25 3.25 0 0 0 7 21.25h4.343c.31 0 .615-.044.907-.13V18A4.75 4.75 0 0 1 17 13.25h3.12c.086-.292.13-.597.13-.907V6A3.25 3.25 0 0 0 17 2.75H7Zm12.19 12H17A3.25 3.25 0 0 0 13.75 18v2.19l5.44-5.44ZM2.25 6A4.75 4.75 0 0 1 7 1.25h10A4.75 4.75 0 0 1 21.75 6v6.343c0 1.26-.5 2.468-1.391 3.359l-5.657 5.657a4.75 4.75 0 0 1-3.359 1.391H7A4.75 4.75 0 0 1 2.25 18V6ZM12 5.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V12a.75.75 0 0 1-1.5 0V9.75H9a.75.75 0 0 1 0-1.5h2.25V6a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
  );
};

export default FileAddIcon;
