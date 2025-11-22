import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room_id: string;
  username: string;
}

type MessagePayload =
  | {
      type: "host";
      payload: { room_id: string; username: string };
    }
  | {
      type: "join";
      payload: { room_id: string; username: string };
    }
  | {
      type: "chat";
      payload: { room_id: string; username: string; message: string };
    };

let allSockets: User[] = [];

const broadcastMessage = (room_id: string, message: object) => {
  const jsonMessage = JSON.stringify(message);
  allSockets.forEach((user) => {
    if (user.room_id === room_id && user.socket.readyState === WebSocket.OPEN) {
      user.socket.send(jsonMessage);
    }
  });
};

wss.on("connection", (socket) => {
  console.log(`user connected`);

  socket.on("message", (message) => {
    try {
      const parsedMessage: MessagePayload = JSON.parse(message.toString());

      const username = parsedMessage.payload.username || "Anonymous";

      parsedMessage.payload.username = username;

      if (parsedMessage.type === "join") {
        let room = allSockets.find(
          (x) => x.room_id == parsedMessage.payload.room_id
        );

        if (room) {
          console.log(
            `user ${username} ${parsedMessage.type}ed: ${parsedMessage.payload.room_id}`
          );

          allSockets.push({
            socket: socket,
            room_id: parsedMessage.payload.room_id,
            username: username,
          });

          socket.send(
            JSON.stringify({
              type: "join_success",
              payload: {
                room_id: parsedMessage.payload.room_id,
              },
            })
          );

          broadcastMessage(parsedMessage.payload.room_id, {
            type: "system_message",
            payload: {
              message: `${username} has joined the room.`,
            },
          });
        } else {
          socket.send(
            JSON.stringify({
              type: "error",
              payload: {
                message: "Invalid room key or room does not exist.",
              },
            })
          );
        }
      }

      if (parsedMessage.type === "host") {
        let room = allSockets.find(
          (x) => x.room_id == parsedMessage.payload.room_id
        );

        if (room) {
          socket.send(
            JSON.stringify({
              type: "error",
              payload: {
                message: "Room already exist..!",
              },
            })
          );
        } else {
          console.log(
            `user ${username} ${parsedMessage.type}ed: ${parsedMessage.payload.room_id}`
          );

          allSockets.push({
            socket: socket,
            room_id: parsedMessage.payload.room_id,
            username: username,
          });

          socket.send(
            JSON.stringify({
              type: "host_success",
              payload: {
                room_id: parsedMessage.payload.room_id,
              },
            })
          );
        }
      }

      if (parsedMessage.type === "chat") {
        const currentUser = allSockets.find((x) => x.socket === socket);

        if (currentUser) {
          console.log(
            `Chat message in room ${currentUser.room_id} from ${currentUser.username}: ${parsedMessage.payload.message}`
          );

          broadcastMessage(currentUser.room_id, {
            type: "chat_message",
            payload: {
              username: currentUser.username,
              message: parsedMessage.payload.message,
            },
          });
        }
      }
    } catch (e) {
      console.error("Received message was not valid JSON:", e);
    }
  });

  socket.on("error", (err) => {
    console.error("Socket error:", err);
  });
});
