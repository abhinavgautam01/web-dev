export type MessagePayload =
  | { type: "host"; payload: { room_id: string; username: string | "Anonymous" } }
  | { type: "join"; payload: { room_id: string; username: string | "Anonymous" } }
  | { type: "chat"; payload: { room_id: string; username: string | "Anonymous"; message: string } };