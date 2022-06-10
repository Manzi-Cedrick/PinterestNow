import React,{useState} from "react";
import { FaAngleLeft, FaEllipsisH, FaHeart, FaPinterest } from "react-icons/fa";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

function Inbox(props) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojis,setEmojis] = useState(false);
  const [messageText,setMessages] = useState("");
  const [allmessage,setallMessages] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const handleMessage = (e)=>{
      setMessages(e.target.value)
  }
  const handleSubmit = (e) =>{
      e.preventDefault();
      setMessages(''); 
  }
  return (
    <div className="chat-ui bg-white flex flex-col px-4 w-[30vw] h-[85vh] rounded-xl absolute top-[5em] right-[0%]">
      <div className="flex justify-between pt-3">
        <div
          className="h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full"
          onClick={() => props.setMessages(false)}
        >
          <FaAngleLeft className="text-[#808080cf] text-2xl" />
        </div>
        <div className="flex flex-col justify-center px-5">
          <p className="font-semibold">Manzi Cedrick </p>
        </div>
        <div className="h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full">
          <FaEllipsisH className="text-[#808080cf] text-2xl" />
        </div>
      </div>
      <div className="bg-zinc-100 h-[65vh] relative w-full">
        <div className="flex flex-col place-items-end p-1">
          <div className=" bg-zinc-300  rounded-2xl  min-w-[1em] max-w-[10em] p-2 break-words">
            <span>Hello how are you??</span>
          </div>
          <p className="pr-5 text-left text-[#00000072]">Yoo</p>
        </div>
      <div className="right-2 w-full flex place-items-end float-right">
      {
        showEmojis &&
        <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
        skinTone={SKIN_TONE_MEDIUM_DARK}
        groupNames={{ smileys_people: 'PEOPLE' }}
        native
      />}
      </div>
      </div>
      <div className="flex justify-between absolute bottom-2 pt-3">
        <div className="h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full">
          <FaPinterest className="text-[#808080cf] text-2xl" />
        </div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="pl-4 rounded-full mx-2 w-[20vw] py-3 outline-4 border-none focus:outline-blue-500 bg-zinc-100"
          placeholder="Search by name or email"
          onChange={handleMessage}
        //   value={chosenEmoji.emoji}
        />
        <button type='submit' className='opacity-0'></button>
        </form>
        <div onClick={() => setEmojis((prev)=>!prev)} className="h-[8vh] w-[8vh]  flex justify-center place-items-center hover:bg-slate-100 hover:cursor-pointer rounded-full">
          <FaHeart className="text-[red] text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Inbox;
