import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";

import { ArrowUp } from "lucide-react";
import { ChatContext } from "../context/WSContext";

type Message = {
  username: string;
  message: string;
  isSelf: boolean;
};

export const RoomPage = () => {
  const { room_id } = useParams();

  const { username, sendMessage, latestServerMessage, setLatestServerMessage } =
    useContext(ChatContext);

  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (latestServerMessage && latestServerMessage.type === "chat_message") {
      const { payload } = latestServerMessage;

      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          {
            username: payload.username || "System",
            message: payload.message || "",
            isSelf: payload.username === username,
          },
        ]);

        setLatestServerMessage(null);
      }, 0);
    }
  }, [latestServerMessage, username, setLatestServerMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === "" || !room_id) return;

    const success = sendMessage({
      type: "chat",
      payload: {
        room_id: room_id,
        username: username,
        message: inputMessage.trim(),
      },
    });

    if (success) {
      setInputMessage("");
    } else {
      console.error("Failed to send message: WS not open.");
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-900">
      <header className="py-3 px-4 bg-gray-800 rounded-lg shadow-lg mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">
          Room: <span className="text-white">{room_id}</span>
        </h1>
        <p className="text-md text-gray-400">
          Logged in as:{" "}
          <span className="text-white font-medium">{username}</span>
        </p>
      </header>

      {/* Chat Messages Area - scrollable and takes up remaining space */}
      <div className="flex-1 overflow-y-auto space-y-3 p-4 bg-gray-800 rounded-lg shadow-inner mb-4">
        {chatHistory.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <ArrowUp className="w-10 h-10 mx-auto mb-2 text-gray-600" />
            <p>Start chatting! Messages sent here are encrypted.</p>
            <p className="text-sm mt-2">
              Note: This is a secure channel. Use two browser tabs (or
              incognito) to test multi-user chat.
            </p>
          </div>
        ) : (
          chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isSelf ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-2 rounded-xl shadow-md ${
                  msg.isSelf
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-700 text-gray-100 rounded-tl-none"
                }`}
              >
                {!msg.isSelf && (
                  <p className="text-xs font-bold mb-1 opacity-75">
                    {msg.username}
                  </p>
                )}
                <p>{msg.message}</p>
              </div>
            </div>
          ))
        )}
        {/* Empty div used as a scroll target */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input Form */}
      <form onSubmit={handleSendMessage} className="flex space-x-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          autoFocus
        />
        <button
          type="submit"
          disabled={inputMessage.trim() === ""}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl shadow-lg transition duration-150 ease-in-out disabled:opacity-50 flex items-center justify-center"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};
