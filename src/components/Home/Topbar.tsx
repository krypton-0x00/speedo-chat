"use client";
import React from "react";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "next-themes";
import { audioAtom } from "@/recoil/atoms/preferences.atom";
import { useRecoilState } from "recoil";

const Topbar = () => {
  const { setTheme } = useTheme();
  const [audio, setAudio] = useRecoilState(audioAtom);
  return (
    <div className="flex justify-center gap-4 items-center w-full h-16 bg-transparent">
      <Button variant="outline" size={"icon"} onClick={() => setTheme("light")}>
        <SunIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button variant="outline" size={"icon"} onClick={() => setTheme("dark")}>
        <MoonIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button variant="outline" onClick={() => setAudio(!audio)} size={"icon"}>
        {audio ? (
          <Volume2 className="size-[1.2rem] text-muted-foreground" />
        ) : (
          <VolumeX className="size-[1.2rem] text-muted-foreground" />
        )}
      </Button>
    </div>
  );
};

export default Topbar;
