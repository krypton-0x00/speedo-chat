"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
interface Layout {
  defaultLayout: number[] | undefined;
}

const ChatPage = ({ defaultLayout = [320, 480] }: Layout) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  //checks if the screen is mobile
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen w-screen bg-background rounded-none"
      onLayout={(sizes: number[]) => {
        document.cookie = `resize-layout=${JSON.stringify(sizes)}`;
      }}
    >
      <ResizablePanel
        className={cn(
          "h-screen",
          isCollapsed && "min-w-[88px] transition-all duration-300 ease-in-out"
        )}
        defaultSize={defaultLayout[0]}
        collapsedSize={8}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `resize-layout:collapsed=true;`;
        }}
        onExpand={() => () => {
          setIsCollapsed(false);
          document.cookie = `resize-layout:collapsed=false;`;
        }}
      >
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="" defaultSize={defaultLayout[1]} minSize={30}>
        <div className="flex justify-center items-center h-full w-full px-10">
          <h1 className="text-3xl font-bold">Speedo Chat</h1>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatPage;
