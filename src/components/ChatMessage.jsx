import React from "react";

const ChatMessage = ({ img, name, message }) => {
  //   return (
  //     <div className="flex gap-2 items-center my-2 ">
  //       <div>
  //         <img src={img} alt="channel-logo" className="w-10 rounded-full" />
  //       </div>

  //       <h2 className="text-[14px] font-semibold">{name}</h2>
  //       <h4 className="text-[13px]">{message}</h4>
  //     </div>
  //   );

  return (
    <div className="flex gap-2  my-2 w-full  items-center">
      <div>
        <img src={img} alt="channel-logo" className="w-10 rounded-full" />
      </div>

      <span className=" text-[14px] font-semibold ">{name}</span>
      <span className="text-[13px] ">{message}</span>
    </div>
  );
};

export default ChatMessage;
