import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import './App.css';
function App() {
    const [socket, setSocket] = useState();
    const inputRef = useRef();
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onmessage = (ev) => {
            alert(ev.data);
        };
    }, []);
    function sendMessage() {
        if (!socket) {
            return;
        }
        const message = inputRef.current.value;
        socket.send(message);
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("input", { ref: inputRef, type: 'text', placeholder: 'Enter Message' }), _jsx("button", { onClick: sendMessage, children: "Send" })] }) }));
}
export default App;
//# sourceMappingURL=App.js.map