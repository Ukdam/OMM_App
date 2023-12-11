import { createContext, useState } from "react";

export const IPContext = createContext({});

export function IPContextProvider({ children }) {
  // 자기 ip입력
  const [myIP] = useState("ip입력해주세요");

  return <IPContext.Provider value={{ myIP }}>{children}</IPContext.Provider>;
}
