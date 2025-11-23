import { useState, useEffect, useRef, type ReactNode } from "react";
import type { ServerResponse } from "../types/websockets";
import type { MessagePayload } from "../types/message_payload";
import { ChatContext } from "./WSContext";

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [username, setUsername] = useState<string>("");
  
  const [myUserId, setMyUserId] = useState<string | null>(null); 
  
  const [latestServerMessage, setLatestServerMessage] =
    useState<ServerResponse | null>(null);
  const ws = useRef<WebSocket | null>(null);

  const MAX_RETRIES = 3;
  const INITIAL_BACKOFF_MS = 1000;

  const connectWebSocket = (retryCount = 0) => {
    if (ws.current) return;

    
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => {
      console.log("WebSocket connected from Context.");
      retryCount = 0;
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected from Context.");
      if (retryCount < MAX_RETRIES) {
        const delay = INITIAL_BACKOFF_MS * Math.pow(2, retryCount);
        console.log(
          `Attempting reconnection in ${delay}ms (Attempt ${
            retryCount + 1
          }/${MAX_RETRIES}).`
        );

        ws.current = null;
        setTimeout(() => connectWebSocket(retryCount + 1), delay);
      } else {
        console.error(
          "Failed to reconnect to WebSocket after multiple attempts."
        );
      }
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket Error in Context:", error);
      ws.current?.close();
    };

    ws.current.onmessage = (event) => {
      let data: ServerResponse | null = null;
      const rawData = event.data;

      try {
        data = JSON.parse(rawData);
      } catch (error) {
        console.warn(
          "Incoming message was not valid JSON. Treating as a system message:",
          error,
          "Raw Data:",
          rawData
        );
        data = {
          type: "system_message",
          payload: {
            message: String(rawData),
          },
        } as ServerResponse;
      }

      if (data) {
        
        if (
          (data.type === "host_success" || data.type === "join_success") &&
          data.payload.userId
        ) {
          console.log("Setting myUserId:", data.payload.userId);
          setMyUserId(data.payload.userId);
        }

        setLatestServerMessage(data);
      }
    };
  };

  useEffect(() => {
    connectWebSocket(0);

    return () => {
      if (ws.current) {
        ws.current.onclose = null;
        ws.current.close();
        console.log("WebSocket Connection closed permanently from Context.");
      }
    };
  }, []);

  const sendMessage = (message: MessagePayload) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
      return true;
    } else {
      console.error(
        "WebSocket is not open. ReadyState:",
        ws.current?.readyState
      );
      return false;
    }
  };

  return (
    <ChatContext.Provider
      value={{
        ws,
        username,
        setUsername,
        myUserId, 
        setMyUserId, 
        sendMessage,
        latestServerMessage,
        setLatestServerMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};