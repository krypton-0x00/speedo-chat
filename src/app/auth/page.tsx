import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Welcome to Our App
      </h1>
      <div className="space-x-4">
        <Button
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-600 hover:text-black"
        >
          Log In
        </Button>
        <Button className="bg-red-600 text-black hover:bg-red-700 hover:text-white">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Home;
