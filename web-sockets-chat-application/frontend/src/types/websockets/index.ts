import type { RefObject } from "react";
import type { MessagePayload } from "../message_payload";

export type ServerResponse =
  | {
      type: "host_success" | "join_success";
      payload: {
        room_id: string;
        userId: string;
        username?: string;
        message?: string;
      };
    }
  | {
      type: "chat";
      payload: {
        username: string;
        userId: string;
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
      type: "room_users";
      payload: {
        users: { username: string; userId: string }[];
      };
    }
  | {
      type: "user_joined";
      payload: {
        username: string;
        userId: string;
      };
    }
  | {
      type: "user_left";
      payload: {
        username: string;
        userId: string;
      };
    }
  | {
      type: "error";
      payload: {
        message: string;
      };
    }
    | null

export interface ChatContextType {
  ws: RefObject<WebSocket | null>;
  username: string;
  setUsername: (name: string) => void;
  myUserId: string | null;
  setMyUserId: (id: string | null) => void;
  sendMessage: (message: MessagePayload) => boolean;
  latestServerMessage: ServerResponse | null;
  setLatestServerMessage: (msg: ServerResponse) => void;
}
