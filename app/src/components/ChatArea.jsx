import { useEffect, useRef, useState } from "react";
import { useSocketContext } from "../context/SocketContext";
import Message from "./Message";

const ChatArea = ({ conversation }) => {
  const socket = useSocketContext();
  const formRef = useRef(null);
  const [chatInput, setChatInput] = useState("");

  const keyPressHandler = (e) => {
    if (e.key === "Enter" && e.target.name === "message" && !e.shiftKey) {
      e.preventDefault();
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (
      chatInput !== "" &&
      chatInput.replace(/(\r\n|\n|\r)/gm, "") !== "" &&
      conversation?.otherUser?.email
    ) {
      socket.emit("message:send", {
        receiverEmail: conversation?.otherUser?.email,
        text: chatInput,
      });
      socket.emit("conversation:get");
    }
    setChatInput("");
  };

  return (
    <div className="chat-area flex-1 flex flex-col">
      <div className="flex-3">
        <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">
          {conversation?.otherUser ? `Chat with ` : "Select a conversation"}
          {conversation?.otherUser?.name && (
            <b>{conversation.otherUser.name}</b>
          )}
        </h2>
      </div>
      <div className="messages flex-1 overflow-auto">
        {conversation?.messages.map((message, index) => {
          return (
            <Message
              key={message.id}
              message={message}
              otherUser={conversation?.otherUser}
            />
          );
        })}
      </div>
      <div className="flex-2 pt-4 pb-10">
        <div className="write bg-white shadow flex rounded-lg">
          <form
            ref={formRef}
            onSubmit={handleSendMessage}
            className="flex-1 flex"
          >
            <div className="flex-1">
              <textarea
                name="message"
                className="w-full block outline-none py-4 px-4 bg-transparent"
                rows="3"
                value={chatInput}
                placeholder="Type a message..."
                onChange={(e) => setChatInput(e.target.value)}
                autoFocus
              ></textarea>
            </div>
            <div className=" p-2 px-5 flex content-center items-center">
              <button
                type="submit"
                className="bg-blue-400 w-10 h-10 rounded-full inline-block"
              >
                <span className="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
