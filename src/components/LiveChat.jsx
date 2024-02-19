import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatSlice";
import { generateRandomImg, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    //API Polling or Long Polling
    const pollTimer = setInterval(() => {
      // Implement the Poliing logic here
      console.log("Implement Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Hello ReactJS! 🙏🏼",
          img: generateRandomImg(),
        })
      );
    }, 2000);

    return () => clearInterval(pollTimer);
  }, []);
  return (
    <div className="border border-gray-300 w-full  bg-slate-100 rounded-xl">
      <div className="h-[550px] w-full p-2 rounded-xl overflow-y-scroll flex flex-col-reverse">
        {messages.map((m, i) => (
          <ChatMessage key={i} name={m.name} message={m.message} img={m.img} />
        ))}
      </div>
      <div className="flex w-full justify-center">
        <input
          type="text"
          className="border border-black w-3/4 m-2 px-3 py-1 rounded-2xl"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button
          type="submit"
          className=" w-1/6 m-2 px-3 rounded-2xl bg-black text-white"
          onClick={() =>
            dispatch(
              addMessage({
                name: "Amith Kashyap H",
                message: chatMessage,
                img: "https://avatars.githubusercontent.com/u/20740993?v=4",
              })
            )
          }
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
