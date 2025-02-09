import React from "react";

function page() {
  return (
    <div>
      <div className=" px-4 py-6">
        <div className="flex flex-col justify-center items-center mt-24 gap-4">
          <p className=" text-base font-semibold text-textActive">Case Study</p>
          <h1 className="text-6xl text-gray-50 font-semibold pt-3 tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-xl max-w-3xl text-center pt-2">
            The management panel enables you to efficiently manage the products
            section with ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
