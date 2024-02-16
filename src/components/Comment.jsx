import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-3 items-center py-3">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/17/17004.png"
          alt="user"
          className="w-10"
        />
      </div>
      <div>
        <h1 className="font-semibold">{name}</h1>
        <h3 className="text-[14px]">{text}</h3>
      </div>
    </div>
  );
};

export default Comment;
