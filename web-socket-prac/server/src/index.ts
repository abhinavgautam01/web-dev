import { WebSocketServer } from "ws"

const wss = new WebSocketServer({port: 8080})

wss.on("connection", (socket)=>{
    console.log("user connected")
    // message sent to the client from the server...!

    // message sent from client, will be logged
    socket.on("message", (e)=>{
        if(e.toString() == "ping"){
            socket.send("pong")
        }
    })
})