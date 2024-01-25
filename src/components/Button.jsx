import React from "react";

const Button = ({ name }) => {
  return (
    <div className="inline-flex justify-center items-center px-2 py-1 m-1 border font-[500] bg-slate-100 text-sm rounded-lg hover:bg-slate-200">
      <span className="">{name}</span>
    </div>
  );
};

export default Button;
