import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { USERS } from "@/data";
import { cn } from "@/lib/utils";
import SidebarProps from "@/types/SidebarProps.type";
import { LogOutIcon } from "lucide-react";
import React from "react";

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const selectedUser = USERS[0];
  return (
    <div>
      <div className="relative flex flex-col gap-4 p-2 data-[collapsed=true]:p-2 max-h-full group overflow-auto bg-background h-screen">
        {!isCollapsed && (
          <div className="flex justify-between p-2 items-center">
            <div className="flex gap-2 items-center text-2xl">
              <p className="font-medium">Chats</p>
            </div>
          </div>
        )}

        <ScrollArea className="gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
          {USERS.map((user, index) =>
            isCollapsed ? (
              <TooltipProvider key={index}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div>
                      <Avatar className="my-1 justify-center items-center">
                        <AvatarImage
                          src={""}
                          alt="User Profile"
                          className="border-2  border-white  rounded-full w-10 h-10"
                        />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="sr-only">{user.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    {user.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                key={index}
                variant={"red"}
                size={"xl"}
                className={cn(
                  "w-full justify-start gap-4 my-1  text-white bg-zinc-900 hover:bg-red-600",
                  selectedUser.email === user.email &&
                    "dark:bg-red-600 dark:text-white dark:hover:bg-red-600 dark:hover:text-white shrink"
                )}
              >
                <Avatar className="my-1 justify-center items-center">
                  <AvatarImage
                    src={""}
                    alt={""}
                    // referrerPolicy="no-referrer"
                    className="w-10 h-10 border-white "
                  />
                  <AvatarFallback className="">{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col max-w-28">
                  <span>{user.name}</span>
                </div>
              </Button>
            )
          )}
        </ScrollArea>
        <div className="mt-auto">
          <div className="flex justify-between items-center gap-2 md:px-6 py-2 ">
            {!isCollapsed && (
              <Avatar className="my-1 justify-center items-center">
                <AvatarImage
                  src={""}
                  alt={""}
                  // referrerPolicy="no-referrer"
                  className="w-10 h-10 border-white "
                />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            )}
            <div className="flex ">
              <LogOutIcon className="hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
