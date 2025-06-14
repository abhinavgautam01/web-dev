import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("")

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected..!");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log("Reecieved message : ", message.data);
      setLatestMessage(message.data);
    };

    return ()=>{
      socket.close()
    }
  }, []);

  if (!socket) {
    return <div>Connecting to socket server...</div>;
  }

  return (
    <>
      <input onChange={(e)=>setMessage(e.target.value)}></input>
      <button onClick={() => socket.send(message)}>Send Message</button>
      <p>
      {latestMessage}
      </p>
    </>
  );
}

export default App;
