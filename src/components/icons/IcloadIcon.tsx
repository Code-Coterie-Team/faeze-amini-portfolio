import * as React from "react";

const IcloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.451 6.75h.056c.893 0 1.75.356 2.382.989a3.379 3.379 0 0 1 0 4.772 3.364 3.364 0 0 1-2.382.989h-2.245v-1.125h2.245c.596 0 1.167-.237 1.588-.659a2.253 2.253 0 0 0 0-3.182 2.243 2.243 0 0 0-1.588-.659H12.48l-.14-.964a2.801 2.801 0 0 0-2.39-2.387 2.788 2.788 0 0 0-2.94 1.663l-.374.858-.91-.213a2.8 2.8 0 0 0-.637-.082c-.744 0-1.458.296-1.985.824a2.816 2.816 0 0 0 0 3.977c.527.528 1.24.824 1.985.824h2.806V13.5H5.088a3.92 3.92 0 0 1-2.957-1.306 3.94 3.94 0 0 1 2.203-6.502 3.92 3.92 0 0 1 1.652.045 3.91 3.91 0 0 1 6.346-1.215 3.93 3.93 0 0 1 1.119 2.228zm-1.872 4.335-1.478-1.478v6.115H8.983V9.648l-1.438 1.437-.795-.795 2.415-2.415h.795l2.415 2.415-.796.795z"
      clipRule="evenodd"
    />
  </svg>
  );
};

export default IcloadIcon;
