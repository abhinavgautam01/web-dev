import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// NOTE: Assuming your components are named Lobby.tsx, RoomPage.tsx, and NotFound.tsx
import { Lobby } from "./components/Lobby.tsx"; 
import { RoomPage } from "./pages/RoomPage.tsx"; 
import { ChatProvider } from "./context/ChatContext.tsx";
import { NotFound } from "./pages/NotFound.tsx";

function App() {
  return (
    // Sets the global dark background and full height for visibility
    <div className="min-h-screen w-full bg-[#020617] font-sans text-white"> 
      <ChatProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/room/:room_id" element={<RoomPage />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChatProvider>
    </div>
  );
}

export default App;