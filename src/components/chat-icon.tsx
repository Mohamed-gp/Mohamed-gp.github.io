"use client";

import { activeModelContext } from "@/context/ActiveModelContext";
import { MessageCircle } from "lucide-react";
import { useContext } from "react";

export function ChatIcon() {
  const activeModel = useContext(activeModelContext);

  return (
    <button
      onClick={() => activeModel?.setActiveModel("aiChatBot")}
      className={`fixed bottom-4 left-4 p-2 rounded-full bg-primary text-white transition-all duration-300 hover:scale-110`}
      aria-label="Open chat"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
