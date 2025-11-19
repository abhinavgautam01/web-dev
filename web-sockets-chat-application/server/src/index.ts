import { WebSocketServer, WebSocket } from "ws"

const wss = new WebSocketServer({port: 8080})

let userCount = 0
let allSockets: WebSocket[] = []

wss.on("connection", (socket)=>{
    allSockets.push(socket)
    userCount = userCount + 1;
    console.log(`user${userCount} connected`)

    socket.on("message", (message)=>{
        console.log(`message recieved ${message.toString()}`)
        allSockets.forEach(socket => {
            socket.send(message.toString() + " from the server")
        });
    })
})