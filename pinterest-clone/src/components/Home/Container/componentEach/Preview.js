import React, { useState } from "react";
import NavBar from "../../NavBar";
import { FaDownload, FaEllipsisH, FaHeart, FaPinterest } from "react-icons/fa";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

function Preview() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojis, setEmojis] = useState(false);
  const [messageText, setMessages] = useState("");
  const [allmessage, setallMessages] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const handleMessage = (e) => {
    setMessages(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages("");
  };
  return (
    <div>
      <NavBar />
      <div className="AddPin relative bg-white m-auto w-[60vw] rounded-xl my-5  flex justify-between px-1">
        <div className="flex p-1 ">
          <div className="max-w-[30vw]  flex overflow-hidden flex-col justify-center place-items-center rounded-xl bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1654596487129-09642f47b397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzU2Mzh8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTQ2ODM3Njk&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
            />
          </div>
        </div>
        <div className="px-6">
          <div className="flex gap-2 py-5">
            <div className="h-[6vh] w-[6vh] p-3 flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full">
              <FaEllipsisH className="text-[#808080cf] text-2xl" />
            </div>
            <div className="h-[6vh] w-[6vh] p-3 flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full">
              <FaDownload className="text-[#808080cf] text-2xl" />
            </div>
            <div className="h-[6vh] w-[6vh] p-3 flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full">
              <FaHeart className="text-[#808080cf] text-2xl" />
            </div>
          </div>
          <div className="text-5xl font-bold text-left">
            <span>Adobe Photoshop Redesign</span>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex gap-2 ">
              <div className="w-20 h-20 rounded-full bg-orange-500"></div>
              <div className="block text-left">
                <p className="font-semibold pt-2 text-[20px]">datanow.name</p>
                <p className="text-[12px] text-[#00000070]">
                  datanow.lastMessage
                </p>
              </div>
            </div>
            <button className="bg-zinc-200 text-black h-12 rounded-full px-8 font-bold  hover:bg-slate-300">
              Follow
            </button>
          </div>
          <div className="relative w-full">
            <div className="flex flex-row  p-1">
              <div className="w-10 h-10 rounded-full bg-orange-500"></div>
              <p className="px-2 text-left text-[12px] text-[#00000072]">
                cedrickmanzii0@gmail.com
              </p>
              <span className="font-semibold px-1">Hello how are you??</span>
            </div>
            <div className="right-2 w-full flex place-items-end float-right">
              {showEmojis && (
                <Picker
                  onEmojiClick={onEmojiClick}
                  disableAutoFocus={true}
                  skinTone={SKIN_TONE_MEDIUM_DARK}
                  groupNames={{ smileys_people: "PEOPLE" }}
                  native
                  position={"left"}
                />
              )}
            </div>
          </div>
          <div className="flex justify-between absolute bottom-2 pt-3">
            <div className="h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full">
              <FaPinterest className="text-[#808080cf] text-2xl" />
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="pl-4 rounded-full mx-2 w-[25vw] py-3 outline-4 border-none focus:outline-blue-500 bg-zinc-100"
                placeholder="Search by name or email"
                onChange={handleMessage}
                //   value={chosenEmoji.emoji}
              />
              <button type="submit" className="opacity-0"></button>
            </form>
            <div
              onClick={() => setEmojis((prev) => !prev)}
              className="h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full"
            >
              <FaHeart className="text-[red] text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
