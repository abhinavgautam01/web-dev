import WebSocket, {WebSocketServer} from "ws";
import http from "http";

const server = http.createServer(function(request: any, response: any){
    console.log((new Date()) + " Recieved request for " + request.url);
    response.end("hi there..!")
})

let userCount = 0;
const wss = new WebSocketServer({ server: server })

wss.on("connection", function connection(ws){
    ws.on("error", console.error);

    ws.on("message", function message(data, isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {binary: isBinary});
            }
        });
    });

    console.log("user connected: ", ++userCount)
    ws.send("Hey! This is the message from the server..!");
});

server.listen(8080, function(){
    console.log((new Date()) + "Server is listening on port http://localhost:8080");
})