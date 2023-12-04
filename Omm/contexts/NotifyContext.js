import { createContext, useState } from "react";

export const NotifyContext = createContext({});

export function NotifyContextProvider({ children }) {
  const [isUpdate, setIsUpdate] = useState(false);

  return <NotifyContext.Provider value={{ isUpdate, setIsUpdate }}>{children}</NotifyContext.Provider>;
}
