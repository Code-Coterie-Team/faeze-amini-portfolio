import * as React from "react";

const IdeaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#ffce00"
        d="M9.14 20.577c0 .556.398.953.954.953h3.812c.556 0 .953-.397.953-.953v-.953H9.141zM12 2.469c-3.653 0-6.671 3.018-6.671 6.671 0 2.303 1.112 4.289 2.859 5.48v2.144c0 .556.397.953.953.953h5.718c.556 0 .953-.397.953-.953V14.62c1.747-1.191 2.86-3.177 2.86-5.48 0-3.653-3.019-6.671-6.672-6.671zm2.7 10.563-.794.556v2.224h-3.812v-2.224l-.794-.556A4.712 4.712 0 0 1 7.235 9.14 4.78 4.78 0 0 1 12 4.375a4.78 4.78 0 0 1 4.765 4.765 4.712 4.712 0 0 1-2.065 3.892z"
      />
    </svg>
  );
};

export default IdeaIcon;
