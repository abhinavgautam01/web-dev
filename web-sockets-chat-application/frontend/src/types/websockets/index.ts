import type { RefObject } from "react";
import type { MessagePayload } from "../message_payload";

export type ServerResponse =
  | {
      type: "host_success" | "join_success";
      payload: {
        room_id: string;
        username?: string;
        message?: string;
      };
    }
  | {
      type: "chat_message";
      payload: {
        room_id: string;
        username: string;
        message: string;
      };
    }
  | {
      type: "system_message";
      payload: {
        message: string;
      };
    }
  | {
      type: "error";
      payload: {
        message: string;
      };
    }
    |
    null;
export interface ChatContextType {
  ws: RefObject<WebSocket | null>;
  username: string;
  setUsername: (name: string) => void;
  sendMessage: (message: MessagePayload) => boolean;
  latestServerMessage: ServerResponse | null;
  setLatestServerMessage: (msg: ServerResponse) => void;
}
