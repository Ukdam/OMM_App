import { createContext, useState } from "react";

export const IPContext = createContext({});

export function IPContextProvider({ children }) {
  const [myIP] = useState("172.20.10.2");

  return <IPContext.Provider value={{ myIP }}>{children}</IPContext.Provider>;
}
