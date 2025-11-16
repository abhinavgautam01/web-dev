import { WebSocketServer } from "ws"

const wss = new WebSocketServer({port: 8080})

wss.on("connection", (socket)=>{
    console.log("user connected")
    // message sent to the client from the server...!
    setInterval(()=>{
        socket.send("hello")
    }, 500)

    // message sent from client, will be logged
    socket.on("message", (e)=>{
        console.log(e.toString())
    })
})