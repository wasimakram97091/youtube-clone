import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div className="flex items-center shadow-lg p-2 xs:p-1">
      <img className="h-6 cursor-pointer" src="https://i.pinimg.com/1200x/34/60/3c/34603ce8a80b1ce9a768cad7ebf63c56.jpg" alt="user-icon" />
      <span className="font-bold px-2 xs:font-medium xs:px-1 md:px-3">{name}</span>
      <span className="xs:text-xs md:text-base">{message}</span>
    </div>
  );
}

export default ChatMessage;
