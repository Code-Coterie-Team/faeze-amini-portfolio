import React from "react";

function ModalShow({ title, status }: IShowModalStatus) {
  return (
    <div className="absolute left-1/2">
      <span
        className={`${
          status === "successful" ? " bg-green-600" : " bg-red-600"
        } px-4 py-2 text-gray-50 text-base top-5 rounded-2xl `}
      >
        {title}
      </span>
    </div>
  );
}

export default ModalShow;
