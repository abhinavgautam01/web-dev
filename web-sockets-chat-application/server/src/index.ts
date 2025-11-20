import { WebSocketServer, WebSocket } from "ws"

const wss = new WebSocketServer({port: 8080})

interface User {
    socket: WebSocket,
    room_id: string
}
let allSockets: User[] = []

wss.on("connection", (socket)=>{
    console.log(`user connected`)

    socket.on("message", (message)=>{
        const parsedMessage = JSON.parse(message.toString())
        if(parsedMessage.type === "join"){
            console.log(`user_joined ${parsedMessage.payload.room_id}`)
            allSockets.push({
                socket: socket,
                room_id: parsedMessage.payload.room_id
            })
        }

        if(parsedMessage.type === "chat"){
            const currentUserRoom = allSockets.find(x=> x.socket == socket)?.room_id

            allSockets.forEach(ws=> {
                if(ws.room_id == currentUserRoom){
                    ws.socket.send(parsedMessage.payload.message)
                }
            })
        }
    })

})