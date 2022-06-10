import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./chat.css";
import Inbox from "./Inbox";
function ChatUI() {
    const [showMessages, setMessages] = useState(false);
  const data = [
    {
      id: 1,
      name: "Manzi Cedrick",
      lastMessage: "Hello how are you?",
    },
    {
      id: 2,
      name: "Cyber Trunck",
      lastMessage: " NEw Cyber out Now!!",
    },
    {
      id: 3,
      name: "Mico Sydney",
      lastMessage: "Check my new pins they are amazing",
    },
  ];
  return (
    <>
      {showMessages ? (
        <Inbox showMessages={showMessages} setMessages={setMessages}/>
      ) : (
        <div className="chat-ui bg-white flex flex-col px-4  rounded-xl absolute top-[5em] right-0">
          <form>
            <h2 className="p-4 text-center font-bold">Inbox</h2>
            <input
              type="text"
              className="px-2 w-[25vw] rounded-xl my-5 py-3 outline-4 border-none focus:outline-blue-500 bg-zinc-100"
              placeholder="Search by name or email"
            />
            <button type="submit" className="opacity-0 "></button>
          </form>
          <ul className="px-2 flex-col gap-4">
            {data.map((datanow, index) => (
              <li
                key={index}
                className="user-suggests flex hover:cursor-pointer justify-between my-2 hover:bg-zinc-100 duration-500 origin-center py-2 px-2 rounded-xl"
                onClick={() => setMessages((prev) => !prev)}
              >
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-full bg-orange-500"></div>
                  <div className="block text-left">
                    <p className="font-semibold">{datanow.name}</p>
                    <p className="text-[14px] text-[#00000070]">
                      {datanow.lastMessage}
                    </p>
                  </div>
                </div>
                <div className="p-5 delete opacity-0 duration-500">
                  <FaTrashAlt className="text-[14px]" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ChatUI;
