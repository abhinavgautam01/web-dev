import { WebSocketServer, WebSocket } from "ws";
import { randomUUID } from "crypto"; // Import UUID generator

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room_id: string;
  username: string;
  userId: string; 
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
      payload: { room_id: string; username: string; message: string; userId: string }; 
    };

let allSockets: User[] = [];


const getRoomUsers = (room_id: string): { username: string; userId: string }[] => {
  return allSockets
    .filter(user => user.room_id === room_id)
    .map(user => ({ username: user.username, userId: user.userId }));
};


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
  
  const newUserId = randomUUID(); 
  
  
  (socket as any).userId = newUserId; 

  socket.on("message", (message) => {
    try {
      const parsedMessage: MessagePayload = JSON.parse(message.toString());

      const username = parsedMessage.payload.username || "Anonymous";

      if (parsedMessage.type === "join") {
        const room_id = parsedMessage.payload.room_id;
        
        
        const roomExists = allSockets.some(x => x.room_id === room_id);

        if (roomExists) {
          
          allSockets.push({
            socket: socket,
            room_id: room_id,
            username: username,
            userId: newUserId, 
          });
          
          console.log(`user ${username} [${newUserId}] joined room: ${room_id}`);

          
          socket.send(
            JSON.stringify({
              type: "join_success",
              payload: { room_id: room_id, userId: newUserId }, 
            })
          );
          
          
          socket.send(
            JSON.stringify({
                type: "room_users",
                payload: { users: getRoomUsers(room_id) }
            })
          );

          
          broadcastMessage(room_id, {
            type: "system_message",
            payload: { message: `${username} has joined the sector.` },
          });
          
          broadcastMessage(room_id, {
            type: "user_joined",
            payload: { username: username, userId: newUserId }, 
          });

        } else {
          socket.send(
            JSON.stringify({
              type: "error",
              payload: { message: "Access Token is invalid or room does not exist." },
            })
          );
        }
      }

      if (parsedMessage.type === "host") {
        const room_id = parsedMessage.payload.room_id;
        
        
        const roomExists = allSockets.some(x => x.room_id === room_id);

        if (roomExists) {
          socket.send(
            JSON.stringify({
              type: "error",
              payload: { message: "Encryption Channel already exists. Try joining instead." },
            })
          );
        } else {
          
          allSockets.push({
            socket: socket,
            room_id: room_id,
            username: username,
            userId: newUserId, 
          });
          
          console.log(`user ${username} [${newUserId}] hosted room: ${room_id}`);

          
          socket.send(
            JSON.stringify({
              type: "host_success",
              payload: { room_id: room_id, userId: newUserId }, 
            })
          );
          
          
          socket.send(
            JSON.stringify({
                type: "room_users",
                payload: { users: getRoomUsers(room_id) }
            })
          );
        }
      }

      if (parsedMessage.type === "chat") {
        
        const currentUser = allSockets.find((x) => x.socket === socket);

        if (currentUser) {
          console.log(
            `Chat message in room ${currentUser.room_id} from ${currentUser.username} [${currentUser.userId}]: ${parsedMessage.payload.message}`
          );

          broadcastMessage(currentUser.room_id, {
            type: "chat",
            payload: {
              username: currentUser.username,
              userId: currentUser.userId, 
              message: (parsedMessage.payload as any).message,
            },
          });
        }
      }
    } catch (e) {
      console.error("Received message was not valid JSON:", e);
    }
  });

  socket.on("close", () => {
    
    const closedUserId = (socket as any).userId;
    let currentUser = allSockets.find((x) => x.userId === closedUserId);

    if (currentUser) {
      allSockets = allSockets.filter((x) => x.socket !== socket);

      console.log(`user ${currentUser.username} [${currentUser.userId}] disconnected from room: ${currentUser.room_id}`);

      
      broadcastMessage(currentUser.room_id, {
        type: "user_left",
        payload: {
          username: currentUser.username,
          userId: currentUser.userId, 
        },
      });
      
      
      broadcastMessage(currentUser.room_id, {
        type: "system_message",
        payload: {
          message: `${currentUser.username} has disconnected.`,
        },
      });
    }
  });

  socket.on("error", (err) => {
    console.error("Socket error:", err);
    socket.close(); 
  });
});

console.log("WebSocket server running on ws://localhost:8080");