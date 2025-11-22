import { createContext} from "react";
import type { ChatContextType } from "../types/websockets";
const defaultContextValue: ChatContextType = {
  ws: { current: null },
  username: "",
  setUsername: () => {},
  sendMessage: () => false,
  latestServerMessage: null,
  setLatestServerMessage: () => {},
};
export const ChatContext = createContext<ChatContextType>(defaultContextValue);
