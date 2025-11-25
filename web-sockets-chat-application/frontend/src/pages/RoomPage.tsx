import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Copy,
  Check,
  LogOut,
  Shield,
  Users,
  Activity,
  Hash,
  Radio,
  Zap,
  Signal,
} from "lucide-react";

import { ChatContext } from "../context/WSContext";

type Message = {
  id: string;
  username: string;
  message: string;
  isSelf: boolean;
  timestamp: string;
};

type UserStatus = {
  username: string;
  status: "connected" | "idle" | "transmitting";
  color: "cyan" | "emerald" | "purple";
};

export const RoomPage = () => {
  const { room_id } = useParams();
  const navigate = useNavigate();

  const {
    username,
    sendMessage,
    latestServerMessage,
    setLatestServerMessage,
    myUserId,
  } = useContext(ChatContext);

  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const [activeUsers, setActiveUsers] = useState<UserStatus[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getUserColor = (user: string): "cyan" | "emerald" | "purple" => {
    return user === username ? "cyan" : "emerald";
  };

  const sortUsers = (users: UserStatus[]) =>
    users.sort((a, b) =>
      a.username === username ? -1 : b.username === username ? 1 : 0
    );

  useEffect(() => {
    if (!latestServerMessage) return;

    const timer = setTimeout(() => {
      const { type, payload } = latestServerMessage;

      if (type === "chat") {
        const newMessage: Message = {
          id: crypto.randomUUID(),
          username: payload.username || "Unknown",
          message: payload.message || "",
          isSelf: payload.username === username,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setChatHistory((prev) => [...prev, newMessage]);
      } else if (type === "room_users") {
        const userList: UserStatus[] = payload.users.map(
          (u): UserStatus => ({
            username: u.username,
            status: "connected",
            color: getUserColor(u.username),
          })
        );
        setActiveUsers(sortUsers(userList));
      } else if (type === "user_joined") {
        if (
          payload.username &&
          !activeUsers.some((u) => u.username === payload.username)
        ) {
          const newUser: UserStatus = {
            username: payload.username,
            status: "connected",
            color: getUserColor(payload.username),
          };

          setActiveUsers((prev) => sortUsers([...prev, newUser]));

          setChatHistory((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              username: "SYSTEM",
              message: `${payload.username} has joined the sector.`,
              isSelf: false,
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }
      } else if (type === "user_left") {
        if (payload.username) {
          setActiveUsers((prev) =>
            prev.filter((u) => u.username !== payload.username)
          );

          setChatHistory((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              username: "SYSTEM",
              message: `${payload.username} has left the sector.`,
              isSelf: false,
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }
      }

      setLatestServerMessage(null);
    }, 0);

    return () => clearTimeout(timer);
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
        userId: myUserId!,
      },
    });

    if (success) {
      setInputMessage("");
      inputRef.current?.focus();
    } else {
      console.error("Failed to send message: WS not open.");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const copyRoomId = () => {
    if (room_id) {
      const el = document.createElement("textarea");
      el.value = room_id;
      document.body.appendChild(el);
      el.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } else {
          console.error('Fallback: document.execCommand("copy") failed.');
        }
      } catch (err) {
        console.error("Error copying text:", err);
      }
      document.body.removeChild(el);
    }
  };

  const getInitials = (name: string) =>
    name ? name.substring(0, 2).toUpperCase() : "??";

  return (
    <div className="relative flex h-screen w-full bg-[#0b1121] text-cyan-50 font-sans overflow-hidden selection:bg-cyan-500/30">
      {/* --- Background Textures --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(circle_at_100%_100%,rgba(16,185,129,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      {/* --- Sidebar / Info Panel (Left) --- */}
      <div className="hidden md:flex flex-col w-72 z-10 border-r border-cyan-500/10 bg-[#0f172a]/40 backdrop-blur-xl">
        <div className="p-6 border-b border-cyan-500/10">
          <div className="flex items-center gap-3 mb-1">
            <div className="relative p-2 rounded-lg bg-linear-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 group">
              <Activity
                size={20}
                className="text-cyan-400 group-hover:animate-pulse"
              />
              <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-bold text-lg tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400">
              NEXUS LINK
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest pl-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Secure Channel Active
          </div>
        </div>

        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {/* Room Info Card */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Hash size={12} /> Sector ID
            </label>
            <div className="group relative flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_-5px_rgba(6,182,212,0.3)]">
              <code className="text-sm font-mono text-cyan-300">
                {room_id || "UNKNOWN"}
              </code>
              <button
                onClick={copyRoomId}
                className="p-1.5 rounded hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                title="Copy Sector ID"
              >
                {isCopied ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          </div>

          {/* Active Units List */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <Users size={12} /> Active Units
              </div>
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] border border-cyan-500/20">
                {activeUsers.length}
              </span>
            </label>

            <div className="space-y-2">
              <AnimatePresence>
                {activeUsers.map((user) => (
                  <motion.div
                    key={user.username}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-slate-700/30 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300 hover:translate-x-1 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold
                         ${
                           user.username === username
                             ? "bg-cyan-900/30 border-cyan-500/50 text-cyan-300 shadow-[0_0_10px_-3px_rgba(6,182,212,0.5)]"
                             : "bg-emerald-900/30 border-emerald-500/50 text-emerald-300"
                         }
                       `}
                      >
                        {getInitials(user.username)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-200 flex items-center gap-2">
                          {user.username}
                          {user.username === username && (
                            <span className="text-[9px] px-1 rounded bg-slate-700 text-slate-400">
                              YOU
                            </span>
                          )}
                        </div>
                        <div
                          className={`text-[10px] capitalize ${
                            user.username === username
                              ? "text-cyan-500"
                              : "text-emerald-500"
                          }`}
                        >
                          {user.status}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        user.username === username
                          ? "bg-cyan-500 shadow-[0_0_5px_cyan]"
                          : "bg-emerald-500 shadow-[0_0_5px_emerald]"
                      } animate-pulse`}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Frequency Visualizer */}
          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-3">
              <span className="flex items-center gap-1">
                <Signal size={10} /> FREQUENCY
              </span>
              <span className="animate-pulse text-emerald-500/70">STABLE</span>
            </div>

            {/* Animated Bars */}
            <div className="flex items-end justify-between h-8 gap-1 px-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-cyan-500/20 rounded-sm"
                  style={{
                    animation: `equalizer 1.5s infinite ease-in-out`,
                    animationDelay: `${i * 0.1}s`,
                    height: "20%",
                  }}
                />
              ))}
            </div>
            <style>{`
               @keyframes equalizer {
                 0% { height: 20%; background-color: rgba(6,182,212,0.2); }
                 50% { height: 80%; background-color: rgba(52,211,153,0.4); }
                 100% { height: 20%; background-color: rgba(6,182,212,0.2); }
               }
             `}</style>
          </div>
        </div>

        <div className="p-4 border-t border-cyan-500/10 bg-slate-900/30">
          <button
            onClick={handleLogout}
            className="group w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 text-red-400 transition-all text-sm font-medium overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              <LogOut size={16} /> Abort Session
            </span>
            <div className="absolute inset-0 bg-red-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>

      {/* --- Main Chat Area --- */}
      <div className="flex-1 flex flex-col relative z-10 bg-[#0b1121]/60 backdrop-blur-sm">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md">
          <div className="flex items-center gap-2 font-bold text-cyan-400">
            <Shield size={18} />
            <span>SECURE CHAT</span>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-white"
          >
            <LogOut size={18} />
          </button>
        </header>

        {/* Chat Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {chatHistory.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-40 select-none pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-linear-to-b from-cyan-500/20 to-transparent flex items-center justify-center mb-6 border border-cyan-500/20 shadow-[0_0_30px_-10px_rgba(6,182,212,0.5)]">
                <Radio size={40} className="text-cyan-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-light text-cyan-100 tracking-widest uppercase">
                Awaiting Signal
              </h3>
              <p className="text-sm text-cyan-500/60 mt-2 font-mono">
                Encryption keys exchanged. Channel open.
              </p>
            </div>
          ) : (
            chatHistory.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex w-full ${
                  msg.isSelf ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex flex-col max-w-[85%] md:max-w-[60%] ${
                    msg.isSelf ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1 px-1">
                    {/* System messages are marked differently */}
                    {msg.username !== "SYSTEM" && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider ${
                          msg.isSelf ? "text-cyan-400" : "text-slate-400"
                        }`}
                      >
                        {msg.username}
                      </span>
                    )}
                    {msg.username === "SYSTEM" && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500/70">
                        {msg.username}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-600 font-mono">
                      {msg.timestamp}
                    </span>
                  </div>

                  <div
                    className={`
                      relative px-5 py-3 text-sm md:text-base leading-relaxed group
                      ${
                        msg.isSelf
                          ? "bg-linear-to-br from-cyan-600 to-blue-700 text-white rounded-2xl rounded-tr-sm shadow-[0_4px_20px_-5px_rgba(8,145,178,0.4)]"
                          : msg.username === "SYSTEM"
                          ? "bg-slate-900/90 text-slate-400 border border-emerald-500/30 rounded-lg backdrop-blur-md italic text-center text-xs w-full"
                          : "bg-slate-800/80 text-slate-200 border border-slate-700 rounded-2xl rounded-tl-sm backdrop-blur-md hover:border-cyan-500/30 transition-colors"
                      }
                   `}
                  >
                    {msg.message}
                  </div>
                </div>
              </motion.div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Zone */}
        <div className="p-4 md:p-6 relative z-20">
          <div className="max-w-4xl mx-auto relative group">
            {/* Glowing border container with focus interaction */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 via-emerald-500 to-cyan-500 rounded-xl opacity-30 blur transition duration-500 group-focus-within:opacity-70 group-focus-within:blur-md"></div>

            <form
              onSubmit={handleSendMessage}
              className="relative flex items-center gap-2 bg-[#0f172a] border border-white/10 rounded-xl p-2 shadow-2xl transition-colors group-focus-within:bg-[#0b1121] group-focus-within:border-cyan-500/30"
            >
              <div className="hidden md:flex items-center justify-center w-10 h-10 text-slate-500 transition-colors group-focus-within:text-cyan-400">
                <Zap size={18} />
              </div>

              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Enter encrypted transmission..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-slate-100 placeholder-slate-600 font-medium"
                autoFocus
              />

              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-3 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500 transition-all hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
              >
                <Send size={18} strokeWidth={2.5} />
              </button>
            </form>
          </div>
          <div className="max-w-4xl mx-auto mt-2 text-center flex justify-center items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
            <p className="text-[10px] text-slate-600 font-mono tracking-widest">
              SECURE PROTOCOL v4.2
            </p>
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
