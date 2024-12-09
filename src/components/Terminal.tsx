import React from "react";
import Typewriter from "typewriter-effect";

interface TerminalProps {
  commands: string[];
}

export const Terminal: React.FC<TerminalProps> = ({ commands }) => {
  return (
    <div className="glass-panel p-6 w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="font-mono text-sm sm:text-base">
        <Typewriter
          options={{
            strings: commands,
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 25,
          }}
        />
      </div>
    </div>
  );
};