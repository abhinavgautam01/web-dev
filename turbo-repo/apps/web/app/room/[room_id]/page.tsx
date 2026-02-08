import { InputBox } from "@repo/ui/input";

export default function ChatRoom() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
    }}>
      <div
        style={{
          width: "60vw",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: 30,
          padding: 30,
          border: "2px solid red",
        }}
      >
        {" "}
        <div>Chat Room</div>
        <div>
          <InputBox placeholder="Enter Your Message" size="big" />
        </div>
      </div>
    </div>
  );
}
