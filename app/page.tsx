import { Messages } from "../src/components/organism";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-row">
      <Messages />
      <Chatroom />
    </div>
  );
}
