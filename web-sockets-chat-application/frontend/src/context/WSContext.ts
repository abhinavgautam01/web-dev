import { createContext} from "react";
import type { ChatContextType } from "../types/websockets";

const defaultContextValue: ChatContextType = {
  ws: { current: null },
  username: "",
  setUsername: () => {},
  myUserId: null, // Default to null initially
  setMyUserId: () => {}, // Placeholder function
  sendMessage: () => false,
  latestServerMessage: null,
  setLatestServerMessage: () => {},
};

export const ChatContext = createContext<ChatContextType>(defaultContextValue);