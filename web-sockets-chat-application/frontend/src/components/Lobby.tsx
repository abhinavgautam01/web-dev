import { useState, useEffect, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashIcon } from "../icons/HashIcon";
import { UserIcon } from "../icons/UserIcon";
import { KeyIcon } from "../icons/KeyIcon";
import { CyberInput } from "./CyberInput";
import { CyberButton } from "./CyberButton";
import { SignalBars } from "./SignalBars";

import { useNavigate } from "react-router-dom";
import type { MessagePayload } from "../types/message_payload";
import { useChat } from "../hooks/useWebSocket";

export const Lobby = () => {
  const navigate = useNavigate();

  const { username, setUsername, sendMessage, latestServerMessage } = useChat();

  const [roomName, setRoomName] = useState<string>("");
  const [roomKey, setRoomKey] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"create" | "join">("create");
  const [text, setText] = useState("");

  const handleHostClick = () => {
    if (!roomName) {
      console.error("Channel Name is required.");
      return;
    }

    const message: MessagePayload = {
      type: "host",
      payload: {
        room_id: roomName,
        username: username || "Anonymous",
      },
    };

    sendMessage(message);

  };

  const handleJoinClick = () => {
    if (!roomKey) {
      console.error("Access Token is required.");
      return;
    }

    const message: MessagePayload = {
      type: "join",
      payload: {
        room_id: roomKey,
        username: username || "Anonymous",
      },
    };

    sendMessage(message);
  };

  useEffect(() => {
    if (latestServerMessage) {
      const data = latestServerMessage;
      if(data.type === "error"){
        console.log(data.payload.message)
      }
      if (
        (data.type === "host_success" || data.type === "join_success") &&
        data.payload?.room_id
      ) {
        navigate(`/room/${data.payload.room_id}`);
      }
    }
  }, [latestServerMessage, navigate]);

  useEffect(() => {
    const fullText = "EXECUTE_FILE_CHAT.EXE...";
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden font-mono text-emerald-400 selection:bg-cyan-500/30 selection:text-white">
      {/* Background elements omitted for brevity - assuming they remain */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[50px_50px] opacity-40" />
      <div className="absolute inset-0 z-30 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="relative z-40 w-full max-w-[650px] p-6"
      >
        <div className="relative bg-[#030712]/80 border border-emerald-500/30 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] p-8 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70" />

          <div className="flex justify-between items-end mb-10 border-b border-emerald-900/50 pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-600 uppercase">
                  System Online
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                {text}
                <span className="text-cyan-400 animate-pulse">_</span>
              </h1>
            </div>
            <div className="hidden sm:block">
              <SignalBars />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 p-1 bg-black/40 rounded-lg border border-white/5">
            {(["create", "join"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-md ${
                  activeTab === tab
                    ? "text-black bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                    : "text-emerald-700 hover:text-emerald-400 hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative h-[280px]">
            {" "}
            {/* Fixed height prevents layout shift */}
            <AnimatePresence mode="wait">
              {activeTab === "create" ? (
                <motion.div
                  key="create"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-5">
                    <CyberInput
                      label="Operator Name"
                      icon={<UserIcon className="w-5 h-5" />}
                      placeholder="Enter Alias"
                      value={username}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                      }
                    />
                    <CyberInput
                      label="Encryption Channel *"
                      icon={<HashIcon className="w-5 h-5" />}
                      placeholder="Channel Name"
                      value={roomName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setRoomName(e.target.value)
                      }
                    />
                  </div>
                  <CyberButton variant="host" onClick={handleHostClick}>
                    Initialize Host
                  </CyberButton>
                </motion.div>
              ) : (
                <motion.div
                  key="join"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-5">
                    <CyberInput
                      label="Operator Name"
                      icon={<UserIcon className="w-5 h-5" />}
                      placeholder="Enter Alias"
                      value={username}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                      }
                    />
                    <CyberInput
                      label="Access Token *"
                      icon={<KeyIcon className="w-5 h-5" />}
                      placeholder="Room ID"
                      value={roomKey}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setRoomKey(e.target.value)
                      }
                    />
                  </div>
                  <CyberButton variant="join" onClick={handleJoinClick}>
                    Join Node
                  </CyberButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-between items-center text-[10px] text-emerald-800/80 font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Encrypted :: TLS_V1.3</span>
            </div>
            <span>Latency: 14ms</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
