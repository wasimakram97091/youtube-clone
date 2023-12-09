import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((state) => state.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  const subitMessages = () => {
    dispatch(
      addMessage({
        name: "Wasim Akram",
        message: liveMessage,
      })
    );

    setLiveMessage("");
  };

  const enterSubmit = (event) => {
    if (event.key === "Enter") {
      subitMessages();
    }
  };

  return (
    <>
      <h1 className="xs:font-normal xs:my-2">Live Chat :</h1>
      <div className="w-full p-2 h-[200px] sml:h-[250px] ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse xs:p-0 sml:ml-0">
        <div>
          {ChatMessages.map((c, index) => (
            <ChatMessage name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>
      <div className="w-full p-2 ml-2 border border-b-black flex justify-between xs:p-1 xs:ml-1">
        <input
          className=" px-3 outline-none xs:w-full xs:px-1"
          type="text"
          placeholder="chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          onKeyPress={(event) => enterSubmit(event)}
        />
        <button className="px-2 mx-2 " onClick={() => subitMessages()}>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </>
  );
};

export default LiveChat;
