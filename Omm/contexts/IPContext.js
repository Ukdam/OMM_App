import { createContext, useState } from "react";

export const IPContext = createContext({});

export function IPContextProvider({ children }) {
  const [myIP] = useState("192.168.27.191");

  return <IPContext.Provider value={{ myIP }}>{children}</IPContext.Provider>;
}
