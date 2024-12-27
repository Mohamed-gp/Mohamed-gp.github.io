"use client";
import { createContext, useState } from "react";

interface ActiveModelContext {
  activeModel: string;
  setActiveModel: (model: string) => void;
}

export const activeModelContext = createContext<ActiveModelContext | null>(null);

const ActiveModelProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeModel, setActiveModel] = useState<string>("");
  return (
    <activeModelContext.Provider value={{ activeModel, setActiveModel }}>
      {children}
    </activeModelContext.Provider>
  );
};

export default ActiveModelProvider;
