import ChatPage from "@/components/Home/chat/chat-page";
import Topbar from "@/components/Home/Topbar";
import { cookies } from "next/headers";
import React from "react";

const Home = () => {
  const layout = cookies().get("resize-layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  return (
    <main className="flex flex-col items-center justify-center">
      <Topbar />
      <ChatPage defaultLayout={defaultLayout} />
    </main>
  );
};

export default Home;
