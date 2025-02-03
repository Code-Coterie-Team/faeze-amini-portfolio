import * as React from "react";

const UserCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M32 15.984C32 7.161 24.832 0 16 0S0 7.16 0 15.984c0 4.86 2.208 9.239 5.664 12.18.032.032.064.032.064.064.288.224.576.447.896.671.16.096.288.224.448.352A15.958 15.958 0 0 0 16.032 32c3.328 0 6.4-1.023 8.96-2.75.16-.095.288-.223.448-.319.288-.224.608-.448.896-.671.032-.032.064-.032.064-.064 3.392-2.973 5.6-7.353 5.6-12.212zM16 29.986c-3.008 0-5.76-.959-8.032-2.557.032-.256.096-.512.16-.768a8.39 8.39 0 0 1 .832-1.982 7.03 7.03 0 0 1 1.28-1.63 8.992 8.992 0 0 1 1.632-1.279 8.082 8.082 0 0 1 1.952-.799A8.3 8.3 0 0 1 16 20.683a8.37 8.37 0 0 1 5.856 2.334 7.99 7.99 0 0 1 1.728 2.59c.224.575.384 1.182.48 1.822-2.304 1.598-5.056 2.557-8.064 2.557zm-4.896-14.801a4.98 4.98 0 0 1-.416-2.046c0-.703.128-1.407.416-2.046a5.673 5.673 0 0 1 1.152-1.694 5.68 5.68 0 0 1 1.696-1.151A4.995 4.995 0 0 1 16 7.832c.736 0 1.408.128 2.048.416a5.68 5.68 0 0 1 1.696 1.15c.48.48.864 1.056 1.152 1.695.288.64.416 1.343.416 2.046 0 .735-.128 1.407-.416 2.046a5.673 5.673 0 0 1-1.152 1.694 5.68 5.68 0 0 1-1.696 1.151 5.43 5.43 0 0 1-4.128 0 5.68 5.68 0 0 1-1.696-1.15 5.05 5.05 0 0 1-1.12-1.695zm14.848 10.613c0-.064-.032-.096-.032-.16a10.44 10.44 0 0 0-1.376-2.813c-.608-.863-1.312-1.63-2.176-2.27a10.35 10.35 0 0 0-2.08-1.214 5.64 5.64 0 0 0 .928-.768c.48-.48.896-.99 1.248-1.566a7.384 7.384 0 0 0 .8-1.854c.192-.671.256-1.343.256-2.014 0-1.055-.192-2.046-.576-2.941A7.598 7.598 0 0 0 21.312 7.8a7.69 7.69 0 0 0-2.4-1.598c-.896-.384-1.888-.576-2.944-.576s-2.048.192-2.944.576c-.896.383-1.728.927-2.4 1.63a7.681 7.681 0 0 0-1.6 2.398c-.384.895-.576 1.886-.576 2.94 0 .704.096 1.376.288 2.015.192.671.448 1.278.8 1.854.32.575.768 1.087 1.248 1.566.288.288.608.544.96.768-.768.351-1.472.767-2.08 1.246a11.09 11.09 0 0 0-2.176 2.238 10.002 10.002 0 0 0-1.376 2.813c-.032.064-.032.128-.032.16-2.528-2.557-4.096-6.01-4.096-9.846C1.984 8.28 8.288 1.982 16 1.982S30.016 8.28 30.016 15.984c0 3.836-1.568 7.289-4.064 9.814z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
  );
};

export default UserCircleIcon;
